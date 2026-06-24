"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-6 lg:pr-8 text-center lg:text-left"
          >
            <div className="inline-flex items-center mx-auto lg:mx-0 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary w-fit border border-primary/20 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              #1 Rated Auto Salvage Service
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-extrabold tracking-tight text-foreground leading-[1.1] xl:leading-[1.1]">
              We Buy <span className="text-primary">Junk Cars</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium max-w-xl mx-auto lg:mx-0">
              Turn your unwanted, damaged, or scrap vehicle into instant cash today. Fast pickup, fair offers, and completely hassle-free vehicle removal.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6 text-sm sm:text-base font-semibold text-foreground pt-2">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Free Towing Included</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Any Condition Accepted</div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-6 w-full max-w-md mx-auto lg:mx-0">
              <Link href="/sell-your-junk-car" className="w-full sm:w-auto flex-1">
                <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 transition-all rounded-full w-full">
                  Get Free Quote
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto flex-1">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-primary/30 text-primary hover:bg-primary/5 transition-all rounded-full w-full bg-white/80">
                  Call Now
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 mt-2 border-t border-border/50 flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-secondary flex items-center justify-center shrink-0 overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt={`Customer ${i}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-muted-foreground mt-0.5">Over 50,000 Happy Sellers</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Professional Junkyard Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square xl:aspect-[4/3] rounded-3xl overflow-hidden border border-border shadow-2xl group"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544626081-35c829e08d51?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            
            {/* Overlay badge */}
            <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 bg-white/95 backdrop-blur-sm border border-border p-4 rounded-2xl shadow-lg flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground leading-tight">Same Day</p>
                <p className="text-xs text-muted-foreground font-medium">Vehicle Removal</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
