import { InstantQuote } from "@/components/InstantQuote";
import { HowItWorks } from "@/components/HowItWorks";

export default function SellYourJunkCarPage() {
  return (
    <main className="flex flex-col bg-background">
      <div className="pt-24 pb-12 bg-white text-center border-b border-border">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Sell Your Junk Car</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Get a premium instant cash offer for your vehicle in any condition. 
          Fill out our secure form below to start the process.
        </p>
      </div>
      <InstantQuote />
      <HowItWorks />
    </main>
  );
}
