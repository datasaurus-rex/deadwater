import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/content";
import { otherOptions } from "@/lib/other-options";

const siteUrl = "https://deadwater.ai";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  const postEntries = posts.map((post) => ({
    url: `${siteUrl}/read/${post.slug}`,
    lastModified: post.date
  }));

  const otherOptionEntries = otherOptions.map((option) => ({
    url: `${siteUrl}/other-options/${option.slug}`,
    lastModified: new Date().toISOString()
  }));

  return [
    { url: siteUrl, lastModified: new Date().toISOString() },
    { url: `${siteUrl}/read`, lastModified: new Date().toISOString() },
    { url: `${siteUrl}/other-options`, lastModified: new Date().toISOString() },
    { url: `${siteUrl}/content-os`, lastModified: new Date().toISOString() },
    { url: `${siteUrl}/about`, lastModified: new Date().toISOString() },
    { url: `${siteUrl}/contact`, lastModified: new Date().toISOString() },
    ...postEntries,
    ...otherOptionEntries
  ];
}
