import { useRoute, Link } from "wouter";
import { ArrowLeft, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { CTASection } from "@/components/ui/cta-section";
import { SERVICES, COMPANY_INFO } from "@/lib/data";
import NotFound from "./not-found";

export default function ServiceDetail() {
  const [match, params] = useRoute("/services/:slug");
  
  if (!match) return <NotFound />;

  const service = SERVICES.find(s => s.slug === params.slug);
  
  if (!service) return <NotFound />;

  const Icon = service.icon;

  return (
    <>
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80" />
        </div>
        <div className="container relative z-10 px-4 md:px-6 text-center">
          <Link href="/services">
            <a className="inline-flex items-center text-slate-300 hover:text-primary mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
            </a>
          </Link>
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/20 rounded-full backdrop-blur-sm border border-primary/30">
              <Icon className="h-10 w-10 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            {service.description}
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-heading font-bold">Comprehensive {service.title}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At {COMPANY_INFO.name}, we provide top-tier {service.title.toLowerCase()} services tailored to your specific needs. 
              Our licensed electricians ensure every installation is code-compliant, safe, and built to last.
              Whether you're looking to upgrade your system or need an urgent repair, we have the expertise to get the job done right.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border-l-4 border-primary mt-8">
              <h3 className="text-xl font-bold mb-2">Why Trust Us?</h3>
              <p className="text-muted-foreground">
                We don't just fix problems; we provide solutions. Our team is fully insured, ESA licensed, and committed to transparency. 
                We'll walk you through the entire process, from the initial quote to the final safety inspection.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-900 text-white p-8 rounded-xl shadow-xl sticky top-24">
              <h3 className="text-2xl font-bold mb-4">Need this service?</h3>
              <p className="text-slate-300 mb-6">
                Get a fast, accurate quote for your {service.title.toLowerCase()} project.
              </p>
              <div className="space-y-4">
                <a href={`tel:${COMPANY_INFO.phoneRaw}`}>
                  <Button size="lg" className="w-full text-lg font-bold h-12">
                    <Phone className="mr-2 h-5 w-5" />
                    {COMPANY_INFO.phone}
                  </Button>
                </a>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="w-full text-lg font-bold h-12 bg-white/10 border-white/20 hover:bg-white/20 text-white">
                    Request Quote Online
                  </Button>
                </Link>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-700 text-sm text-slate-400">
                <p>✓ Available {service.id === 'emergency' ? '24/7' : 'Mon-Sat'}</p>
                <p className="mt-2">✓ Licensed & Insured</p>
                <p className="mt-2">✓ 3-Year Warranty</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      <CTASection />
    </>
  );
}
