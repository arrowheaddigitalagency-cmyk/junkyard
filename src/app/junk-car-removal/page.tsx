import { WhyChooseUs } from "@/components/WhyChooseUs";
import { HowItWorks } from "@/components/HowItWorks";
import { FinalCTA } from "@/components/Footer";

export default function JunkCarRemovalPage() {
  return (
    <main className="flex flex-col bg-background">
      <div className="pt-24 pb-12 bg-white text-center border-b border-border">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Free Junk Car Removal</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We tow your vehicle away completely free of charge. Same-day service available in most areas.
        </p>
      </div>
      <HowItWorks />
      <WhyChooseUs />
      <FinalCTA />
    </main>
  );
}
