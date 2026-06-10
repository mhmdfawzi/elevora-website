import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import WhyElevora from "@/components/WhyElevora";
import Experience from "@/components/Experience";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
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
