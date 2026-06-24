"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Settings, Zap, KeySquare, HardDrive, Disc } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const categories = [
  { name: "All", icon: Search },
  { name: "Engines", icon: Settings },
  { name: "Transmissions", icon: Zap },
  { name: "Body Parts", icon: KeySquare },
  { name: "Electronics", icon: HardDrive },
  { name: "Wheels", icon: Disc },
];

const inventory = [
  { id: 1, name: "5.0L V8 Engine - Coyote", category: "Engines", make: "Ford", year: 2018, price: "$3,500", status: "In Stock" },
  { id: 2, name: "6-Speed Automatic Transmission", category: "Transmissions", make: "Toyota", year: 2015, price: "$850", status: "In Stock" },
  { id: 3, name: "Front Bumper Assembly", category: "Body Parts", make: "Honda", year: 2020, price: "$320", status: "2 Left" },
  { id: 4, name: "Infotainment Display Unit", category: "Electronics", make: "Tesla", year: 2021, price: "$1,200", status: "In Stock" },
  { id: 5, name: "18-inch Alloy Wheel Set", category: "Wheels", make: "BMW", year: 2019, price: "$650", status: "Out of Stock" },
  { id: 6, name: "Alternator 140 Amp", category: "Electronics", make: "Chevrolet", year: 2017, price: "$120", status: "In Stock" },
];

export function PartsInventory() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredInventory = inventory.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.make.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-24 bg-black relative" id="parts">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Premium Auto Parts</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Search our massive inventory of extracted, tested, and certified used auto parts. High quality, fraction of the price.
            </p>
          </div>
          
          <div className="w-full md:w-80 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input 
              placeholder="Search parts, make, or model..." 
              className="pl-10 h-12 bg-card/50 border-white/10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <Button
              key={cat.name}
              variant={activeCategory === cat.name ? "default" : "outline"}
              className={`rounded-full ${activeCategory !== cat.name ? 'border-white/10 bg-transparent hover:bg-white/5' : 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_rgba(200,80,20,0.4)]'}`}
              onClick={() => setActiveCategory(cat.name)}
            >
              <cat.icon className="w-4 h-4 mr-2" />
              {cat.name}
            </Button>
          ))}
        </div>

        {/* Inventory Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredInventory.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="rounded-xl border border-white/10 bg-card p-6 hover:border-primary/50 transition-colors group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[50px] group-hover:bg-primary/20 transition-colors"></div>
                
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">{item.category}</span>
                  <span className={`text-xs px-2 py-1 rounded-md border ${item.status === 'In Stock' ? 'border-green-500/30 text-green-400 bg-green-500/10' : item.status === 'Out of Stock' ? 'border-red-500/30 text-red-400 bg-red-500/10' : 'border-yellow-500/30 text-yellow-400 bg-yellow-500/10'}`}>
                    {item.status}
                  </span>
                </div>
                
                <h4 className="text-xl font-bold mb-2">{item.name}</h4>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span>{item.year} {item.make}</span>
                </div>
                
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-bold text-foreground">{item.price}</span>
                  <Button variant="outline" className="border-white/10 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                    Inquire
                  </Button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredInventory.length === 0 && (
            <div className="col-span-full flex flex-col items-center justify-center py-20 text-muted-foreground">
              <Search className="w-12 h-12 mb-4 opacity-20" />
              <p className="text-xl">No parts found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
