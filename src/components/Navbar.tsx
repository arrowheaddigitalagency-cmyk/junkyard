"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { PhoneCall, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Junk Car Removal", href: "/junk-car-removal" },
  { name: "Service Areas", href: "/service-areas" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact Us", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white/80 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tighter text-foreground">
            <span className="text-primary">PRIME</span> SALVAGE
          </span>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === link.href ? "text-primary font-semibold" : "text-muted-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/sell-your-junk-car">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
              Get Free Quote
            </Button>
          </Link>
          <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary/5 rounded-full">
            <PhoneCall className="w-4 h-4 mr-2" />
            (555) 123-4567
          </Button>
        </div>

        <button 
          className="lg:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-border shadow-lg p-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-lg font-medium p-2 rounded-md ${
                pathname === link.href ? "bg-primary/10 text-primary" : "text-foreground hover:bg-secondary"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/sell-your-junk-car" onClick={() => setMobileMenuOpen(false)}>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white mt-2">
              Get Free Quote
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
