import { Services } from "@/components/Services";
import { FinalCTA } from "@/components/Footer";

export default function ServicesPage() {
  return (
    <main className="flex flex-col bg-background">
      <div className="pt-24 pb-12 bg-secondary/30 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Our Premium Services</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive auto salvage, junk car buying, and recycling solutions.
        </p>
      </div>
      <Services />
      <FinalCTA />
    </main>
  );
}
