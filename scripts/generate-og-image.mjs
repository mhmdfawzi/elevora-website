/**
 * Generates /public/og-image.png  (1200 × 630 px)
 *
 * Run once:  node scripts/generate-og-image.mjs
 *
 * Requires: sharp  (already a Next.js peer dependency)
 */

import sharp from "sharp";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "../public/og-image.png");

// ─── Design tokens (mirror the website) ──────────────────────────────────────
const W = 1200;
const H = 630;

const BG        = "#0A0A0A";   // --color-canvas-black
const WHITE     = "#FFFFFF";
const MUTED     = "#737373";   // --color-text-secondary
const BORDER    = "#1F1F1F";   // just above BG — subtle grid lines
const ACCENT    = "#2A2A2A";   // card surface

// ─── SVG source ───────────────────────────────────────────────────────────────
// All text is rendered as SVG so no font embedding is needed; the shapes are
// pure geometry.  "Elevora" uses tight tracking + bold weight for the wordmark.

const svg = /* xml */ `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <!-- Subtle radial glow centred top-right -->
    <radialGradient id="glow" cx="85%" cy="10%" r="55%">
      <stop offset="0%"   stop-color="#3B3B3B" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="${BG}"   stop-opacity="0"/>
    </radialGradient>

    <!-- Bottom vignette so text pops -->
    <linearGradient id="vignette" x1="0" y1="0" x2="0" y2="1">
      <stop offset="40%"  stop-color="${BG}" stop-opacity="0"/>
      <stop offset="100%" stop-color="${BG}" stop-opacity="0.7"/>
    </linearGradient>

    <!-- Clip to canvas -->
    <clipPath id="canvas"><rect width="${W}" height="${H}"/></clipPath>
  </defs>

  <!-- ── Background ──────────────────────────────────────────────────────── -->
  <rect width="${W}" height="${H}" fill="${BG}"/>

  <!-- Glow wash -->
  <rect width="${W}" height="${H}" fill="url(#glow)"/>

  <!-- ── Dot-grid texture (every 40 px) ─────────────────────────────────── -->
  <g clip-path="url(#canvas)" opacity="0.18">
    ${Array.from({ length: Math.ceil(W / 40) + 1 }, (_, col) =>
      Array.from({ length: Math.ceil(H / 40) + 1 }, (_, row) =>
        `<circle cx="${col * 40}" cy="${row * 40}" r="1" fill="${MUTED}"/>`
      ).join("")
    ).join("")}
  </g>

  <!-- ── Horizontal rule across the full width ───────────────────────────── -->
  <line x1="0" y1="490" x2="${W}" y2="490" stroke="${BORDER}" stroke-width="1"/>

  <!-- ── Top-left: domain badge ──────────────────────────────────────────── -->
  <!-- Pill container -->
  <rect x="64" y="56" width="148" height="28" rx="14"
        fill="none" stroke="${BORDER}" stroke-width="1"/>
  <!-- Status dot -->
  <circle cx="88" cy="70" r="4" fill="#4ADE80"/>
  <!-- Domain text -->
  <text x="102" y="75"
        font-family="ui-monospace, 'Courier New', monospace"
        font-size="11" font-weight="500" letter-spacing="0.08em"
        fill="${MUTED}" text-anchor="start">elevora.dev</text>

  <!-- ── Centre-left: wordmark ───────────────────────────────────────────── -->
  <!-- "E" mark — a stylised square with a notch, acting as a logo icon -->
  <g transform="translate(64, 190)">
    <!-- Outer square -->
    <rect width="52" height="52" rx="6" fill="${ACCENT}" stroke="${BORDER}" stroke-width="1"/>
    <!-- Three horizontal bars representing "E" -->
    <rect x="13" y="14" width="26" height="4" rx="2" fill="${WHITE}"/>
    <rect x="13" y="24" width="18" height="4" rx="2" fill="${WHITE}"/>
    <rect x="13" y="34" width="26" height="4" rx="2" fill="${WHITE}"/>
  </g>

  <!-- Wordmark "Elevora" -->
  <text x="132" y="233"
        font-family="ui-sans-serif, system-ui, -apple-system, sans-serif"
        font-size="42" font-weight="700" letter-spacing="-0.03em"
        fill="${WHITE}">Elevora</text>

  <!-- ── Main headline ───────────────────────────────────────────────────── -->
  <!-- Line 1 -->
  <text x="64" y="340"
        font-family="ui-sans-serif, system-ui, -apple-system, sans-serif"
        font-size="52" font-weight="700" letter-spacing="-0.025em"
        fill="${WHITE}">Building software that</text>
  <!-- Line 2 — slight colour shift for rhythm -->
  <text x="64" y="406"
        font-family="ui-sans-serif, system-ui, -apple-system, sans-serif"
        font-size="52" font-weight="700" letter-spacing="-0.025em"
        fill="${WHITE}">helps businesses grow.</text>

  <!-- ── Subtitle ────────────────────────────────────────────────────────── -->
  <text x="64" y="530"
        font-family="ui-monospace, 'Courier New', monospace"
        font-size="15" font-weight="500" letter-spacing="0.12em"
        fill="${MUTED}" text-transform="uppercase">
    Custom Software • SaaS • AI Solutions
  </text>

  <!-- ── Bottom vignette (depth) ─────────────────────────────────────────── -->
  <rect width="${W}" height="${H}" fill="url(#vignette)"/>

  <!-- ── Right-side decorative panel ────────────────────────────────────── -->
  <!-- Outer border card -->
  <rect x="780" y="130" width="356" height="370" rx="12"
        fill="none" stroke="${BORDER}" stroke-width="1" opacity="0.7"/>
  <!-- Inner card surface -->
  <rect x="796" y="146" width="324" height="338" rx="8"
        fill="${ACCENT}" opacity="0.5"/>

  <!-- Three mock code lines inside the card — purely decorative -->
  <!-- Line block 1 -->
  <rect x="824" y="186" width="60"  height="8" rx="4" fill="#4ADE80" opacity="0.7"/>
  <rect x="896" y="186" width="100" height="8" rx="4" fill="${BORDER}" opacity="0.9"/>
  <rect x="824" y="206" width="140" height="8" rx="4" fill="${BORDER}" opacity="0.9"/>
  <rect x="824" y="226" width="110" height="8" rx="4" fill="${BORDER}" opacity="0.9"/>

  <!-- Divider -->
  <line x1="824" y1="252" x2="1100" y2="252" stroke="${BORDER}" stroke-width="1"/>

  <!-- Line block 2 -->
  <rect x="824" y="272" width="50"  height="8" rx="4" fill="#60A5FA" opacity="0.7"/>
  <rect x="886" y="272" width="120" height="8" rx="4" fill="${BORDER}" opacity="0.9"/>
  <rect x="824" y="292" width="90"  height="8" rx="4" fill="${BORDER}" opacity="0.9"/>
  <rect x="824" y="312" width="160" height="8" rx="4" fill="${BORDER}" opacity="0.9"/>
  <rect x="824" y="332" width="80"  height="8" rx="4" fill="${BORDER}" opacity="0.9"/>

  <!-- Divider -->
  <line x1="824" y1="358" x2="1100" y2="358" stroke="${BORDER}" stroke-width="1"/>

  <!-- Line block 3 -->
  <rect x="824" y="378" width="70"  height="8" rx="4" fill="#F472B6" opacity="0.7"/>
  <rect x="906" y="378" width="90"  height="8" rx="4" fill="${BORDER}" opacity="0.9"/>
  <rect x="824" y="398" width="130" height="8" rx="4" fill="${BORDER}" opacity="0.9"/>
  <rect x="824" y="418" width="100" height="8" rx="4" fill="${BORDER}" opacity="0.9"/>

  <!-- Card top-bar (terminal chrome) -->
  <rect x="796" y="146" width="324" height="28" rx="8"
        fill="${BG}" opacity="0.6"/>
  <circle cx="818" cy="160" r="5" fill="#FF5F57" opacity="0.8"/>
  <circle cx="836" cy="160" r="5" fill="#FFBD2E" opacity="0.8"/>
  <circle cx="854" cy="160" r="5" fill="#28C840" opacity="0.8"/>
</svg>
`;

// ─── Render ───────────────────────────────────────────────────────────────────
await sharp(Buffer.from(svg))
  .png({ compressionLevel: 9, effort: 10 })
  .toFile(OUT);

console.log(`✓ OG image written → ${OUT}`);
