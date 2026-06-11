"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { GA_MEASUREMENT_ID, pageview } from "@/lib/gtag";

/**
 * Google Analytics 4 — App Router integration.
 *
 * Strategy
 * ─────────
 * • `afterInteractive`: the gtag.js script loads right after hydration,
 *   before the page goes fully idle. This ensures `window.gtag` exists when
 *   the useEffect fires for the first navigation.
 *
 * • The init snippet fires `gtag('config', id)` once on the initial page load,
 *   so the useEffect intentionally skips the very first render (via `mounted`
 *   ref) to avoid a duplicate page_view for the landing URL.
 *
 * • Every subsequent pathname/searchParams change triggers a `pageview()` call,
 *   which is what GA4 needs for client-side navigation in an SPA.
 *
 * • The entire component returns null in non-production environments so your
 *   dev sessions never pollute your Analytics reports.
 */
export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Skip tracking in non-production or when the Measurement ID is absent.
  const isEnabled =
    process.env.NODE_ENV === "production" && Boolean(GA_MEASUREMENT_ID);

  // Tracks whether the initial page_view has already been sent by the init
  // snippet so we do not fire a duplicate event on mount.
  const mounted = useRef(false);

  useEffect(() => {
    if (!isEnabled) return;

    // Skip the very first run — the inline init script already sent the
    // initial page_view when gtag('config', id) was called.
    if (!mounted.current) {
      mounted.current = true;
      return;
    }

    const url =
      pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");
    pageview(url);
  }, [pathname, searchParams, isEnabled]);

  if (!isEnabled) return null;

  return (
    <>
      {/* Load the gtag.js library — afterInteractive keeps it off the
          critical path but available before the page goes fully idle. */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />

      {/* Initialise the data layer and send the first page_view. */}
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            send_page_view: true
          });
        `}
      </Script>
    </>
  );
}
