import type { MetadataRoute } from "next";

const BASE_URL = "https://www.elevora.dev";

// Static dates prevent unnecessary re-crawls — update when page content changes.
const SITE_LAUNCH = new Date("2025-01-01");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: SITE_LAUNCH,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: SITE_LAUNCH,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: SITE_LAUNCH,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: SITE_LAUNCH,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
