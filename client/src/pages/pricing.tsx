import { Section } from "@/components/ui/section";
import { CTASection } from "@/components/ui/cta-section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <>
      <Section className="bg-slate-50 pt-32 pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-slate-900">
            Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            No hidden fees. No surprises. Just honest, upfront quotes for quality work.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
            { 
              title: "Service Call / Diagnostic", 
              price: "$150", 
              desc: "Perfect for troubleshooting outlets, switches, or unknown electrical issues.", 
              features: ["Licensed Electrician Arrival", "Up to 1 hour of labor", "Detailed safety inspection", "Upfront quote for repairs"],
              cta: "Book Diagnostic"
            },
            { 
              title: "EV Charger Install", 
              price: "$899+", 
              desc: "Standard installation for Tesla and other EV chargers located near the panel.", 
              features: ["ESA Permit & Inspection", "Load Calculation", "Professional Installation", "Customer Orientation"],
              featured: true,
              cta: "Get EV Quote"
            },
            { 
              title: "Panel Upgrade", 
              price: "$2,500+", 
              desc: "Upgrade your home's electrical capacity to 200 Amps.", 
              features: ["Hydro Disconnect/Reconnect", "New Breaker Panel", "Whole Home Surge Protection", "Grounding System Upgrade"],
              cta: "Request Panel Quote"
            }
          ].map((item, i) => (
            <div key={i} className={`relative flex flex-col p-8 rounded-2xl border ${item.featured ? 'border-primary shadow-2xl scale-105 bg-white z-10' : 'border-slate-200 bg-slate-50 shadow-sm'}`}>
              {item.featured && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Most Popular</div>}
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <div className="text-4xl font-bold text-slate-900 mb-4">{item.price}</div>
              <p className="text-muted-foreground mb-8 text-sm leading-relaxed">{item.desc}</p>
              <ul className="space-y-4 mb-8 flex-grow">
                {item.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <Check className="h-5 w-5 text-green-500 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <Button variant={item.featured ? "default" : "outline"} className="w-full font-bold">
                  {item.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-yellow-50 p-8 rounded-xl border border-yellow-100 max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-bold text-yellow-800 mb-4">Pricing Disclaimer</h3>
          <p className="text-yellow-800/80 leading-relaxed">
            The prices listed above are starting estimates for standard installations. Every home is different. 
            Factors such as the age of your home, accessibility of wiring, and distance from the panel can affect the final cost. 
            We always provide a guaranteed written quote before starting any work.
          </p>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
