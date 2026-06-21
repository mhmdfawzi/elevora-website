// Server Component — all hover effects handled by .experience-card CSS class

const projects = [
  {
    title: "Cykaly",
    category: "Mobile Platform • Community Product",
    desc: "A social and community platform for cyclists in the UAE, enabling riders to connect through groups, events, posts, and shared cycling experiences.",
    services: ["Mobile Development", "Backend APIs", "Performance Optimization", "Product Enhancement"],
    status: "Live Product",
    statusType: "live",
    links: [
      { label: "App Store", href: "https://apps.apple.com/us/app/cykaly/id6446518801" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.cykly.android" },
    ],
  },
  {
    title: "Musk Group",
    category: "Corporate Website • CMS",
    desc: "A modern corporate website and content management experience for a construction group, focused on credibility, responsive design, and easier content operations.",
    services: ["Website Development", "CMS Implementation", "Responsive UI", "SEO Foundations"],
    status: "Live Website",
    statusType: "live",
    links: [
      { label: "Visit Website", href: "https://www.musk-group.com" },
    ],
  },
  {
    title: "Woodo",
    category: "Marketplace Platform • Carpentry Network",
    desc: "A marketplace platform connecting carpenters with customers who have carpentry requests. Carpenters can showcase their work, discover relevant job requests, apply to opportunities, and manage the request cycle digitally.",
    services: ["Marketplace Design", "Web Application Development", "Workflow Design", "Product Strategy"],
    status: "In Development",
    statusType: "dev",
    links: [],
  },
  {
    title: "Mawaedak",
    category: "SaaS Product • Booking Platform",
    desc: "A multi-tenant appointment management SaaS designed for service-based businesses to manage bookings, services, availability, and customer interactions.",
    services: ["SaaS Architecture", "Booking Engine", "Dashboard Development", "Product Strategy"],
    status: "In Development",
    statusType: "dev",
    links: [],
  },
  {
    title: "Property Management",
    category: "Landlord Management • Property Operations",
    desc: "A custom landlord management web application designed to help property owners manage tenants, units, payments, contracts, and operational workflows in one organized platform.",
    services: ["Product Discovery", "Custom Web Development", "Workflow Automation", "System Design"],
    status: "Under Delivery",
    statusType: "delivery",
    links: [],
  },
  {
    title: "Engineering Collaboration Platform",
    category: "SaaS Product • Project Management",
    desc: "An upcoming SaaS platform helping engineering partnerships manage projects, stakeholders, execution workflows, and delivery progress in one organized workspace.",
    services: ["Product Strategy", "SaaS Development", "Workflow Design", "Project Management Tools"],
    status: "Coming Soon",
    statusType: "soon",
    links: [],
  },
] as const;

// Status badge colours — all within the black/white palette
const statusStyles: Record<string, React.CSSProperties> = {
  live: {
    backgroundColor: "#000",
    color: "#fff",
  },
  dev: {
    backgroundColor: "#F5F5F5",
    color: "#000",
    border: "1px solid #E5E5E5",
  },
  delivery: {
    backgroundColor: "#F5F5F5",
    color: "#000",
    border: "1px solid #E5E5E5",
  },
  soon: {
    backgroundColor: "#fff",
    color: "#737373",
    border: "1px solid #E5E5E5",
  },
};

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "120px 0", backgroundColor: "#FFFFFF" }}>
      <div
        className="max-w-[1280px] mx-auto"
        style={{ paddingLeft: "clamp(20px, 6.25vw, 80px)", paddingRight: "clamp(20px, 6.25vw, 80px)" }}
      >
        {/* Header */}
        <div className="mb-16">
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
            Selected Work
          </span>
          <h2
            className="mb-4"
            style={{
              fontFamily: "var(--font-hanken), sans-serif",
              fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: "1.15",
              letterSpacing: "-0.01em",
              fontWeight: 600,
              color: "#000",
              maxWidth: "640px",
            }}
          >
            Products and platforms delivered.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "16px",
              lineHeight: "28px",
              color: "#737373",
              maxWidth: "640px",
            }}
          >
            A focused selection of products, platforms, and digital systems delivered across
            web, mobile, SaaS, and business operations.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E5E5]">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        {/* CTA strip */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          style={{
            marginTop: "72px",
            borderTop: "1px solid #E5E5E5",
            borderLeft: "1px solid #E5E5E5",
            borderRight: "1px solid #E5E5E5",
            borderBottom: "1px solid #E5E5E5",
            padding: "28px 32px",
            backgroundColor: "#FFFFFF",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-hanken), sans-serif",
              fontSize: "18px",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              color: "#000",
            }}
          >
            Interested in building something similar?
          </p>
          <a
            href="/contact"
            className="flex-shrink-0 transition-opacity duration-200 hover:opacity-80"
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: "11px",
              letterSpacing: "0.1em",
              fontWeight: 700,
              textTransform: "uppercase",
              backgroundColor: "#000",
              color: "#fff",
              padding: "12px 24px",
              whiteSpace: "nowrap",
            }}
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

