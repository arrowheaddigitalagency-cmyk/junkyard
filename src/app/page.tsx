import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="flex flex-col bg-background selection:bg-primary/20">
      <Hero />
      <TrustBar />
      <div className="py-12 md:py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Top Rated Cash For Cars Service</h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            We are the premier destination for selling your unwanted vehicle. Fast, professional, and transparent.
          </p>
        </div>
      </div>
      <Services />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
    </main>
  );
}
