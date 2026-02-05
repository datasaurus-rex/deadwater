import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/content";

const siteUrl = "https://deadwater.ai";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  const postEntries = posts.map((post) => ({
    url: `${siteUrl}/read/${post.slug}`,
    lastModified: post.date
  }));

  return [
    { url: siteUrl, lastModified: new Date().toISOString() },
    { url: `${siteUrl}/read`, lastModified: new Date().toISOString() },
    { url: `${siteUrl}/about`, lastModified: new Date().toISOString() },
    { url: `${siteUrl}/contact`, lastModified: new Date().toISOString() },
    ...postEntries
  ];
}
