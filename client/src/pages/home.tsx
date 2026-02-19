import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, Award, Star, Zap, MapPin, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { ServiceCard } from "@/components/ui/service-card";
import { ReviewCard } from "@/components/ui/review-card";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { CTASection } from "@/components/ui/cta-section";
import { SERVICES, REVIEWS, COMPANY_INFO, SERVICE_AREAS } from "@/lib/data";

export default function Home() {
  const featuredServices = SERVICES.slice(0, 4);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/hero-bg.jpg" 
            alt="Electrician working on panel" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30" />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl space-y-6"
          >
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="text-white border-white/30 bg-white/10 backdrop-blur-sm px-3 py-1 text-sm font-medium">
                <ShieldCheck className="w-4 h-4 mr-2 text-primary" /> Licensed & Insured
              </Badge>
              <Badge variant="outline" className="text-white border-white/30 bg-white/10 backdrop-blur-sm px-3 py-1 text-sm font-medium">
                <Award className="w-4 h-4 mr-2 text-primary" /> ESA Certified
              </Badge>
              <Badge variant="outline" className="text-white border-white/30 bg-white/10 backdrop-blur-sm px-3 py-1 text-sm font-medium">
                <Star className="w-4 h-4 mr-2 text-yellow-400 fill-yellow-400" /> 5-Star Rated
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-white leading-tight tracking-tight">
              Powering Toronto with <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Precision & Trust</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
              Toronto's premier electrical contractors. From panel upgrades to smart home installations, we deliver safety, quality, and reliability in every connection.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact">
                <Button size="lg" className="text-lg h-14 px-8 font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href={`tel:${COMPANY_INFO.phoneRaw}`}>
                <Button size="lg" variant="outline" className="text-lg h-14 px-8 font-bold text-white border-white/30 hover:bg-white/10 hover:text-white backdrop-blur-sm">
                  {COMPANY_INFO.phone}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Services Grid */}
      <Section className="bg-slate-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold mb-4 text-slate-900">Expert Electrical Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive electrical solutions for residential and commercial properties across the GTA.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/services">
            <Button variant="outline" size="lg">View All Services</Button>
          </Link>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section dark className="bg-slate-900 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Why Choose <span className="text-primary">Apex Electric?</span>
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: "Licensed & Insured",
                  desc: "Fully ESA licensed (#7000000) and insured for your peace of mind.",
                  icon: ShieldCheck
                },
                {
                  title: "Upfront Pricing",
                  desc: "No hidden fees. We provide detailed quotes before starting any work.",
                  icon: Zap
                },
                {
                  title: "Workmanship Warranty",
                  desc: "We stand behind our quality with a comprehensive 3-year warranty.",
                  icon: Award
                },
                {
                  title: "Punctual & Professional",
                  desc: "We respect your time and property. On-time arrival and clean workspaces.",
                  icon: Clock
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="bg-primary/20 p-3 rounded-lg h-fit">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
            <img 
              src="/assets/service-commercial.jpg" 
              alt="Professional Electrician" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center text-xs font-bold">
                      {["SJ", "MC", "DR", "AL"][i-1]}
                    </div>
                  ))}
                </div>
                <div className="text-sm font-medium">
                  <span className="text-yellow-400 font-bold">4.9/5</span> from 150+ reviews
                </div>
              </div>
              <p className="text-white italic">"The most professional trade service I've ever hired. Apex is in a league of their own."</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-bold mb-4">Our Simple 3-Step Process</h2>
          <p className="text-muted-foreground">Easy, transparent, and stress-free.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 -z-10" />
          
          {[
            {
              step: "01",
              title: "Request a Quote",
              desc: "Fill out our form or give us a call. We'll discuss your needs and provide a preliminary estimate."
            },
            {
              step: "02",
              title: "On-Site Assessment",
              desc: "For complex jobs, we'll visit your property to provide a detailed, guaranteed price."
            },
            {
              step: "03",
              title: "Job Completion",
              desc: "Our licensed electricians complete the work safely, clean up, and ensure you're 100% satisfied."
            }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center bg-background p-6">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center text-3xl font-bold text-primary shadow-lg mb-6 z-10">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Pricing Preview */}
      <Section className="bg-slate-50">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-2">Transparent Pricing</h2>
            <p className="text-muted-foreground">Know what to expect before we start.</p>
          </div>
          <Link href="/pricing">
            <Button variant="outline">View Full Pricing Guide <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Service Call", price: "$150", desc: "Includes first hour of troubleshooting or minor repairs.", features: ["Licensed Electrician", "Diagnostic", "Minor fixes included"] },
            { title: "EV Charger Install", price: "$899+", desc: "Standard installation near panel. ESA permit included.", features: ["ESA Permit", "Load Calculation", "Wall Connector Install"] },
            { title: "Panel Upgrade", price: "$2,500+", desc: "Upgrade to 200A service. Includes disconnect/reconnect.", features: ["Hydro Coordination", "New Panel", "Whole Home Surge"] }
          ].map((item, i) => (
            <Card key={i} className="relative overflow-hidden hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold text-slate-500 mb-2">{item.title}</h3>
                <div className="text-4xl font-bold text-slate-900 mb-4">{item.price}</div>
                <p className="text-muted-foreground mb-6 text-sm">{item.desc}</p>
                <ul className="space-y-2 mb-6">
                  {item.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-green-500" /> {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Reviews */}
      <Section>
        <h2 className="text-3xl font-heading font-bold mb-12 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </Section>

      {/* FAQ Preview */}
      <Section className="bg-slate-50">
         <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <FAQAccordion />
          <div className="mt-8 text-center">
            <Link href="/faq">
              <Button variant="link">View All FAQs</Button>
            </Link>
          </div>
         </div>
      </Section>

      {/* Service Areas */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-6">Serving the Greater Toronto Area</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Our team of licensed electricians is ready to serve you across the GTA. We're just a phone call away.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {SERVICE_AREAS.slice(0, 8).map((area) => (
                <div key={area} className="flex items-center gap-2 text-slate-700 font-medium">
                  <MapPin className="h-5 w-5 text-primary" />
                  {area}
                </div>
              ))}
            </div>
            <Link href="/service-areas">
              <Button className="mt-8" variant="outline">View Full Service Map</Button>
            </Link>
          </div>
          <div className="bg-slate-100 rounded-2xl h-[400px] flex items-center justify-center text-slate-400">
            {/* Map Placeholder - In a real app, embed Google Maps iframe here */}
            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Interactive Map Embed</p>
            </div>
          </div>
        </div>
      </Section>

      <CTASection />
    </div>
  );
}
