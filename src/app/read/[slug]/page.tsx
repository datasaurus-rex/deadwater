import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentDraftWorkbench } from "@/components/ContentDraftWorkbench";
import { getAllPosts, getPostBySlug } from "@/lib/content";

type Props = {
  params: { slug: string };
};

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

  return (
    <article className="container-narrow section">
      <header className="flex flex-col gap-4">
        <p className="eyebrow">{post.date}</p>
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

      <div className="divider" />

      <div className="prose-deadwater" dangerouslySetInnerHTML={{ __html: post.html }} />

      {showDraftWorkbench ? <ContentDraftWorkbench /> : null}
    </article>
  );
}
