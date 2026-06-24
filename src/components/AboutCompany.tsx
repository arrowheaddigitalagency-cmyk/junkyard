"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutCompany() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] -translate-y-1/2 -z-10"></div>
      
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[500px] rounded-3xl overflow-hidden border border-white/10"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2066&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity opacity-60"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
            
            <div className="absolute bottom-8 left-8 right-8">
              <div className="backdrop-blur-md bg-black/40 border border-white/10 p-6 rounded-2xl">
                <div className="text-primary font-bold text-4xl mb-1">15+</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Years of Excellence</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-wider text-primary uppercase mb-3">About Prime Salvage</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Built for Automotive Excellence</h3>
            
            <div className="space-y-6 text-muted-foreground text-lg mb-8">
              <p>
                Prime Salvage Auto Parts was founded on a singular vision: to revolutionize the automotive recycling industry by introducing transparency, technology, and premium customer service to what was traditionally a chaotic market.
              </p>
              <p>
                We are committed to eco-friendly recycling practices, ensuring that every vehicle we process is dismantled responsibly. We extract maximum value, saving millions of pounds of usable parts from landfills, while safely disposing of hazardous materials.
              </p>
            </div>

            <Button className="group bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all">
              Read Our Full Story
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
