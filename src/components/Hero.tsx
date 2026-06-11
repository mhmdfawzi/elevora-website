import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      {/* LCP: local WebP, priority-fetched, full-bleed */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/hero-bg.webp"
          alt=""
          fill
          className="object-cover opacity-80"
          priority
          quality={85}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADQAQCdASoIAAUAAUAmJZQCdAEO/gHOAAD++Sf/5m/9bqY2g+E8p+ZP7QAAA=="
        />
        <div className="absolute inset-0 hero-gradient-overlay" />
      </div>

      {/* Content */}
      <div
        className="relative z-10 max-w-[1280px] mx-auto text-center"
        style={{ paddingLeft: "clamp(20px, 6.25vw, 80px)", paddingRight: "clamp(20px, 6.25vw, 80px)" }}
      >
        <div
          className="inline-block mb-8"
          style={{
            border: "1px solid rgba(255,255,255,0.2)",
            padding: "4px 8px",
            backdropFilter: "blur(12px)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: "12px",
              lineHeight: "16px",
              letterSpacing: "0.2em",
              fontWeight: 500,
              color: "#fff",
              textTransform: "uppercase",
            }}
          >
            Strategy · Code · Growth
          </span>
        </div>

        <h1
          className="mb-8 leading-[1.1] tracking-tight"
          style={{
            fontFamily: "var(--font-hanken), sans-serif",
            fontSize: "clamp(40px, 7vw, 72px)",
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
            fontWeight: 700,
            color: "#fff",
          }}
        >
          Building software that
          <br className="hidden md:block" /> helps businesses grow.
        </h1>

        <p
          className="max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "18px",
            lineHeight: "32px",
            color: "rgba(255,255,255,0.8)",
          }}
        >
          Elevora partners with startups and enterprises to design, build, and scale digital products
          through software engineering, AI, and strategic technology leadership.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full md:w-auto transition-transform active:scale-95"
            style={{
              backgroundColor: "#fff",
              color: "#000",
              padding: "16px 32px",
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: "12px",
              letterSpacing: "0.1em",
              fontWeight: 700,
              textTransform: "uppercase",
              display: "inline-block",
              textAlign: "center",
            }}
          >
            Book a Consultation
          </Link>
          <Link
            href="#experience"
            className="w-full md:w-auto group transition-all duration-300 hover:bg-white"
            style={{
              border: "1px solid #fff",
              color: "#fff",
              padding: "16px 32px",
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: "12px",
              letterSpacing: "0.1em",
              fontWeight: 700,
              textTransform: "uppercase",
              display: "inline-block",
              textAlign: "center",
            }}
          >
            <span className="transition-colors duration-300 group-hover:text-black">
              View Our Work
            </span>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator — hidden on small screens to avoid overlap with buttons */}
      <div
        className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
        style={{ color: "rgba(255,255,255,0.4)" }}
        aria-hidden="true"
      >
        <span
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: "10px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <div
          className="relative overflow-hidden"
          style={{ width: "1px", height: "48px", backgroundColor: "rgba(255,255,255,0.2)" }}
        >
          <div
            className="absolute top-0 left-0 w-full animate-bounce"
            style={{ height: "50%", backgroundColor: "#fff" }}
          />
        </div>
      </div>
    </section>
  );
}
