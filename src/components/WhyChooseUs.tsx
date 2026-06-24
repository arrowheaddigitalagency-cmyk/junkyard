"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Truck, Banknote, ShieldCheck, Leaf } from "lucide-react";

const features = [
  {
    title: "Top Market Value",
    description: "Our proprietary algorithm ensures you get the highest possible payout for your vehicle.",
    icon: TrendingUp,
  },
  {
    title: "Free Towing",
    description: "No hidden fees. We dispatch our fleet to pick up your vehicle completely free of charge.",
    icon: Truck,
  },
  {
    title: "Fast Payments",
    description: "Get paid instantly on the spot. No waiting for checks to clear or transfers to process.",
    icon: Banknote,
  },
  {
    title: "Licensed Buyers",
    description: "We are a fully licensed, bonded, and insured automotive salvage dealership.",
    icon: ShieldCheck,
  },
  {
    title: "Eco-Friendly Recycling",
    description: "We strictly adhere to EPA guidelines for hazardous material disposal and metal recycling.",
    icon: Leaf,
  },
  {
    title: "Trusted Service",
    description: "Over a decade of industry experience with a 4.9/5 star average customer rating.",
    icon: CheckCircle2,
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative border-y border-border">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-wider text-primary uppercase mb-3">The Prime Advantage</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">Why Choose Us</h3>
            <p className="text-muted-foreground text-lg mb-8">
              We aren't just another junkyard. We are a modernized, technology-driven auto salvage company dedicated to providing the most transparent, lucrative, and seamless vehicle selling experience.
            </p>
            
            <div className="relative h-[400px] rounded-2xl overflow-hidden border border-border shadow-xl">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="space-y-3"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
