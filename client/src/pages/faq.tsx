import { Section } from "@/components/ui/section";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { CTASection } from "@/components/ui/cta-section";

export default function FAQ() {
  return (
    <>
      <Section className="bg-slate-50 pt-32 pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-slate-900">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Answers to common questions about our electrical services, pricing, and process.
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <FAQAccordion />
        </div>
      </Section>

      <CTASection />
    </>
  );
}
