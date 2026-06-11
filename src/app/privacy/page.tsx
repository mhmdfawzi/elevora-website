import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Elevora collects, uses, and protects information submitted through our website.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: false },
};

const h2Style: React.CSSProperties = {
  fontFamily: "var(--font-hanken), sans-serif",
  fontSize: "22px",
  fontWeight: 600,
  letterSpacing: "-0.01em",
  color: "#000",
  marginBottom: "12px",
  marginTop: "48px",
};

const pStyle: React.CSSProperties = {
  fontFamily: "var(--font-inter), sans-serif",
  fontSize: "16px",
  lineHeight: "1.8",
  color: "#4a4a4a",
  marginBottom: "12px",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: "80px" }}>
        {/* Header */}
        <section style={{ padding: "72px 0 56px", borderBottom: "1px solid #E5E5E5" }}>
          <div
            className="max-w-[1280px] mx-auto"
            style={{ paddingLeft: "clamp(20px, 6.25vw, 80px)", paddingRight: "clamp(20px, 6.25vw, 80px)" }}
          >
            <span
              className="block mb-4"
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: "11px",
                letterSpacing: "0.2em",
                color: "#737373",
                textTransform: "uppercase",
              }}
            >
              Legal
            </span>
            <h1
              style={{
                fontFamily: "var(--font-hanken), sans-serif",
                fontSize: "clamp(32px, 4vw, 52px)",
                lineHeight: "1.1",
                letterSpacing: "-0.02em",
                fontWeight: 700,
                color: "#000",
              }}
            >
              Privacy Policy
            </h1>
            <p style={{ ...pStyle, marginTop: "16px", marginBottom: 0 }}>
              Last updated: June 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section style={{ padding: "64px 0 120px" }}>
          <div
            className="max-w-[1280px] mx-auto"
            style={{ paddingLeft: "clamp(20px, 6.25vw, 80px)", paddingRight: "clamp(20px, 6.25vw, 80px)" }}
          >
            <div style={{ maxWidth: "720px" }}>
              <p style={pStyle}>
                Elevora (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to
                protecting your privacy. This policy explains what information we collect when you
                visit our website or contact us, and how we use it.
              </p>

              <h2 style={h2Style}>1. Information We Collect</h2>
              <p style={pStyle}>
                We collect information you voluntarily submit through our contact form, including
                your name, email address, company name, and project details. We do not collect any
                information automatically beyond standard server logs and anonymised analytics data.
              </p>

              <h2 style={h2Style}>2. How We Use Your Information</h2>
              <p style={pStyle}>
                Information submitted through the contact form is used solely to respond to your
                enquiry and, if you proceed to engage Elevora, to fulfil the services you have
                requested. We will never sell, rent, or share your personal information with third
                parties for marketing purposes.
              </p>

              <h2 style={h2Style}>3. Analytics</h2>
              <p style={pStyle}>
                We may use Google Analytics to collect anonymised, aggregated data about how
                visitors use our website (e.g. pages viewed, time on site). This data cannot
                identify you personally. You can opt out of Google Analytics tracking at any time
                using the{" "}
                <Link
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#000", textDecoration: "underline" }}
                >
                  Google Analytics Opt-out Browser Add-on
                </Link>
                .
              </p>

              <h2 style={h2Style}>4. Communication Preferences</h2>
              <p style={pStyle}>
                By submitting the contact form you consent to us sending you one or more responses
                related to your enquiry. We do not add you to any mailing list without your explicit
                consent. You may ask us to stop communicating with you at any time by emailing{" "}
                <Link href="mailto:hello@elevora.dev" style={{ color: "#000", textDecoration: "underline" }}>
                  hello@elevora.dev
                </Link>
                .
              </p>

              <h2 style={h2Style}>5. Data Retention</h2>
              <p style={pStyle}>
                We retain contact-form submissions only for as long as necessary to respond to your
                enquiry and maintain a reasonable record of correspondence. You may request deletion
                of your data at any time.
              </p>

              <h2 style={h2Style}>6. Security</h2>
              <p style={pStyle}>
                We take reasonable technical and organisational measures to protect the information
                you share with us. However, no transmission over the internet is completely secure,
                and we cannot guarantee absolute security.
              </p>

              <h2 style={h2Style}>7. Contact</h2>
              <p style={pStyle}>
                If you have any questions about this Privacy Policy or wish to exercise your data
                rights, please contact us at{" "}
                <Link href="mailto:hello@elevora.dev" style={{ color: "#000", textDecoration: "underline" }}>
                  hello@elevora.dev
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
