import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve AVIF first (best compression), fall back to WebP
    formats: ["image/avif", "image/webp"],
    // Responsive breakpoints that match real device widths
    deviceSizes: [390, 768, 1024, 1280, 1920],
    imageSizes: [16, 32, 64, 128, 256],
    // Aggressive caching — hero image barely changes
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  },
  // Compress all responses
  compress: true,
  // Strip X-Powered-By header
  poweredByHeader: false,
};

export default nextConfig;
