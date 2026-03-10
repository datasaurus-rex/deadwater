import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"]
      }
    ],
    host: "https://deadwater.ai",
    sitemap: "https://deadwater.ai/sitemap.xml"
  };
}
