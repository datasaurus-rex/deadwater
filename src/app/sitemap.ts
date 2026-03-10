import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/content";
import { otherOptions } from "@/lib/other-options";

const siteUrl = "https://deadwater.ai";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();
  const now = new Date();

  const postEntries = posts.map((post) => ({
    url: `${siteUrl}/read/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  const otherOptionEntries = otherOptions.map((option) => ({
    url: `${siteUrl}/other-options/${option.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6
  }));

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${siteUrl}/content-os`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95
    },
    {
      url: `${siteUrl}/pricing`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: `${siteUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${siteUrl}/read`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85
    },
    {
      url: `${siteUrl}/other-options`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75
    },
    ...postEntries,
    ...otherOptionEntries
  ];
}
