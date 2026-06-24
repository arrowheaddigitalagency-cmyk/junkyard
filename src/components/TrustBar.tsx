"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { id: 1, label: "Vehicles Purchased", value: 50000, suffix: "+", duration: 2 },
  { id: 2, label: "States Covered", value: 25, suffix: "+", duration: 1.5 },
  { id: 3, label: "Customer Rating", value: 4.9, suffix: "/5", duration: 1.5, isFloat: true },
  { id: 4, label: "Pickup Time", value: 24, suffix: " Hours", duration: 2 },
];

function Counter({ value, duration, isFloat }: { value: number; duration: number; isFloat?: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      setCount(progress * value);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [value, duration]);

  return <span>{isFloat ? count.toFixed(1) : Math.floor(count).toLocaleString()}</span>;
}

export function TrustBar() {
  return (
    <section className="relative py-12 md:py-16 bg-white border-y border-border z-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center space-y-2 text-center"
            >
              <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-foreground">
                <Counter value={stat.value} duration={stat.duration} isFloat={stat.isFloat} />
                <span className="text-primary">{stat.suffix}</span>
              </h4>
              <p className="text-xs sm:text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
