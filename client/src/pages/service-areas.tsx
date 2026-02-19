import { Section } from "@/components/ui/section";
import { CTASection } from "@/components/ui/cta-section";
import { SERVICE_AREAS } from "@/lib/data";
import { MapPin } from "lucide-react";

export default function ServiceAreas() {
  return (
    <>
      <Section className="bg-slate-50 pt-32 pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-slate-900">
            Service Areas
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Proudly serving Toronto and the entire Greater Toronto Area with premium electrical services.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-8">Cities We Serve</h2>
            <div className="grid grid-cols-2 gap-4">
              {SERVICE_AREAS.map((area) => (
                <div key={area} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-slate-100 transition-colors hover:border-primary/50 group">
                  <div className="bg-primary/10 p-2 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span className="font-semibold text-lg text-slate-700">{area}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="font-bold text-blue-900 mb-2">Outside the GTA?</h3>
              <p className="text-blue-800">
                We occasionally take on larger commercial projects outside our standard service area. 
                Please contact us to discuss your specific needs.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
             <div className="bg-slate-100 rounded-2xl h-[500px] w-full flex items-center justify-center text-slate-400 border-2 border-slate-200 border-dashed relative overflow-hidden">
               <div className="absolute inset-0 opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Map_of_Toronto_neighbourhoods.svg/1200px-Map_of_Toronto_neighbourhoods.svg.png')] bg-cover bg-center" />
               <div className="text-center z-10">
                 <MapPin className="h-16 w-16 mx-auto mb-4 text-slate-300" />
                 <p className="font-semibold text-lg">Interactive Service Map</p>
                 <p className="text-sm">(Google Maps Embed Would Go Here)</p>
               </div>
             </div>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
