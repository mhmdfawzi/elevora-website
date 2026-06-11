import type { MetadataRoute } from "next";

const BASE_URL = "https://www.elevora.dev";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Block server internals — no crawl value, just noise in the log.
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
