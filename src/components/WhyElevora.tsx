// Server Component — hover handled by .pillar-card CSS class

const pillars = [
  {
    num: "01",
    title: "Business first",
    desc: "We prioritize commercial outcomes over technical vanity. Every decision is measured against real business impact.",
  },
  {
    num: "02",
    title: "Senior-led",
    desc: "Architects and lead engineers on every engagement — never junior delegates hidden behind account managers.",
  },
  {
    num: "03",
    title: "Built for scale",
    desc: "Systems designed to handle tomorrow's load today. Architecture decisions made with growth as a first-class constraint.",
  },
  {
    num: "04",
    title: "Pragmatic",
    desc: "We reach for proven tools before trendy ones. Cutting-edge technology applied only where it adds measurable value.",
  },
  {
    num: "05",
    title: "Long-term partnership",
    desc: "We stay aligned with your vision beyond delivery. Elevora operates as a technology partner, not a ticket queue.",
  },
];

export default function WhyElevora() {
  return (
    <section
      id="why-elevora"
      style={{
        padding: "80px 0",
        backgroundColor: "#F5F5F5",
        borderTop: "1px solid #E5E5E5",
        borderBottom: "1px solid #E5E5E5",
      }}
    >
      <div
        className="max-w-[1280px] mx-auto"
        style={{ paddingLeft: "clamp(20px, 6.25vw, 80px)", paddingRight: "clamp(20px, 6.25vw, 80px)" }}
      >
        {/* ── Two-column layout: intro left, cards right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* Left — sticky narrative intro */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <span
              className="block mb-5"
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: "11px",
                letterSpacing: "0.2em",
                fontWeight: 500,
                color: "#737373",
                textTransform: "uppercase",
              }}
            >
              Why Elevora
            </span>
            <h2
              className="mb-6"
              style={{
                fontFamily: "var(--font-hanken), sans-serif",
                fontSize: "clamp(32px, 3.5vw, 44px)",
                lineHeight: "1.1",
                letterSpacing: "-0.02em",
                fontWeight: 700,
                color: "#000",
              }}
            >
              We work<br />differently.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "16px",
                lineHeight: "1.75",
                color: "#737373",
                maxWidth: "340px",
              }}
            >
              A pragmatic technology partner focused on business outcomes,
              senior execution, and long-term value.
            </p>

            {/* Decorative rule */}
            <div
              className="mt-10 hidden lg:block"
              style={{ width: "40px", height: "1px", backgroundColor: "#000" }}
              aria-hidden="true"
            />
          </div>

          {/* Right — principle cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#E5E5E5]">
              {pillars.map((p, i) => (
                <PillarCard key={p.num} {...p} wide={pillars.length % 2 !== 0 && i === pillars.length - 1} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function PillarCard({
  num,
  title,
  desc,
  wide,
}: {
  num: string;
  title: string;
  desc: string;
  wide?: boolean;
}) {
  return (
    <div
      className={`pillar-card group flex flex-col gap-4 bg-[#F5F5F5]${wide ? " sm:col-span-2" : ""}`}
      style={{ padding: "28px 28px" }}
    >
      {/* Number */}
      <span
        className="pillar-num"
        style={{
          fontFamily: "var(--font-jetbrains), monospace",
          fontSize: "11px",
          letterSpacing: "0.15em",
          fontWeight: 700,
          color: "#000",
          opacity: 0.25,
          transition: "opacity 0.3s",
        }}
      >
        {num}
      </span>

      {/* Title */}
      <h3
        style={{
          fontFamily: "var(--font-hanken), sans-serif",
          fontSize: "20px",
          lineHeight: "1.2",
          letterSpacing: "-0.01em",
          fontWeight: 700,
          color: "#000",
        }}
      >
        {title}
      </h3>

      {/* Divider — slides in on hover via CSS */}
      <div
        className="pillar-divider"
        style={{ width: "24px", height: "1px", backgroundColor: "#000" }}
        aria-hidden="true"
      />

      {/* Description */}
      <p
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "14px",
          lineHeight: "1.75",
          color: "#737373",
        }}
      >
        {desc}
      </p>
    </div>
  );
}
