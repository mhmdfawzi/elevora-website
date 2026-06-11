import Image from "next/image";
import Link from "next/link";

const monoSm: React.CSSProperties = {
  fontFamily: "var(--font-jetbrains), monospace",
  fontSize: "10px",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#000",
};

const bodyLink: React.CSSProperties = {
  fontFamily: "var(--font-inter), sans-serif",
  fontSize: "16px",
  color: "#737373",
  textDecoration: "underline",
  textDecorationColor: "#E5E5E5",
  textUnderlineOffset: "4px",
};

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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo-hq.png"
                alt="Elevora"
                width={140}
                height={26}
                quality={100}
                style={{ objectFit: "contain" }}
              />
            </Link>
            <p
              className="max-w-sm leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "16px", lineHeight: "28px", color: "#737373" }}
            >
              Building software that helps businesses grow through technical excellence and strategic
              alignment.
            </p>
            <Link
              href="mailto:hello@elevora.dev"
              className="transition-colors hover:text-black"
              style={bodyLink}
            >
              hello@elevora.dev
            </Link>
          </div>

          {/* Company links */}
          <div className="md:col-span-3 md:col-start-7 flex flex-col gap-4">
            <span style={monoSm}>Company</span>
            <div className="flex flex-col gap-3">
              {[
                { label: "Services",    href: "/#capabilities" },
                { label: "Why Elevora", href: "/#why-elevora" },
                { label: "Experience",  href: "/#experience"  },
                { label: "Process",     href: "/#process"     },
                { label: "Contact",    href: "/contact"       },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="transition-colors hover:text-black"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "15px",
                    color: "#737373",
                  }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect + Location */}
          <div className="md:col-span-3 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span style={monoSm}>Connect</span>
              <div className="flex flex-col gap-2">
                <Link
                  href="https://www.linkedin.com/company/elevora-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-black"
                  style={bodyLink}
                >
                  LinkedIn
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <span style={monoSm}>Location</span>
              <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "15px", color: "#737373", lineHeight: "1.6" }}>
                Serving clients across Egypt and Saudi Arabia.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8"
          style={{ borderTop: "1px solid #E5E5E5" }}
        >
          <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: "11px", color: "#737373", opacity: 0.7 }}>
            © {new Date().getFullYear()} Elevora. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="transition-colors hover:text-black"
                style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: "10px", letterSpacing: "0.08em", color: "#737373", textTransform: "uppercase" }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
