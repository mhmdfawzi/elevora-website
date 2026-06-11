import { ImageResponse } from "next/og";

// Route segment config — tells Next.js to generate this at build time.
export const runtime = "edge";

// Dimensions required by the Open Graph spec; also used for Twitter summary_large_image.
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Generates the default OG / Twitter social-card image for every page that
 * doesn't supply its own opengraph-image file.
 *
 * Rendered at build time (or on-demand on Vercel Edge) using @vercel/og.
 * Next.js automatically wires the resulting URL into:
 *   <meta property="og:image" ...>
 *   <meta name="twitter:image" ...>
 */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#0A0A0A",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle grid accent — top-right quadrant */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "600px",
            height: "315px",
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            display: "flex",
          }}
        />

        {/* Top-left badge */}
        <div
          style={{
            position: "absolute",
            top: "56px",
            left: "80px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#ffffff",
              display: "flex",
            }}
          />
          <span
            style={{
              fontSize: "12px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#737373",
            }}
          >
            elevora.dev
          </span>
        </div>

        {/* Wordmark */}
        <div
          style={{
            fontSize: "80px",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "#ffffff",
            lineHeight: 1,
            marginBottom: "24px",
            display: "flex",
          }}
        >
          Elevora
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "22px",
            fontWeight: 400,
            color: "#737373",
            lineHeight: 1.5,
            maxWidth: "620px",
            display: "flex",
          }}
        >
          Custom Software, SaaS &amp; AI Solutions for startups and enterprises.
        </div>
      </div>
    ),
    { ...size }
  );
}
