"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2, Star, ShieldCheck, Clock, Truck, DollarSign } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * 0.05,
        y: (e.clientY - window.innerHeight / 2) * 0.05,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[100vh] flex items-center bg-white overflow-hidden border-b border-border perspective-1000">
      
      {/* Immersive Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft Animated Glow behind Headline */}
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] mix-blend-multiply animate-pulse-slow"></div>
        
        {/* Animated Mesh Gradients & Orbs */}
        <motion.div 
          animate={{ 
            x: mousePosition.x * -1.5, 
            y: mousePosition.y * -1.5,
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ rotate: { duration: 40, repeat: Infinity, ease: "linear" } }}
          className="absolute -top-[10%] -right-[10%] w-[800px] h-[800px] bg-gradient-to-br from-primary/5 via-primary/10 to-transparent rounded-full blur-[100px]"
        ></motion.div>

        {/* 3D Floating Glass Elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotateZ: [0, 10, 0],
            rotateX: [0, 20, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] right-[40%] w-32 h-32 bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl shadow-2xl z-0 transform-style-3d"
        />
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            rotateZ: [0, -15, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] left-[5%] w-24 h-24 bg-primary/5 backdrop-blur-md border border-primary/20 rounded-full shadow-xl z-0"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-24 pb-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-8 lg:pr-8 text-center lg:text-left relative"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center mx-auto lg:mx-0 rounded-full bg-white/80 backdrop-blur-md px-5 py-2 text-sm font-semibold text-foreground border border-primary/20 shadow-lg"
            >
              <span className="flex h-2.5 w-2.5 rounded-full bg-primary mr-3 animate-pulse shadow-[0_0_10px_rgba(234,88,12,0.5)]"></span>
              The Enterprise Standard in Auto Salvage
            </motion.div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-extrabold tracking-tight text-foreground leading-[1.05] xl:leading-[1.05] relative">
              <span className="block relative z-10">We Buy</span>
              <span className="relative inline-block mt-2">
                <span className="absolute inset-0 bg-primary/20 blur-[30px] rounded-full z-0 translate-y-2"></span>
                <span className="relative z-10 text-primary">Junk Cars</span>
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Experience the highest-paying, most professional vehicle removal service. Instant offers, completely free towing, and zero hidden fees.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5 pt-2">
              <Link href="/sell-your-junk-car" className="w-full sm:w-auto">
                <Button size="lg" className="h-16 px-10 text-lg bg-primary hover:bg-primary/90 text-white shadow-[0_20px_40px_-15px_rgba(234,88,12,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(234,88,12,0.6)] transition-all duration-300 rounded-full w-full group overflow-hidden relative">
                  <span className="absolute inset-0 w-full h-full -ml-10 bg-white/20 skew-x-12 translate-x-[-150%] group-hover:translate-x-[250%] transition-transform duration-1000 ease-in-out"></span>
                  <span className="relative flex items-center gap-2">
                    Get Instant Cash Offer <DollarSign className="w-5 h-5" />
                  </span>
                </Button>
              </Link>
            </div>

            {/* Premium Trust Badges */}
            <div className="pt-8 border-t border-border/60 grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
              <div className="flex flex-col items-center lg:items-start space-y-1">
                <div className="flex items-center gap-1.5 text-foreground font-bold">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> 50,000+
                </div>
                <span className="text-xs text-muted-foreground font-medium">Vehicles Bought</span>
              </div>
              <div className="flex flex-col items-center lg:items-start space-y-1">
                <div className="flex items-center gap-1.5 text-foreground font-bold">
                  <Clock className="w-4 h-4 text-primary" /> 24 Hour
                </div>
                <span className="text-xs text-muted-foreground font-medium">Fast Pickup</span>
              </div>
              <div className="flex flex-col items-center lg:items-start space-y-1">
                <div className="flex items-center gap-1.5 text-foreground font-bold">
                  <Truck className="w-4 h-4 text-primary" /> Free
                </div>
                <span className="text-xs text-muted-foreground font-medium">Vehicle Towing</span>
              </div>
              <div className="flex flex-col items-center lg:items-start space-y-1">
                <div className="flex items-center gap-1.5 text-foreground font-bold">
                  <ShieldCheck className="w-4 h-4 text-primary" /> Licensed
                </div>
                <span className="text-xs text-muted-foreground font-medium">Fully Insured</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Composition & Imagery */}
          <motion.div
            style={{ y: y1 }}
            className="relative w-full h-[500px] lg:h-[700px] mt-12 lg:mt-0"
          >
            {/* Background 3D Elements */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/10 rounded-full border-dashed pointer-events-none"
            />
            
            {/* Main Visual Frame */}
            <div 
              className="absolute inset-4 sm:inset-10 lg:inset-8 xl:inset-12 rounded-[2.5rem] bg-secondary/50 p-3 border border-white/50 shadow-2xl backdrop-blur-sm"
            >
              <div className="w-full h-full rounded-[2rem] overflow-hidden relative shadow-inner">
                {/* Authentic Tow Truck / Salvage Yard Composition */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/my-hero.jpg')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-primary/20 mix-blend-overlay pointer-events-none"></div>
              </div>
            </div>

            {/* Floating Badges (Glassmorphism) */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[10%] -left-[5%] lg:-left-[10%] bg-white/90 backdrop-blur-xl border border-white/60 p-4 sm:p-5 rounded-2xl shadow-2xl flex items-center gap-4 z-20"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 border border-primary/20">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm sm:text-base font-bold text-foreground leading-tight">Same Day</p>
                <p className="text-xs text-muted-foreground font-medium">Vehicle Removal</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-[15%] -right-[5%] lg:-right-[5%] bg-white/90 backdrop-blur-xl border border-white/60 p-4 sm:p-5 rounded-2xl shadow-2xl flex items-center gap-4 z-20"
            >
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center shrink-0 border border-green-500/20">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm sm:text-base font-bold text-foreground leading-tight">Highest Payouts</p>
                <p className="text-xs text-muted-foreground font-medium">Instant Cash Offer</p>
              </div>
            </motion.div>
            
            {/* Top right decorative element */}
            <motion.div
              animate={{ rotateZ: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 right-0 w-24 h-24 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjM0LCA4OCLCAxMiwgMC4yKSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwb2x5Z29uIHBvaW50cz0iMTIgMiA1IDIxIDIyIDkiPjwvcG9seWdvbj48L3N2Zz4=')] opacity-50 bg-contain bg-no-repeat bg-center mix-blend-multiply"
            />

          </motion.div>
        </div>
      </div>
    </section>
  );
}
