import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import { notFound } from "next/navigation";
import { CallToActionBlock, type CallToActionContent } from "@/components/CallToActionBlock";
import { ContentDraftWorkbench } from "@/components/ContentDraftWorkbench";
import { ContentOsAnatomyMap } from "@/components/ContentOsAnatomyMap";
import { TangentPost } from "@/components/TangentPost";
import { ctaContentByType, inlineBlogPostCta } from "@/lib/cta-content";
import { getAllPosts, getPostBySlug } from "@/lib/content";

type Props = {
  params: { slug: string };
};

const monthMap: Record<number, string> = {
  0: "jan",
  1: "feb",
  2: "mar",
  3: "apr",
  4: "may",
  5: "june",
  6: "july",
  7: "aug",
  8: "sept",
  9: "oct",
  10: "nov",
  11: "dec"
};

function formatDate(dateValue: string) {
  const parsed = new Date(dateValue);
  if (Number.isNaN(parsed.getTime())) {
    return dateValue;
  }

  const month = monthMap[parsed.getUTCMonth()] ?? "";
  const day = String(parsed.getUTCDate()).padStart(2, "0");
  const year = parsed.getUTCFullYear();
  return `${month} ${day} ${year}`;
}

function injectTangents(html: string) {
  let index = 0;
  return html.replace(/\[\[tangent:([^|]+)\|([^\]]+)\]\]/g, (_, label, text) => {
    const safeLabel = encodeURIComponent(String(label).trim());
    const safeText = encodeURIComponent(String(text).trim());
    const id = `tangent-${index++}`;
    return `
      <span class="tangent-inline-group">
        <button type="button" class="tangent-link" data-tangent-id="${id}" data-tangent-label="${safeLabel}" data-tangent="${safeText}">${label}</button>
        <span class="tangent-inline" data-tangent-id="${id}" data-tangent-label="${safeLabel}" data-tangent="${safeText}"></span>
      </span>
    `;
  });
}

function splitOnce(html: string, token: string) {
  const index = html.indexOf(token);
  if (index === -1) {
    return null;
  }

  return {
    before: html.slice(0, index),
    after: html.slice(index + token.length)
  };
}

function insertTokenBeforeSecondToLastH2(html: string, token: string) {
  const h2Pattern = /<h2\b[^>]*>/gi;
  const matches = Array.from(html.matchAll(h2Pattern));

  if (matches.length === 0) {
    return html;
  }

  const target = matches.length >= 2 ? matches[matches.length - 2] : matches[0];
  const insertAt = target.index ?? -1;

  if (insertAt < 0) {
    return html;
  }

  return `${html.slice(0, insertAt)}${token}${html.slice(insertAt)}`;
}

function renderSegmentWithInlineCta({
  html,
  inlineToken,
  ctaContent
}: {
  html: string;
  inlineToken: string;
  ctaContent: CallToActionContent;
}) {
  const split = splitOnce(html, inlineToken);

  if (!split) {
    return html ? (
      <div className="container-post">
        <TangentPost html={html} />
      </div>
    ) : null;
  }

  return (
    <>
      {split.before ? (
        <div className="container-post">
          <TangentPost html={split.before} />
        </div>
      ) : null}
      <div className="container-post my-10">
        <CallToActionBlock content={ctaContent} />
      </div>
      {split.after ? (
        <div className="container-post">
          <TangentPost html={split.after} />
        </div>
      ) : null}
    </>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return {};
  }

  const imageUrl = post.image ?? "/blog/blog-image.jpg";

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: `${post.title} — Deadwater.ai`,
      description: post.description,
      type: "article",
      tags: post.tags,
      images: [
        {
          url: imageUrl
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [imageUrl]
    }
  };
}

export default async function ReadPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  const showDraftWorkbench = post.slug === "content-draft-workbench";
  const showAnatomyMap = post.slug === "overview-how-content-operating-systems-work";
  const showInlineContentOsCta = Boolean(post.image && post.image !== "/blog/blog-image.jpg");
  const inlineToken = "__INLINE_CTA_TOKEN__";
  const anatomyMarker = "ANATOMY_MAP";
  const tangentHtml = injectTangents(post.html);
  const htmlWithInlineToken = showInlineContentOsCta
    ? insertTokenBeforeSecondToLastH2(tangentHtml, inlineToken)
    : tangentHtml;
  const anatomySplit = showAnatomyMap ? splitOnce(htmlWithInlineToken, anatomyMarker) : null;
  const anatomyBefore = anatomySplit?.before ?? htmlWithInlineToken;
  const anatomyAfter = anatomySplit?.after ?? "";
  const siteUrl = "https://deadwater.ai";
  const canonicalUrl = `${siteUrl}/read/${post.slug}`;
  const heroImageUrl = post.image ?? "/blog/blog-image.jpg";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: post.title,
        isPartOf: { "@id": `${siteUrl}#website` },
        about: { "@id": `${siteUrl}#organization` },
        primaryImageOfPage: heroImageUrl ? { "@id": `${canonicalUrl}#primaryimage` } : undefined
      },
      heroImageUrl
        ? {
            "@type": "ImageObject",
            "@id": `${canonicalUrl}#primaryimage`,
            url: heroImageUrl.startsWith("http") ? heroImageUrl : `${siteUrl}${heroImageUrl}`
          }
        : undefined,
      {
        "@type": "BlogPosting",
        "@id": `${canonicalUrl}#blogposting`,
        headline: post.title,
        description: post.description,
        image: heroImageUrl ? { "@id": `${canonicalUrl}#primaryimage` } : undefined,
        datePublished: new Date(post.date).toISOString(),
        inLanguage: "en",
        keywords: post.tags?.length ? post.tags : undefined,
        author: { "@id": `${siteUrl}#organization` },
        publisher: { "@id": `${siteUrl}#organization` },
        mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Deadwater.ai", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Read", item: `${siteUrl}/read` },
          { "@type": "ListItem", position: 3, name: post.title, item: canonicalUrl }
        ]
      }
    ].filter(Boolean)
  };

  return (
    <article className="container-narrow section">
      <Script id="jsonld-post" type="application/ld+json">
        {JSON.stringify(jsonLd, null, 0)}
      </Script>
      <header className="flex flex-col gap-4">
        <p className="eyebrow">{formatDate(post.date)}</p>
        <h1 className="heading-serif text-4xl">{post.title}</h1>
        <p className="text-lg text-slate-300">{post.description}</p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
          <span>{post.readingTime}</span>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      <div className="mt-8 overflow-hidden rounded-xl border border-ink-800">
        <div className="relative h-56 w-full sm:h-72">
          <Image
            src={post.image ?? "/blog/blog-image.jpg"}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(min-width: 640px) 700px, 100vw"
          />
        </div>
      </div>

      <div className="divider" />

      {showAnatomyMap ? (
        <>
          {renderSegmentWithInlineCta({
            html: anatomyBefore,
            inlineToken,
            ctaContent: inlineBlogPostCta
          })}
          <ContentOsAnatomyMap />
          {renderSegmentWithInlineCta({
            html: anatomyAfter,
            inlineToken,
            ctaContent: inlineBlogPostCta
          })}
        </>
      ) : (
        renderSegmentWithInlineCta({
          html: htmlWithInlineToken,
          inlineToken,
          ctaContent: inlineBlogPostCta
        })
      )}

      {showDraftWorkbench ? <ContentDraftWorkbench /> : null}

      <div className="divider" />

      <CallToActionBlock content={ctaContentByType.blogPost} />
    </article>
  );
}
