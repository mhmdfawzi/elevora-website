import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#f9f9f9", borderTop: "1px solid #E5E5E5" }}>
      <div
        className="max-w-[1280px] mx-auto"
        style={{
          paddingLeft: "clamp(20px, 6.25vw, 80px)",
          paddingRight: "clamp(20px, 6.25vw, 80px)",
          paddingTop: "clamp(64px, 8vw, 128px)",
          paddingBottom: "clamp(64px, 8vw, 128px)",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* Brand */}
          <div className="md:col-span-6">
            <span
              className="block mb-6 tracking-tighter"
              style={{
                fontFamily: "var(--font-hanken), sans-serif",
                fontSize: "28px",
                fontWeight: 700,
                color: "#000",
              }}
            >
              Elevora
            </span>
            <p
              className="max-w-sm leading-relaxed"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "18px",
                lineHeight: "32px",
                color: "#737373",
              }}
            >
              Building software that helps businesses grow through technical excellence and strategic
              alignment.
            </p>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <span
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#000",
              }}
            >
              Contact
            </span>
            <div className="flex flex-col gap-2">
              <Link
                href="mailto:hello@elevora.dev"
                className="transition-colors hover:text-black"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "16px",
                  color: "#737373",
                  textDecoration: "underline",
                  textDecorationColor: "#E5E5E5",
                  textUnderlineOffset: "4px",
                }}
              >
                hello@elevora.dev
              </Link>
              <Link
                href="#"
                className="transition-colors hover:text-black"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "16px",
                  color: "#737373",
                  textDecoration: "underline",
                  textDecorationColor: "#E5E5E5",
                  textUnderlineOffset: "4px",
                }}
              >
                LinkedIn
              </Link>
            </div>
          </div>

          {/* Location */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <span
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#000",
              }}
            >
              Location
            </span>
            <p
              className="leading-relaxed"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "16px",
                color: "#737373",
              }}
            >
              Global delivery with core teams serving Egypt and Saudi Arabia.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8"
          style={{ borderTop: "1px solid #E5E5E5" }}
        >
          <p
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: "12px",
              lineHeight: "16px",
              color: "#737373",
              opacity: 0.6,
            }}
          >
            © 2026 Elevora. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div
              className="w-1 h-1 rounded-full"
              style={{ backgroundColor: "#000" }}
            />
            <p
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: "10px",
                letterSpacing: "0.1em",
                color: "#737373",
                textTransform: "uppercase",
              }}
            >
              Senior-Led Boutique Consultancy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
