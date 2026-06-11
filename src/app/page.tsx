import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import WhyElevora from "@/components/WhyElevora";
import Experience from "@/components/Experience";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

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
