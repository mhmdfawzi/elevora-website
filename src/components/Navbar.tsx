"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Services",    href: "/#capabilities" },
  { label: "Experience",  href: "/#experience"   },
  { label: "Process",     href: "/#process"      },
  { label: "Contact",     href: "/contact"       },
];

const monoStyle: React.CSSProperties = {
  fontFamily: "var(--font-jetbrains), monospace",
  fontSize: "12px",
  lineHeight: "16px",
  letterSpacing: "0.1em",
  fontWeight: 500,
  textTransform: "uppercase",
};

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const pathname                    = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ease-linear ${
        scrolled ? "shadow-sm py-2" : "py-4"
      }`}
      style={{
        backgroundColor: "rgba(255,255,255,0.9)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderColor: "#E5E5E5",
      }}
    >
      <div
        className="flex justify-between items-center max-w-[1280px] mx-auto"
        style={{ paddingLeft: "clamp(20px, 6.25vw, 80px)", paddingRight: "clamp(20px, 6.25vw, 80px)" }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-[28px] font-bold tracking-tighter leading-none"
          style={{ fontFamily: "var(--font-hanken), sans-serif", color: "#000" }}
          aria-label="Elevora — home"
        >
          Elevora
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="transition-colors duration-200 hover:text-black"
              style={{ ...monoStyle, color: "#737373" }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="transition-all duration-300 hover:opacity-90"
            style={{
              ...monoStyle,
              backgroundColor: "#000",
              color: "#fff",
              padding: "8px 16px",
            }}
          >
            Book a Consultation
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-black p-1"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="material-symbols-outlined" aria-hidden="true">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{ backgroundColor: "#fff", borderColor: "#E5E5E5" }}
        >
          <div
            className="flex flex-col max-w-[1280px] mx-auto"
            style={{ paddingLeft: "clamp(20px, 6.25vw, 80px)", paddingRight: "clamp(20px, 6.25vw, 80px)" }}
          >
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="py-4 border-b hover:text-black transition-colors"
                style={{ ...monoStyle, color: "#737373", borderColor: "#E5E5E5" }}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="my-4 text-center transition-all duration-300 hover:opacity-90"
              style={{
                ...monoStyle,
                backgroundColor: "#000",
                color: "#fff",
                padding: "12px 16px",
              }}
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
