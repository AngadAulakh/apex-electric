import { Section } from "@/components/ui/section";
import { COMPANY_INFO } from "@/lib/data";
import { ShieldCheck, Award, Users, HeartHandshake } from "lucide-react";
import { CTASection } from "@/components/ui/cta-section";

export default function About() {
  return (
    <>
      <Section className="bg-slate-50 pt-32 pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-slate-900">
            About Apex Electric
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Building trust through transparency, safety, and superior craftsmanship.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-heading font-bold">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded with a mission to raise the standard of electrical work in Toronto, Apex Electric has grown from a single van to a fleet of trusted professionals. We believe that electrical work isn't just about wires—it's about the safety and comfort of your home or business.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We saw a gap in the market for honest, high-quality workmanship without the confusing technical jargon or hidden fees. That's why we prioritize clear communication and upfront pricing for every job, big or small.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full text-primary"><ShieldCheck /></div>
                <span className="font-semibold">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full text-primary"><Award /></div>
                <span className="font-semibold">ESA Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full text-primary"><Users /></div>
                <span className="font-semibold">Background Checked</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full text-primary"><HeartHandshake /></div>
                <span className="font-semibold">Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
             <img 
              src="/assets/hero-bg.jpg" 
              alt="Apex Electric Team" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
