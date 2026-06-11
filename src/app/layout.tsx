import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const BASE_URL = "https://elevora.dev";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Elevora",
    title: "Elevora | Custom Software, SaaS & AI Solutions",
    description:
      "Elevora helps startups and enterprises build scalable software products, SaaS platforms, and AI-powered solutions across Saudi Arabia and Egypt.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Elevora — Custom Software, SaaS & AI Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevora | Custom Software, SaaS & AI Solutions",
    description:
      "Elevora helps startups and enterprises build scalable software products, SaaS platforms, and AI-powered solutions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: BASE_URL },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@500;600;700&family=Inter:wght@400;500&family=JetBrains+Mono:wght@500&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="antialiased">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
