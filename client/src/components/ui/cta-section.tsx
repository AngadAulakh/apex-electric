import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden bg-primary">
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
          Ready to Upgrade Your Electrical System?
        </h2>
        <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Get a free estimate today from Toronto's most trusted electricians. 
          Quality workmanship, upfront pricing, and your satisfaction guaranteed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="font-bold text-primary hover:bg-white text-lg h-14 px-8 shadow-xl">
              Get a Free Quote
            </Button>
          </Link>
          <Link href="/services">
            <Button size="lg" variant="outline" className="font-bold text-white border-white hover:bg-white/10 text-lg h-14 px-8">
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
