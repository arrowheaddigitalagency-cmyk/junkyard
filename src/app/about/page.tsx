import { AboutCompany } from "@/components/AboutCompany";
import { FinalCTA } from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="flex flex-col bg-background">
      <div className="pt-24 pb-12 bg-secondary/30 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">About Us</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Learn about our mission, vision, and why we are the industry leader in auto salvage and recycling.
        </p>
      </div>
      <AboutCompany />
      
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Professional Team</h2>
            <p className="text-muted-foreground">Expert appraisers, drivers, and recycling specialists.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-secondary mb-4 border border-border"></div>
                <h4 className="text-xl font-semibold">Team Member {i}</h4>
                <p className="text-primary text-sm font-medium">Position Title</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <FinalCTA />
    </main>
  );
}
