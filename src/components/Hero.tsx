"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 flex">
        <div className="w-1/2 bg-white hidden lg:block"></div>
        <div className="w-full lg:w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:from-white lg:via-transparent lg:to-transparent z-10"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        </div>
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-2xl bg-white/70 lg:bg-transparent backdrop-blur-xl lg:backdrop-blur-none p-8 lg:p-0 rounded-3xl border border-white/50 lg:border-none shadow-2xl lg:shadow-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-6"
          >
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary w-fit border border-primary/20">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              #1 Rated Auto Salvage Service
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground">
              Turn Your <span className="text-primary">Unwanted Vehicle</span> Into Cash
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-lg">
              Fast pickup, fair offers, professional service, and completely hassle-free vehicle removal. Get paid on the spot.
            </p>

            <div className="flex flex-col gap-3 text-sm font-semibold text-foreground">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Free Towing Included</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> No Hidden Fees</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Any Condition Accepted</div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/sell-your-junk-car">
                <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 transition-all rounded-full w-full sm:w-auto">
                  Get Free Quote
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-primary/30 text-primary hover:bg-primary/5 transition-all rounded-full w-full sm:w-auto bg-white/50 backdrop-blur-sm">
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
