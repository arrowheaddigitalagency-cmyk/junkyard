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
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center shrink-0">
          <span className="text-lg md:text-xl font-bold tracking-tighter text-foreground whitespace-nowrap">
            <span className="text-primary">ARROWHEAD</span> DIGITECH
          </span>
        </Link>
        
        <nav className="hidden xl:flex items-center gap-4 lg:gap-5 whitespace-nowrap overflow-hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[13px] xl:text-sm font-medium transition-colors hover:text-primary ${
                pathname === link.href ? "text-primary font-bold" : "text-muted-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        <div className="hidden xl:flex items-center gap-3 shrink-0">
          <Link href="/sell-your-junk-car">
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-white rounded-full px-5 text-xs font-semibold">
              Get Quote
            </Button>
          </Link>
          <Button size="sm" variant="outline" className="border-primary/20 text-primary hover:bg-primary/5 rounded-full text-xs font-semibold">
            <PhoneCall className="w-3.5 h-3.5 mr-1.5" />
            (555) 123-4567
          </Button>
        </div>

        <button 
          className="xl:hidden text-foreground p-2 ml-auto"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-16 left-0 w-full bg-white border-b border-border shadow-lg p-4 flex flex-col gap-3 max-h-[calc(100vh-64px)] overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-base font-medium p-3 rounded-md ${
                pathname === link.href ? "bg-primary/10 text-primary" : "text-foreground hover:bg-secondary"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border">
            <Link href="/sell-your-junk-car" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-base rounded-full">
                Get Free Quote
              </Button>
            </Link>
            <Button variant="outline" className="w-full border-primary/20 text-primary hover:bg-primary/5 h-12 text-base rounded-full">
              <PhoneCall className="w-4 h-4 mr-2" />
              (555) 123-4567
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
