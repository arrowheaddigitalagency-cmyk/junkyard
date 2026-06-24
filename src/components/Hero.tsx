"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Hero() {
  const [val, setVal] = useState(2500);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background with metallic reflection & particles simulation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=2067&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        {/* Animated Particles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[url('/particles.svg')] bg-repeat opacity-20"
        />
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center px-4 md:px-6 mt-20">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-6"
        >
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary w-fit backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            Premium Auto Salvage
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground drop-shadow-2xl">
            TURN YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">JUNK CAR</span> INTO CASH TODAY
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-[600px] leading-relaxed">
            Get top dollar for your unwanted vehicle. Free towing. Instant offers. Same day pickup.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(200,80,20,0.4)] transition-all duration-300">
              Get Instant Quote
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-primary/50 hover:bg-primary/10 transition-all duration-300">
              Call Now
            </Button>
          </div>
        </motion.div>

        {/* Right Content - Floating Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative lg:ml-auto w-full max-w-md"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            
            <h3 className="text-xl font-semibold mb-6 text-foreground/90">Live Valuation Ticker</h3>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <span className="text-muted-foreground">Recent Offer</span>
                <span className="font-mono text-primary text-xl font-bold">
                  ${val.toLocaleString()}
                </span>
              </div>
              
              <div className="space-y-3">
                {[
                  { car: "2015 Honda Civic", price: "$2,800" },
                  { car: "2010 Ford F-150", price: "$4,200" },
                  { car: "2018 Toyota Camry", price: "$6,500" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.2 }}
                    className="flex justify-between items-center text-sm p-3 rounded-lg bg-black/20 hover:bg-black/40 transition-colors"
                  >
                    <span className="text-foreground/80">{item.car}</span>
                    <span className="text-primary font-medium">{item.price}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none rounded-2xl"></div>
          </motion.div>
          
          {/* Decorative Elements */}
          <div className="absolute -z-10 -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
          <div className="absolute -z-10 -bottom-20 -left-20 w-64 h-64 bg-secondary/40 rounded-full blur-[100px]"></div>
        </motion.div>
      </div>
    </section>
  );
}
