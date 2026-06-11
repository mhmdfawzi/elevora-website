import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Above-fold: eager
import Capabilities from "@/components/Capabilities";

// Below-fold: dynamically imported — split into separate JS chunks
const WhyElevora = dynamic(() => import("@/components/WhyElevora"));
const Experience  = dynamic(() => import("@/components/Experience"));
const Process     = dynamic(() => import("@/components/Process"));
const CTA         = dynamic(() => import("@/components/CTA"));
const Footer      = dynamic(() => import("@/components/Footer"));

export const metadata: Metadata = {
  title: "Elevora | Custom Software, SaaS & AI Solutions",
  description:
    "Elevora helps startups and enterprises build scalable software products, SaaS platforms, and AI-powered solutions across Saudi Arabia and Egypt.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Capabilities />
        <WhyElevora />
        <Experience />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
