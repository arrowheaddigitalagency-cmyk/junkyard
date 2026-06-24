"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/10"></div>
      
      <div className="container px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white border border-border p-12 rounded-3xl shadow-xl"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-foreground">
            Ready To Sell Your Vehicle?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Get an instant offer today. No haggling, no stress, just top dollar for your car and free towing.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link href="/sell-your-junk-car">
              <Button size="lg" className="h-16 px-10 text-xl bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 transition-all duration-300 w-full sm:w-auto rounded-full">
                Get Instant Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="h-16 px-10 text-xl border-primary/20 text-primary hover:bg-primary/5 transition-all duration-300 w-full sm:w-auto rounded-full group">
                <PhoneCall className="w-5 h-5 mr-3 group-hover:animate-pulse" />
                Call Now
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-foreground text-white pt-20 pb-10">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tighter text-white">
              <span className="text-primary">PRIME</span> SALVAGE
            </h3>
            <p className="text-gray-400">
              Premium automotive recycling and auto salvage. Setting the industry standard for transparent and eco-friendly vehicle salvaging.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/services" className="hover:text-primary transition-colors">Cash for Cars</Link></li>
              <li><Link href="/junk-car-removal" className="hover:text-primary transition-colors">Free Towing</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Scrap Car Buying</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Vehicle Recycling</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/service-areas" className="hover:text-primary transition-colors">Service Areas</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Legal</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Prime Salvage. All rights reserved.</p>
          <p className="mt-4 md:mt-0">
            Designed & Developed By <span className="text-white font-medium">Arrowhead Digitech</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
