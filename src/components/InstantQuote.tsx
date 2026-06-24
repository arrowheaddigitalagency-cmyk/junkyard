"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function InstantQuote() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-white relative" id="quote">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-border bg-white p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>
            
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">Get Your Instant Quote</h2>
              <p className="text-muted-foreground text-lg">Fill out the details below to receive a top-market offer for your vehicle.</p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Full Name</label>
                    <Input required placeholder="John Doe" className="bg-white border-border h-12 shadow-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Phone Number</label>
                    <Input required type="tel" placeholder="(555) 123-4567" className="bg-white border-border h-12 shadow-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Email Address</label>
                    <Input required type="email" placeholder="john@example.com" className="bg-white border-border h-12 shadow-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Vehicle Location (Zip Code)</label>
                    <Input required placeholder="12345" className="bg-white border-border h-12 shadow-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Vehicle Year</label>
                    <Input required placeholder="e.g. 2012" className="bg-white border-border h-12 shadow-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Vehicle Make & Model</label>
                    <Input required placeholder="e.g. Toyota Camry" className="bg-white border-border h-12 shadow-sm" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Condition</label>
                  <select className="flex h-12 w-full rounded-md border border-border bg-white px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option>Running, Excellent Condition</option>
                    <option>Running, Needs Work</option>
                    <option>Not Running</option>
                    <option>Scrap/Junk</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Additional Message</label>
                  <Textarea placeholder="Any other details we should know?" className="bg-white border-border min-h-[100px] shadow-sm" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Image Upload</label>
                  <Input type="file" multiple className="bg-white border-border h-12 shadow-sm" />
                </div>

                <div className="pt-4">
                  <Button type="submit" size="lg" className="w-full h-14 text-lg bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 transition-all rounded-full">
                    Get My Offer
                  </Button>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-green-100 border-2 border-green-500 flex items-center justify-center">
                  <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-foreground">Request Received!</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Thank you for submitting your vehicle details. Our team is calculating your premium offer and will contact you shortly.
                </p>
                <Button variant="outline" onClick={() => setSubmitted(false)} className="mt-4 rounded-full">
                  Submit Another Vehicle
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
