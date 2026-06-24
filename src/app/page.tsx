import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { InstantQuote } from "@/components/InstantQuote";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { PartsInventory } from "@/components/PartsInventory";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { AboutCompany } from "@/components/AboutCompany";
import { FinalCTA, Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-primary/30">
      <Hero />
      <TrustBar />
      <Services />
      <HowItWorks />
      <InstantQuote />
      <WhyChooseUs />
      <PartsInventory />
      <Testimonials />
      <AboutCompany />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
