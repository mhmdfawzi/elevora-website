"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ease-linear ${
        scrolled ? "shadow-sm py-2" : "py-4"
      }`}
      style={{
        backgroundColor: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderColor: "#E5E5E5",
      }}
    >
      <div
        className="flex justify-between items-center max-w-[1280px] mx-auto"
        style={{ paddingLeft: "clamp(20px, 6.25vw, 80px)", paddingRight: "clamp(20px, 6.25vw, 80px)" }}
      >
        <Link
          href="#"
          className="text-[32px] font-bold tracking-tighter leading-10"
          style={{ fontFamily: "var(--font-hanken), sans-serif", color: "#000" }}
        >
          Elevora
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {["capabilities", "process", "experience"].map((id, i) => (
            <Link
              key={id}
              href={`#${id}`}
              className="transition-colors duration-200 hover:text-black"
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "0.1em",
                fontWeight: 500,
                color: "#737373",
                textTransform: "uppercase",
              }}
            >
              {["Capabilities", "Process", "Work"][i]}
            </Link>
          ))}
          <Link
            href="#"
            className="transition-all duration-300 hover:opacity-90"
            style={{
              backgroundColor: "#000",
              color: "#fff",
              padding: "8px 16px",
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: "12px",
              letterSpacing: "0.1em",
              fontWeight: 500,
            }}
          >
            Book a Consultation
          </Link>
        </div>

        <button className="md:hidden text-black">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
}
