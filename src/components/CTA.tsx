import Link from "next/link";

export default function CTA() {
  return (
    <section style={{ padding: "120px 0", backgroundColor: "#FFFFFF" }}>
      <div
        className="max-w-[1280px] mx-auto text-center"
        style={{ paddingLeft: "clamp(20px, 6.25vw, 80px)", paddingRight: "clamp(20px, 6.25vw, 80px)" }}
      >
        <div
          className="group relative overflow-hidden"
          style={{
            border: "1px solid #E5E5E5",
            padding: "clamp(48px, 8vw, 128px)",
            backgroundColor: "#f9f9f9",
          }}
        >
          {/* Radial hover effect */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-1000 pointer-events-none"
            style={{
              background: "radial-gradient(circle at center, #000 0%, transparent 70%)",
            }}
          />

          <h2
            className="relative z-10 mb-8"
            style={{
              fontFamily: "var(--font-hanken), sans-serif",
              fontSize: "48px",
              lineHeight: "56px",
              letterSpacing: "-0.01em",
              fontWeight: 600,
              color: "#000",
            }}
          >
            Have an idea worth building?
          </h2>
          <p
            className="relative z-10 max-w-xl mx-auto mb-12 leading-relaxed"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "18px",
              lineHeight: "32px",
              color: "#737373",
            }}
          >
            From idea to execution, Elevora helps ambitious teams build products that scale.
          </p>
          <Link
            href="#"
            className="relative z-10 inline-block transition-all duration-300 hover:tracking-[0.2em] active:scale-95"
            style={{
              backgroundColor: "#000",
              color: "#fff",
              padding: "16px 48px",
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: "12px",
              letterSpacing: "0.1em",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            Schedule a Discovery Call
          </Link>
        </div>
      </div>
    </section>
  );
}
