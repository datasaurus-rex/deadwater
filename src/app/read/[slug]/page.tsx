import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContentDraftWorkbench } from "@/components/ContentDraftWorkbench";
import { ContentOsAnatomyMap } from "@/components/ContentOsAnatomyMap";
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

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: `${post.title} — Deadwater.ai`,
      description: post.description,
      type: "article",
      tags: post.tags
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
  const anatomyMarker = "ANATOMY_MAP";
  const anatomySplit = showAnatomyMap ? post.html.split(anatomyMarker) : [post.html];
  const anatomyBefore = anatomySplit[0] ?? "";
  const anatomyAfter = anatomySplit[1] ?? "";

  return (
    <article className="container-narrow section">
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
          <div className="prose-deadwater" dangerouslySetInnerHTML={{ __html: anatomyBefore }} />
          <ContentOsAnatomyMap />
          <div className="prose-deadwater" dangerouslySetInnerHTML={{ __html: anatomyAfter }} />
        </>
      ) : (
        <div className="prose-deadwater" dangerouslySetInnerHTML={{ __html: post.html }} />
      )}

      {showDraftWorkbench ? <ContentDraftWorkbench /> : null}

      <div className="divider" />

      <section className="border border-ink-800 bg-ink-900/40 p-6">
        <h3 className="heading-serif text-2xl text-white">Ready to learn more?</h3>
        <p className="mt-2 text-slate-300">Book a demo and we will walk you through what a Content OS looks like in practice.</p>
        <div className="mt-4 flex flex-wrap gap-4">
          <Link href="/contact" className="focus-ring border border-accent-blue bg-black px-6 py-3 text-xs uppercase tracking-[0.3em] text-white">
            Book a demo
          </Link>
          <Link href="/pricing" className="focus-ring border border-ink-700 bg-black px-6 py-3 text-xs uppercase tracking-[0.3em] text-slate-300 hover:text-white">
            View pricing
          </Link>
        </div>
      </section>
    </article>
  );
}
