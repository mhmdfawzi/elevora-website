/**
 * Typed gtag helpers.
 *
 * Centralising calls here means:
 *  - One place to update if the GA4 API changes.
 *  - TypeScript catches wrong argument shapes everywhere.
 *  - Easy to stub in tests.
 */

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

// Tell TypeScript that window.gtag exists once the GA script has loaded.
declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "js" | "set",
      target: string | Date,
      params?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}

/** Send a page_view hit — called by the GoogleAnalytics component on route change. */
export function pageview(url: string): void {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("config", GA_MEASUREMENT_ID, { page_path: url });
}
