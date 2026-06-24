"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-[80vh] flex items-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 flex">
        <div className="w-full lg:w-1/2 bg-white/95 backdrop-blur-sm lg:bg-white z-10 absolute lg:relative inset-0"></div>
        <div className="w-full lg:w-1/2 relative absolute inset-0 lg:static">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:from-white lg:via-transparent lg:to-transparent z-10"></div>
          {/* Authentic Junkyard / Auto Salvage Image */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-20 pb-12 lg:py-0">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-6"
          >
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary w-fit border border-primary/20 shadow-sm bg-white/80">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              #1 Rated Auto Salvage Service
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Turn Your <span className="text-primary">Unwanted Vehicle</span> Into Cash
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium max-w-xl">
              Fast pickup, fair offers, professional service, and completely hassle-free vehicle removal. Get paid on the spot for your junk car.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm sm:text-base font-semibold text-foreground pt-2">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Free Towing Included</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Any Condition Accepted</div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link href="/sell-your-junk-car" className="w-full sm:w-auto">
                <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 transition-all rounded-full w-full">
                  Get Free Quote
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-primary/30 text-primary hover:bg-primary/5 transition-all rounded-full w-full bg-white/80 backdrop-blur-sm">
                  Call Now
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
