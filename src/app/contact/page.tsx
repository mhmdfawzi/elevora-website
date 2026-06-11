import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Elevora. Tell us about your project and we'll respond within one business day.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Elevora",
    description: "Get in touch with Elevora. Tell us about your project.",
    url: "/contact",
  },
};

const monoLabel: React.CSSProperties = {
  fontFamily: "var(--font-jetbrains), monospace",
  fontSize: "10px",
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "#000",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: "80px" }}>
        {/* Header */}
        <section
          style={{
            padding: "80px 0 72px",
            borderBottom: "1px solid #E5E5E5",
            backgroundColor: "#FFFFFF",
          }}
        >
          <div
            className="max-w-[1280px] mx-auto"
            style={{ paddingLeft: "clamp(20px, 6.25vw, 80px)", paddingRight: "clamp(20px, 6.25vw, 80px)" }}
          >
            <span
              className="block mb-5"
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: "11px",
                letterSpacing: "0.2em",
                color: "#737373",
                textTransform: "uppercase",
              }}
            >
              Contact
            </span>
            <h1
              style={{
                fontFamily: "var(--font-hanken), sans-serif",
                fontSize: "clamp(36px, 5vw, 64px)",
                lineHeight: "1.1",
                letterSpacing: "-0.02em",
                fontWeight: 700,
                color: "#000",
                maxWidth: "700px",
              }}
            >
              Let&apos;s build something meaningful together.
            </h1>
          </div>
        </section>

        {/* Body */}
        <section style={{ padding: "80px 0 120px", backgroundColor: "#FFFFFF" }}>
          <div
            className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16"
            style={{ paddingLeft: "clamp(20px, 6.25vw, 80px)", paddingRight: "clamp(20px, 6.25vw, 80px)" }}
          >
            {/* Form — 7 cols */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Info — 4 cols offset */}
            <aside className="lg:col-span-4 lg:col-start-9 flex flex-col gap-10 pt-1">
              {/* Email */}
              <div className="flex flex-col gap-3">
                <span style={monoLabel}>Email</span>
                <Link
                  href="mailto:hello@elevora.dev"
                  className="hover:opacity-70 transition-opacity"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "16px",
                    color: "#000",
                    textDecoration: "underline",
                    textUnderlineOffset: "4px",
                    textDecorationColor: "#E5E5E5",
                  }}
                >
                  hello@elevora.dev
                </Link>
              </div>

              {/* LinkedIn */}
              <div className="flex flex-col gap-3">
                <span style={monoLabel}>LinkedIn</span>
                <Link
                  href="https://www.linkedin.com/company/elevora-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "16px",
                    color: "#000",
                    textDecoration: "underline",
                    textUnderlineOffset: "4px",
                    textDecorationColor: "#E5E5E5",
                  }}
                >
                  linkedin.com/company/elevora-dev
                </Link>
              </div>

              {/* Location */}
              <div className="flex flex-col gap-3">
                <span style={monoLabel}>Location</span>
                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "15px",
                    color: "#737373",
                    lineHeight: "1.7",
                  }}
                >
                  Serving clients across Egypt and Saudi Arabia.
                </p>
              </div>

              {/* Divider note */}
              <div style={{ borderTop: "1px solid #E5E5E5", paddingTop: "24px" }}>
                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "14px",
                    color: "#737373",
                    lineHeight: "1.7",
                  }}
                >
                  We typically respond within one business day. For urgent enquiries, reach us
                  directly at{" "}
                  <Link
                    href="mailto:hello@elevora.dev"
                    className="hover:text-black transition-colors"
                    style={{ color: "#000", textDecoration: "underline", textUnderlineOffset: "3px", textDecorationColor: "#ccc" }}
                  >
                    hello@elevora.dev
                  </Link>
                  .
                </p>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
