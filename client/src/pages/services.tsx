import { SERVICES } from "@/lib/data";
import { ServiceCard } from "@/components/ui/service-card";
import { Section } from "@/components/ui/section";
import { CTASection } from "@/components/ui/cta-section";

export default function Services() {
  return (
    <>
      <Section className="bg-slate-50 pt-32 pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-slate-900">
            Our Electrical Services
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Professional, licensed electrical solutions for every need. 
            From minor repairs to major commercial installations.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="h-full">
              <ServiceCard service={service} featured={service.id === "emergency"} />
            </div>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
