"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does the process take?",
    answer: "Our process is incredibly fast. Once you accept our instant offer, we can often schedule a pickup and have cash in your hand within 24 hours.",
  },
  {
    question: "Do I need the title to sell my junk car?",
    answer: "In most cases, yes, a title is required to prove ownership. However, in certain states and under specific conditions, we may be able to purchase your vehicle with alternative documentation like a valid registration and photo ID.",
  },
  {
    question: "Are there any hidden fees for towing?",
    answer: "Absolutely not. The offer you receive is the amount you get paid. We cover all towing and removal costs completely free of charge.",
  },
  {
    question: "What types of vehicles do you buy?",
    answer: "We buy all types of vehicles: cars, trucks, SUVs, and vans. We accept them in any condition, whether they are running, completely totaled, missing parts, or damaged by fire/water.",
  },
  {
    question: "How is the value of my junk car determined?",
    answer: "Our advanced algorithm calculates your offer based on current scrap metal prices, the demand for your vehicle's specific parts, its weight, and overall condition.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 bg-black relative border-t border-white/5">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">Everything you need to know about selling your junk car or buying premium parts.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Accordion className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-white/10 bg-card/30 px-6 rounded-xl overflow-hidden">
                  <AccordionTrigger className="text-left hover:no-underline hover:text-primary transition-colors py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
