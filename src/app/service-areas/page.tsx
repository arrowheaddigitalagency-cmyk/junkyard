import { FinalCTA } from "@/components/Footer";
import { MapPin } from "lucide-react";

export default function ServiceAreasPage() {
  const cities = ["Los Angeles", "San Diego", "San Jose", "San Francisco", "Fresno", "Sacramento", "Long Beach", "Oakland", "Bakersfield", "Anaheim"];
  
  return (
    <main className="flex flex-col bg-background">
      <div className="pt-24 pb-12 bg-secondary/30 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Service Areas</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We provide free junk car removal and top dollar cash offers across our extensive service network.
        </p>
      </div>
      
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-secondary/20 h-[500px] rounded-3xl border border-border flex items-center justify-center p-8">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold">Interactive Map placeholder</h3>
                <p className="text-muted-foreground">Detailed coverage map goes here</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Major Cities We Serve</h2>
              <div className="grid grid-cols-2 gap-4">
                {cities.map((city) => (
                  <div key={city} className="flex items-center gap-2 p-3 bg-secondary/10 rounded-lg border border-border">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="font-medium">{city}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
