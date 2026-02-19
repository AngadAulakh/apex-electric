import { Section } from "@/components/ui/section";
import { ReviewCard } from "@/components/ui/review-card";
import { CTASection } from "@/components/ui/cta-section";
import { REVIEWS } from "@/lib/data";

export default function Reviews() {
  return (
    <>
      <Section className="bg-slate-50 pt-32 pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-slate-900">
            Client Reviews
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Don't just take our word for it. See what your neighbors in Toronto are saying about Apex Electric.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="h-full">
              <ReviewCard review={review} />
            </div>
          ))}
          {/* Duplicate reviews to fill the grid for demo purposes */}
          {REVIEWS.map((review) => (
             <div key={`${review.id}-duplicate`} className="h-full">
              <ReviewCard review={{...review, id: 999}} />
            </div>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
