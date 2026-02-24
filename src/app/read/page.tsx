import type { Metadata } from "next";
import { getAllPosts } from "@/lib/content";
import { ReadList } from "./ReadList";

const ogImage = "/og/og.png";

export const metadata: Metadata = {
  title: "Read",
  description: "Longform writing on Content OS, agent workflows, and AI-native knowledge systems.",
  openGraph: {
    title: "Read - Deadwater.ai",
    description: "Longform writing on Content OS, agent workflows, and AI-native knowledge systems.",
    images: [{ url: ogImage, alt: "Deadwater.ai - Content OS for an AI-first world" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Read - Deadwater.ai",
    description: "Longform writing on Content OS, agent workflows, and AI-native knowledge systems.",
    images: [ogImage]
  }
};

export default async function ReadPage() {
  const posts = await getAllPosts();

  return (
    <div className="container-narrow section">
      <div className="flex flex-col gap-4">
        <p className="eyebrow">Insights</p>
        <h1 className="heading-serif text-3xl">Content OS and AI-native systems blog</h1>
        <p className="text-lg text-slate-300">
          Essays on AI-native content systems, agent workflows, and the architecture that keeps knowledge alive.
        </p>
      </div>
      <ReadList
        posts={posts.map((post) => ({
          slug: post.slug,
          title: post.title,
          description: post.description,
          date: post.date,
          tags: post.tags,
          readingTime: post.readingTime,
          image: post.image
        }))}
      />
    </div>
  );
}


