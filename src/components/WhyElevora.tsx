"use client";

const pillars = [
  {
    num: "01",
    title: "Business first",
    desc: "We prioritize commercial outcomes over technical vanity projects.",
  },
  {
    num: "02",
    title: "Senior-led",
    desc: "Direct access to architects and lead engineers, never junior delegates.",
  },
  {
    num: "03",
    title: "Build for scale",
    desc: "Infrastructure designed to handle tomorrow's traffic today.",
  },
  {
    num: "04",
    title: "Pragmatic",
    desc: "Cutting-edge tools applied only where they add real-world value.",
  },
  {
    num: "05",
    title: "Partnership",
    desc: "Long-term alignment with your vision and product lifecycle.",
    last: true,
  },
];

export default function WhyElevora() {
  return (
    <section
      style={{
        padding: "120px 0",
        backgroundColor: "#F5F5F5",
        borderTop: "1px solid #E5E5E5",
        borderBottom: "1px solid #E5E5E5",
        overflow: "hidden",
      }}
    >
      <div
        className="max-w-[1280px] mx-auto"
        style={{ paddingLeft: "clamp(20px, 6.25vw, 80px)", paddingRight: "clamp(20px, 6.25vw, 80px)" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0" style={{ borderTop: "1px solid #E5E5E5" }}>
          {pillars.map((p) => (
            <div
              key={p.num}
              className="group flex flex-col gap-4 transition-colors duration-300"
              style={{
                padding: "48px",
                borderLeft: "1px solid #E5E5E5",
                borderBottom: "1px solid #E5E5E5",
                ...(p.last ? { borderRight: "1px solid #E5E5E5" } : {}),
                cursor: "default",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.backgroundColor = "#fff")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.backgroundColor = "transparent")
              }
            >
              <span
                className="group-hover:opacity-100 transition-opacity"
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: "12px",
                  lineHeight: "16px",
                  letterSpacing: "0.1em",
                  fontWeight: 700,
                  color: "#000",
                  opacity: 0.4,
                }}
              >
                {p.num}
              </span>
              <div className="flex flex-col gap-2">
                <h4
                  style={{
                    fontFamily: "var(--font-hanken), sans-serif",
                    fontSize: "20px",
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.title}
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "14px",
                    lineHeight: "1.6",
                    color: "#737373",
                  }}
                >
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
