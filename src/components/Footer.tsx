"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/20"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=2128&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
      
      <div className="container px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-black/60 backdrop-blur-xl border border-white/20 p-12 rounded-3xl shadow-2xl"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">
            Ready To Sell Your Vehicle?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Get an instant offer today. No haggling, no stress, just top dollar for your car and free towing.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Button size="lg" className="h-16 px-10 text-xl bg-primary hover:bg-primary/90 text-white shadow-[0_0_30px_rgba(200,80,20,0.5)] transition-all duration-300 w-full sm:w-auto rounded-full">
              Get Instant Quote
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-10 text-xl border-white hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto rounded-full group">
              <PhoneCall className="w-5 h-5 mr-3 group-hover:animate-pulse" />
              Call Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tighter">
              <span className="text-primary">PRIME</span> SALVAGE
            </h3>
            <p className="text-muted-foreground">
              Premium automotive recycling and auto parts. Setting the industry standard for transparent and eco-friendly vehicle salvaging.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Cash for Cars</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Auto Salvage</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Used Parts Inventory</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Free Towing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Legal</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Prime Salvage Auto Parts. All rights reserved.</p>
          <p className="mt-4 md:mt-0">
            Designed & Developed By <span className="text-white font-medium">Arrowhead Digitech</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
