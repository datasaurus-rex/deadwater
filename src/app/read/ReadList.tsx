"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type PostSummary = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: string;
};

type Props = {
  posts: PostSummary[];
};

export function ReadList({ posts }: Props) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return posts;

    return posts.filter((post) => {
      const haystack = [post.title, post.description, post.tags.join(" ")].join(" ").toLowerCase();
      return haystack.includes(term);
    });
  }, [posts, query]);

  return (
    <div className="mt-10">
      <label className="text-sm uppercase tracking-[0.2em] text-slate-400">
        Search
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="mt-3 w-full rounded-xl border border-ink-700 bg-ink-900 px-4 py-3 text-base text-white placeholder:text-slate-500 focus-ring"
          placeholder="Filter by title, description, or tag"
          aria-label="Search posts"
        />
      </label>

      <div className="mt-8 grid gap-6">
        {filtered.map((post) => (
          <Link key={post.slug} href={`/read/${post.slug}`} className="focus-ring border-b border-ink-800 py-6">
            <div className="flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-slate-400">
              <span>{post.date}</span>
              <span>{post.readingTime}</span>
            </div>
            <h2 className="heading-serif mt-4 text-2xl text-white">{post.title}</h2>
            <p className="mt-3 text-slate-300">{post.description}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}

        {filtered.length === 0 ? (
          <p className="text-slate-400">No posts match that query.</p>
        ) : null}
      </div>
    </div>
  );
}
