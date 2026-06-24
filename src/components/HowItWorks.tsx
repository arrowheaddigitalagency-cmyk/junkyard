"use client";

import { motion } from "framer-motion";
import { FileText, Calculator, Truck, BadgeDollarSign } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Submit Details",
    description: "Provide basic information about your vehicle's make, model, year, and condition.",
    icon: FileText,
  },
  {
    num: "02",
    title: "Instant Offer",
    description: "Receive a competitive, data-driven cash offer within minutes.",
    icon: Calculator,
  },
  {
    num: "03",
    title: "Schedule Pickup",
    description: "Choose a convenient time for our towing team to collect your vehicle for free.",
    icon: Truck,
  },
  {
    num: "04",
    title: "Get Paid",
    description: "Receive your payment on the spot when we pick up your car.",
    icon: BadgeDollarSign,
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-black relative">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">How It Works</h2>
          <p className="text-muted-foreground text-lg">
            Our streamlined process makes selling your junk car effortless. Get paid in four simple steps.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/4 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent -translate-y-1/2"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-black border-2 border-primary flex items-center justify-center z-10 relative shadow-[0_0_15px_rgba(200,80,20,0.5)]">
                <step.icon className="w-8 h-8 text-primary" />
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-bold border border-white/10">
                  {step.num}
                </div>
              </div>
              <h4 className="text-xl font-semibold mt-4">{step.title}</h4>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
