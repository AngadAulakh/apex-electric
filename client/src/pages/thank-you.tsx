import { Link } from "wouter";
import { CheckCircle } from "lucide-react";
import { Section } from "@/components/ui/section";
import { CTASection } from "@/components/ui/cta-section";
import { Button } from "@/components/ui/button";

export default function ThankYou() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center pt-24">
      <Section className="text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 text-green-600 mb-8 animate-in zoom-in duration-500">
          <CheckCircle className="h-12 w-12" />
        </div>
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-slate-900">
          Request Received!
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Thank you for contacting Apex Electric. We have received your request and a member of our team will review it shortly.
        </p>
        <p className="text-lg text-slate-700 mb-12">
          We usually respond within 2-4 business hours. If this is an emergency, please call us immediately.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button size="lg" variant="outline">Back to Home</Button>
          </Link>
          <Link href="/services">
            <Button size="lg">Explore Services</Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
