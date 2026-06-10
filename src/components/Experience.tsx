"use client";

import Link from "next/link";

const cards = [
  {
    title: "Enterprise Platforms",
    desc: "High-fidelity digital systems built for complexity and scale.",
  },
  {
    title: "SaaS Products",
    desc: "Cloud-native architectures designed for rapid growth and security.",
  },
  {
    title: "Mobile Experiences",
    desc: "Native and cross-platform applications with a focus on performance.",
  },
  {
    title: "AI Implementations",
    desc: "Practical AI and machine learning solutions integrated into core workflows.",
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "120px 0", backgroundColor: "#FFFFFF" }}>
      <div
        className="max-w-[1280px] mx-auto"
        style={{ paddingLeft: "clamp(20px, 6.25vw, 80px)", paddingRight: "clamp(20px, 6.25vw, 80px)" }}
      >
        <div className="mb-12">
          <span
            className="block mb-4"
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: "12px",
              lineHeight: "16px",
              letterSpacing: "0.2em",
              fontWeight: 500,
              color: "#737373",
              textTransform: "uppercase",
            }}
          >
            Selected Experience
          </span>
          <h2
            style={{
              fontFamily: "var(--font-hanken), sans-serif",
              fontSize: "48px",
              lineHeight: "56px",
              letterSpacing: "-0.01em",
              fontWeight: 600,
              color: "#000",
            }}
          >
            Proven digital systems.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card) => (
            <ExperienceCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ title, desc }: { title: string; desc: string }) {
  return (
    <Link
      href="#"
      className="group relative block overflow-hidden transition-all duration-500"
      style={{
        padding: "40px",
        border: "1px solid #E5E5E5",
        backgroundColor: "#FFFFFF",
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#000")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#E5E5E5")}
    >
      {/* Slide-up bg */}
      <div
        className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
        style={{ backgroundColor: "#F5F5F5" }}
      />

      <div className="relative z-10 flex justify-between items-start mb-8">
        <h3
          style={{
            fontFamily: "var(--font-hanken), sans-serif",
            fontSize: "26px",
            lineHeight: "40px",
            letterSpacing: "0.02em",
            fontWeight: 500,
          }}
        >
          {title}
        </h3>
        <div
          className="w-10 h-10 flex items-center justify-center flex-shrink-0 transition-all duration-300"
          style={{ border: "1px solid #E5E5E5" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "#000";
            (e.currentTarget as HTMLElement).style.backgroundColor = "#000";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "#E5E5E5";
            (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
          }}
        >
          <span
            className="material-symbols-outlined group-hover:text-white transition-colors duration-300"
            style={{ fontSize: "20px", color: "#737373" }}
          >
            arrow_outward
          </span>
        </div>
      </div>

      <p
        className="relative z-10 max-w-xs transition-colors duration-300 group-hover:text-black"
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "18px",
          lineHeight: "32px",
          color: "#737373",
        }}
      >
        {desc}
      </p>
    </Link>
  );
}
