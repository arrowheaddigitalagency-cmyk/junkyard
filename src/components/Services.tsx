"use client";

import { motion } from "framer-motion";
import { 
  Car, 
  Wrench, 
  Recycle, 
  DollarSign, 
  Settings, 
  ShieldAlert, 
  BatteryWarning, 
  Truck 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Cash For Junk Cars",
    description: "Instant cash offers for vehicles in any condition.",
    icon: DollarSign,
  },
  {
    title: "Sell Your Scrap Vehicle",
    description: "Turn your old, rusted scrap vehicle into instant profit.",
    icon: Car,
  },
  {
    title: "Auto Salvage Solutions",
    description: "Comprehensive auto dismantling and salvaging operations.",
    icon: Wrench,
  },
  {
    title: "Used Auto Parts",
    description: "Premium extracted and tested used auto parts.",
    icon: Settings,
  },
  {
    title: "Free Vehicle Removal",
    description: "We tow your vehicle away completely free of charge.",
    icon: Truck,
  },
  {
    title: "Accident Vehicle Purchase",
    description: "We buy crashed and totaled vehicles at fair market value.",
    icon: ShieldAlert,
  },
  {
    title: "Non-Running Cars",
    description: "Engine blown? Transmission shot? We still want it.",
    icon: BatteryWarning,
  },
  {
    title: "Recycling Services",
    description: "Eco-friendly recycling of hazardous automotive fluids and materials.",
    icon: Recycle,
  },
];

export function Services() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-primary uppercase mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Premium Salvage Services</h3>
          <p className="text-muted-foreground text-lg">
            We provide end-to-end automotive salvage and recycling solutions, ensuring maximum value and eco-friendly disposal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group relative h-full bg-card/50 backdrop-blur-sm border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