type Project = (typeof projects)[number];

function ProjectCard({ title, category, desc, services, status, statusType, links }: Project) {
  return (
    <div
      className="experience-card group relative flex flex-col overflow-hidden"
      style={{ padding: "36px 32px", backgroundColor: "#FFFFFF", border: "none" }}
    >
      {/* Slide-up background — pure CSS via Tailwind group-hover */}
      <div
        className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
        style={{ backgroundColor: "#F5F5F5" }}
        aria-hidden="true"
      />

      {/* Top row: category + status */}
      <div className="relative z-10 flex items-start justify-between gap-3 mb-5">
        <span
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: "10px",
            letterSpacing: "0.12em",
            fontWeight: 500,
            color: "#737373",
            textTransform: "uppercase",
            lineHeight: "1.5",
          }}
        >
          {category}
        </span>
        <span
          className="flex-shrink-0"
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: "9px",
            letterSpacing: "0.1em",
            fontWeight: 700,
            textTransform: "uppercase",
            padding: "3px 8px",
            whiteSpace: "nowrap",
            ...statusStyles[statusType],
          }}
        >
          {status}
        </span>
      </div>

      {/* Title */}
      <h3
        className="relative z-10 mb-4"
        style={{
          fontFamily: "var(--font-hanken), sans-serif",
          fontSize: "22px",
          lineHeight: "1.25",
          letterSpacing: "-0.01em",
          fontWeight: 600,
          color: "#000",
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="relative z-10 mb-6 flex-1"
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "15px",
          lineHeight: "26px",
          color: "#737373",
        }}
      >
        {desc}
      </p>

      {/* Service tags */}
      <div className="relative z-10 flex flex-wrap gap-2 mb-5">
        {services.map((s) => (
          <span
            key={s}
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: "9px",
              letterSpacing: "0.08em",
              fontWeight: 500,
              textTransform: "uppercase",
              color: "#737373",
              border: "1px solid #E5E5E5",
              padding: "3px 8px",
              backgroundColor: "#fff",
            }}
          >
            {s}
          </span>
        ))}
      </div>

      {/* External links — only shown when present */}
      {links.length > 0 && (
        <div className="relative z-10 flex flex-wrap gap-2 mt-auto pt-4" style={{ borderTop: "1px solid #E5E5E5" }}>
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 transition-colors duration-200 hover:text-black"
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: "9px",
                letterSpacing: "0.1em",
                fontWeight: 700,
                textTransform: "uppercase",
                color: "#000",
                border: "1px solid #000",
                padding: "4px 10px",
                backgroundColor: "transparent",
              }}
            >
              {label}
              <span className="material-symbols-outlined" style={{ fontSize: "11px" }} aria-hidden="true">
                arrow_outward
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
