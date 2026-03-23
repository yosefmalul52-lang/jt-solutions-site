import Navbar from "@/components/layout/Navbar";
import MobileStickyCta from "@/components/layout/MobileStickyCta";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Proof from "@/components/sections/Proof";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import TechStack from "@/components/sections/TechStack";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Proof />
        <About />
        <Services />
        <Pricing />
        <TechStack />
        <Contact />
      </main>
      <MobileStickyCta />
      <Footer />
    </>
  );
}
