import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of the Elevora website.",
  alternates: { canonical: "/terms" },
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

export default function TermsPage() {
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
              Terms of Service
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
                Please read these Terms of Service carefully before using the Elevora website
                located at{" "}
                <Link href="/" style={{ color: "#000", textDecoration: "underline" }}>
                  elevora.dev
                </Link>
                . By accessing or using this website you agree to be bound by these terms.
              </p>

              <h2 style={h2Style}>1. Informational Purposes</h2>
              <p style={pStyle}>
                The content on this website is provided for general informational purposes only. It
                does not constitute professional, legal, financial, or technical advice. While we
                strive to keep information accurate and up to date, we make no representations or
                warranties of any kind about the completeness, accuracy, or suitability of the
                content for any purpose.
              </p>

              <h2 style={h2Style}>2. No Contractual Obligation</h2>
              <p style={pStyle}>
                Use of this website, including submitting an enquiry through the contact form, does
                not create any contractual relationship between you and Elevora. Any engagement for
                services will be governed solely by a separate written agreement signed by both
                parties.
              </p>

              <h2 style={h2Style}>3. Intellectual Property</h2>
              <p style={pStyle}>
                All content on this website — including text, graphics, logos, and code — is the
                exclusive property of Elevora and is protected by applicable intellectual property
                laws. You may not reproduce, distribute, or create derivative works without our
                prior written consent.
              </p>

              <h2 style={h2Style}>4. Third-Party Links</h2>
              <p style={pStyle}>
                This website may contain links to third-party websites. These links are provided for
                convenience only. Elevora has no control over the content or practices of linked
                sites and accepts no responsibility for them.
              </p>

              <h2 style={h2Style}>5. Limitation of Liability</h2>
              <p style={pStyle}>
                To the fullest extent permitted by law, Elevora shall not be liable for any direct,
                indirect, incidental, or consequential damages arising from your use of, or
                inability to use, this website or its content.
              </p>

              <h2 style={h2Style}>6. Changes to These Terms</h2>
              <p style={pStyle}>
                We reserve the right to update these Terms of Service at any time. Continued use of
                the website after changes are posted constitutes acceptance of the revised terms.
              </p>

              <h2 style={h2Style}>7. Contact</h2>
              <p style={pStyle}>
                If you have questions about these terms, please contact us at{" "}
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
