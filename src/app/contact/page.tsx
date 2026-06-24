import { FinalCTA } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="flex flex-col bg-background">
      <div className="pt-20 md:pt-24 pb-10 md:pb-12 bg-secondary/30 text-center border-b border-border px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">Contact Us</h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Have questions or need assistance? Reach out to our professional team today.
        </p>
      </div>
      
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Get In Touch</h2>
              <p className="text-muted-foreground mb-6 md:mb-8 text-sm md:text-base">
                Fill out the form below and one of our Arrowhead Digitech salvage specialists will get back to you as soon as possible.
              </p>
              
              <form className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">First Name</label>
                    <Input placeholder="John" className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Last Name</label>
                    <Input placeholder="Doe" className="h-12" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Email Address</label>
                  <Input type="email" placeholder="john@example.com" className="h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Message</label>
                  <Textarea placeholder="How can we help you?" className="min-h-[120px] md:min-h-[150px]" />
                </div>
                <Button size="lg" className="w-full h-12 md:h-14 text-base md:text-lg bg-primary hover:bg-primary/90 text-white rounded-full">
                  Send Message
                </Button>
              </form>
            </div>
            
            <div className="space-y-10 md:space-y-12">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-6">Business Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Phone</h4>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Email</h4>
                      <p className="text-muted-foreground">contact@arrowheaddigitech.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Headquarters</h4>
                      <p className="text-muted-foreground">1234 Salvage Yard Way<br />Industrial District, CA 90210</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-secondary/20 h-[250px] md:h-[300px] rounded-3xl border border-border flex items-center justify-center">
                <p className="text-muted-foreground font-medium">Google Maps Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
