const steps = [
  { n: 1, label: "Discover", desc: "Deep-dive into goals, constraints, and user needs.", active: true },
  { n: 2, label: "Design", desc: "High-fidelity wireframes and architectural blueprints.", active: false },
  { n: 3, label: "Build", desc: "Iterative development with rigorous testing cycles.", active: false },
  { n: 4, label: "Launch", desc: "Seamless deployment and system stabilization.", active: false },
  { n: 5, label: "Scale", desc: "Continuous optimization and feature evolution.", active: false },
];

export default function Process() {
  return (
    <section
      id="process"
      style={{ padding: "120px 0", backgroundColor: "#0A0A0A", color: "#fff" }}
    >
      <div
        className="max-w-[1280px] mx-auto"
        style={{ paddingLeft: "clamp(20px, 6.25vw, 80px)", paddingRight: "clamp(20px, 6.25vw, 80px)" }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="block mb-4"
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: "12px",
              lineHeight: "16px",
              letterSpacing: "0.2em",
              fontWeight: 500,
              color: "rgba(255,255,255,0.6)",
              textTransform: "uppercase",
            }}
          >
            How we work
          </span>
          <h2
            style={{
              fontFamily: "var(--font-hanken), sans-serif",
              fontSize: "48px",
              lineHeight: "56px",
              letterSpacing: "-0.01em",
              fontWeight: 600,
              color: "#fff",
            }}
          >
            A systematic approach to excellence.
          </h2>
        </div>

        {/* Steps */}
        <div className="relative py-12">
          {/* Connector line */}
          <div
            className="absolute left-0 w-full process-line opacity-10 hidden md:block"
            style={{ top: "44px", height: "1px" }}
          />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step) => (
              <div
                key={step.n}
                className="group flex flex-col items-center text-center"
                style={{ cursor: "default" }}
              >
                <div
                  className="w-14 h-14 flex items-center justify-center font-bold mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    borderRadius: "50%",
                    backgroundColor: step.active ? "#fff" : "#0A0A0A",
                    color: step.active ? "#000" : "#fff",
                    border: step.active ? "none" : "1px solid rgba(255,255,255,0.2)",
                    boxShadow: step.active ? "0 0 25px rgba(255,255,255,0.15)" : "none",
                    fontFamily: "var(--font-hanken), sans-serif",
                    fontSize: "16px",
                    fontWeight: 700,
                  }}
                >
                  {step.n}
                </div>
                <h4
                  className="mb-2"
                  style={{
                    fontFamily: "var(--font-hanken), sans-serif",
                    fontSize: "22px",
                    lineHeight: "40px",
                    letterSpacing: "-0.01em",
                    fontWeight: 500,
                    color: "#fff",
                  }}
                >
                  {step.label}
                </h4>
                <p
                  className="max-w-[180px]"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "14px",
                    lineHeight: "1.6",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
