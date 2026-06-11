import type { Metadata } from "next";
import { Suspense } from "react";
import { Hanken_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

// ── Google Fonts (downloaded at build time by Next.js, self-hosted at runtime)
// next/font/google fetches the exact files Google serves — identical rendering
// to the CDN version, but zero render-blocking network requests for users.

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-hanken",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-jetbrains",
  display: "swap",
});

// ── Metadata ─────────────────────────────────────────────────────────────────

const BASE_URL = "https://www.elevora.dev";

export const metadata: Metadata = {
  // Resolves all relative metadata URLs (og:image, canonical, etc.) against
  // the production origin. Must be set on the root layout.
  metadataBase: new URL(BASE_URL),

  // `template` appends " | Elevora" to every page title automatically.
  // Pages that need the full string verbatim should use `title: { absolute: "…" }`.
  title: {
    default: "Elevora | Custom Software, SaaS & AI Solutions",
    template: "%s | Elevora",
  },
  description:
    "Elevora helps startups and enterprises build scalable software products, SaaS platforms, and AI-powered solutions across Saudi Arabia and Egypt.",
  keywords: [
    "software consultancy",
    "SaaS development",
    "AI solutions",
    "custom software",
    "Saudi Arabia",
    "Egypt",
    "tech consulting",
  ],
  authors: [{ name: "Elevora", url: BASE_URL }],
  creator: "Elevora",

  // Open Graph — og:image is supplied automatically by /opengraph-image.tsx.
  // These fields set the fallback values inherited by every route.
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Elevora",
    title: "Elevora | Custom Software, SaaS & AI Solutions",
    description:
      "Elevora helps startups and enterprises build scalable software products, SaaS platforms, and AI-powered solutions across Saudi Arabia and Egypt.",
  },

  // Twitter card — twitter:image is also resolved from opengraph-image.tsx
  // when no separate twitter-image file exists (Next.js falls back automatically).
  twitter: {
    card: "summary_large_image",
    title: "Elevora | Custom Software, SaaS & AI Solutions",
    description:
      "Elevora helps startups and enterprises build scalable software products, SaaS platforms, and AI-powered solutions across Saudi Arabia and Egypt.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: BASE_URL },
};

// ── Root layout ───────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${hanken.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <head>
        {/* Preconnect to font CDN (used by Material Symbols) */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload LCP hero image */}
        <link
          rel="preload"
          as="image"
          href="/hero-bg.webp"
          type="image/webp"
          fetchPriority="high"
        />
        {/* Material Symbols — needed above-fold for nav icons; small CSS file */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,0&display=block"
        />
      </head>
      <body className="antialiased">
        {/* Suspense is required by Next.js when useSearchParams is used
            inside a Client Component rendered from the root layout. */}
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
