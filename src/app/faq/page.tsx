import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/Footer";

export default function FAQPage() {
  return (
    <main className="flex flex-col bg-background">
      <div className="pt-24 pb-12 bg-white text-center border-b border-border">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Find answers to common questions about our auto salvage and vehicle purchasing process.
        </p>
      </div>
      <FAQ />
      <FinalCTA />
    </main>
  );
}
