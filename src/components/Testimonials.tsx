"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael R.",
    role: "Local Resident",
    content: "Got a quote in 5 minutes, they towed my old Honda the same afternoon and handed me cash. Easiest process ever.",
    rating: 5,
  },
  {
    name: "David T.",
    role: "Uber Driver",
    content: "My car was totaled in an accident. Prime gave me a better offer than my insurance buyout. Very professional and respectful.",
    rating: 4.5,
  },
  {
    name: "Amanda L.",
    role: "Seller",
    content: "I was skeptical at first, but they actually gave me the amount they quoted online. No haggling at the pickup.",
    rating: 5,
  },
  {
    name: "James K.",
    role: "Local Resident",
    content: "The driver was incredibly polite, arrived exactly on time, and handled everything in under 15 minutes.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-secondary/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-40 mt-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-primary uppercase mb-3">Client Success</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">What People Are Saying</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-border shadow-sm rounded-2xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < Math.floor(testimonial.rating) ? 'text-primary fill-primary' : 'text-muted-foreground/30'}`} 
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h5 className="font-semibold text-sm text-foreground">{testimonial.name}</h5>
                  <span className="text-xs text-muted-foreground">{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
