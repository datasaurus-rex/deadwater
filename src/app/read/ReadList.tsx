"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type PostSummary = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: string;
  image?: string;
};

type Props = {
  posts: PostSummary[];
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

export function ReadList({ posts }: Props) {
  const [query, setQuery] = useState("");

  const featured = useMemo(() => {
    const featuredPosts = posts.filter((post) => post.tags.map((tag) => tag.toLowerCase()).includes("featured"));
    if (featuredPosts.length === 0) return null;
    return featuredPosts[0];
  }, [posts]);

  const tagList = useMemo(() => {
    const counts = new Map<string, number>();
    posts.forEach((post) => {
      post.tags.forEach((tag) => {
        const normalized = tag.toLowerCase();
        if (normalized === "featured") return;
        counts.set(tag, (counts.get(tag) ?? 0) + 1);
      });
    });

    return Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([tag]) => tag)
      .slice(0, 8);
  }, [posts]);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return posts;

    return posts.filter((post) => {
      const haystack = [post.title, post.description, post.tags.join(" ")].join(" ").toLowerCase();
      return haystack.includes(term);
    });
  }, [posts, query]);

  const rest = useMemo(() => {
    if (!featured) return filtered;
    return filtered.filter((post) => post.slug !== featured.slug);
  }, [filtered, featured]);

  return (
    <div className="mt-10">
      <div className="grid gap-8">
        {featured ? (
          <section className="border border-ink-800 bg-ink-900/40">
            <Link href={`/read/${featured.slug}`} className="focus-ring block">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,0.9fr)]">
                <div className="order-1 overflow-hidden border-b border-ink-800 lg:order-1 lg:border-b-0 lg:border-r">
                  <div className="relative h-72 w-full sm:h-80 lg:h-full">
                    <Image
                      src={featured.image ?? "/blog/blog-image.jpg"}
                      alt={featured.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 680px, 100vw"
                    />
                  </div>
                </div>
                <div className="order-2 p-6 lg:order-2">
                  <div className="flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-slate-400">
                    <span>Featured</span>
                    <span>{formatDate(featured.date)}</span>
                    <span>{featured.readingTime}</span>
                  </div>
                  <h2 className="heading-serif mt-4 text-3xl text-white">{featured.title}</h2>
                  <p className="mt-3 text-slate-300">{featured.description}</p>
                </div>
              </div>
            </Link>
            <div className="border-t border-ink-800 px-6 py-5">
              <div className="flex flex-wrap items-center gap-6">
                <label className="text-sm uppercase tracking-[0.2em] text-slate-400">
                  Search
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    className="mt-3 w-full max-w-md rounded-xl border border-ink-700 bg-ink-900 px-4 py-3 text-base text-white placeholder:text-slate-500 focus-ring"
                    placeholder="Filter by title, description, or tag"
                    aria-label="Search posts"
                  />
                </label>
                {tagList.length ? (
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs uppercase tracking-[0.3em] text-slate-400">Recent tags</span>
                    {tagList.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </section>
        ) : (
          <div className="border border-ink-800 bg-ink-900/40 p-6">
            <label className="text-sm uppercase tracking-[0.2em] text-slate-400">
              Search
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="mt-3 w-full max-w-md rounded-xl border border-ink-700 bg-ink-900 px-4 py-3 text-base text-white placeholder:text-slate-500 focus-ring"
                placeholder="Filter by title, description, or tag"
                aria-label="Search posts"
              />
            </label>
            {tagList.length ? (
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="text-xs uppercase tracking-[0.3em] text-slate-400">Recent tags</span>
                {tagList.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {rest.map((post) => (
            <Link key={post.slug} href={`/read/${post.slug}`} className="focus-ring border border-ink-800 bg-ink-900/40">
              <div className="overflow-hidden border-b border-ink-800">
                <div className="relative h-44 w-full">
                  <Image
                    src={post.image ?? "/blog/blog-image.jpg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 360px, (min-width: 768px) 45vw, 100vw"
                  />
                </div>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-slate-400">
                  <span>{formatDate(post.date)}</span>
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="heading-serif mt-3 text-2xl text-white">{post.title}</h2>
                <p className="mt-3 text-slate-300">{post.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-slate-400">No posts match that query.</p>
        ) : null}
      </div>
    </div>
  );
}
