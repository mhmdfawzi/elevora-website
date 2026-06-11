// Server Component — no JS shipped for hover effects (CSS-only via .capability-card)

const capabilities = [
  {
    icon: "cloud_queue",
    title: "SaaS Development",
    description:
      "Cloud-native architectures designed for multi-tenancy, security, and exponential user growth.",
  },
  {
    icon: "code",
    title: "Custom Software",
    description:
      "Bespoke technical solutions tailored to solve specific operational bottlenecks and unique business needs.",
  },
  {
    icon: "query_stats",
    title: "Tech Consulting",
    description:
      "Strategic guidance on technology stacks, digital transformation, and technical debt management.",
  },
  {
    icon: "psychology",
    title: "AI Solutions",
    description:
      "Integrating LLMs and machine learning into existing workflows to automate complex decision-making.",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" style={{ padding: "120px 0", backgroundColor: "#FFFFFF" }}>
      <div
        className="max-w-[1280px] mx-auto"
        style={{ paddingLeft: "clamp(20px, 6.25vw, 80px)", paddingRight: "clamp(20px, 6.25vw, 80px)" }}
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <div className="max-w-xl">
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
              Our Expertise
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
              Comprehensive engineering for the modern enterprise.
            </h2>
          </div>
          <div
            className="hidden md:block flex-grow mx-12 mb-4"
            style={{ height: "1px", backgroundColor: "#E5E5E5" }}
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="capability-card flex flex-col items-start"
              style={{ padding: "48px" }}
            >
              <span
                className="material-symbols-outlined mb-4"
                style={{ fontSize: "32px", color: "#000" }}
                aria-hidden="true"
              >
                {cap.icon}
              </span>
              <h3
                className="mb-2"
                style={{
                  fontFamily: "var(--font-hanken), sans-serif",
                  fontSize: "24px",
                  lineHeight: "40px",
                  letterSpacing: "0.02em",
                  fontWeight: 500,
                }}
              >
                {cap.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#737373",
                }}
              >
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
