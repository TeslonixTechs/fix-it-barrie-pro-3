import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ServicePageTemplateProps {
  title: string;
  metaH1: string;
  intro: string;
  content: string[];
  whyChoose: string;
  faqs: { q: string; a: string }[];
  relatedServices: { label: string; href: string }[];
  reviews?: { name: string; text: string }[];
}

const ServicePageTemplate = ({
  metaH1,
  intro,
  content,
  whyChoose,
  faqs,
  relatedServices,
  reviews,
}: ServicePageTemplateProps) => {
  return (
    <div>
      {/* Hero banner */}
      <section className="bg-dark pt-32 pb-16">
        <div className="container">
          <h1 className="font-heading text-4xl md:text-5xl text-dark-foreground">
            {metaH1}
          </h1>
          <p className="mt-4 text-dark-foreground/70 max-w-2xl font-body">{intro}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container max-w-3xl">
          {content.map((p, i) => (
            <p key={i} className="mb-6 text-muted-foreground leading-relaxed">{p}</p>
          ))}
        </div>
      </section>

      {/* Why choose */}
      <section className="py-16 bg-secondary">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-3xl mb-6">Why Choose iFix Auto Services</h2>
          <p className="text-muted-foreground leading-relaxed">{whyChoose}</p>
        </div>
      </section>

      {/* Reviews */}
      {reviews && reviews.length > 0 && (
        <section className="py-16">
          <div className="container max-w-3xl">
            <h2 className="font-heading text-3xl mb-8">What Our Customers Say</h2>
            <div className="space-y-6">
              {reviews.map((r, i) => (
                <div key={i} className="border border-border p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-primary">★★★★★</span>
                    <span className="font-medium">{r.name}</span>
                  </div>
                  <p className="text-muted-foreground italic">"{r.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-16 bg-secondary">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-3xl mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((f, i) => (
              <div key={i}>
                <h3 className="font-heading text-xl mb-2">{f.q}</h3>
                <p className="text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-3xl mb-6">Related Services</h2>
          <div className="flex flex-wrap gap-3">
            {relatedServices.map((s) => (
              <Button key={s.href} variant="ctaOutline" size="default" asChild>
                <Link to={s.href}>{s.label}</Link>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container text-center">
          <h2 className="font-heading text-3xl text-primary-foreground mb-4">Ready to Book?</h2>
          <p className="text-primary-foreground/80 mb-8">Call Ali at (705) 503-3242 or book online.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="heroOutline" size="lg" asChild>
              <a href="tel:7055033242">Call Now</a>
            </Button>
            <Button variant="hero" size="lg" className="bg-dark-foreground text-dark hover:bg-dark-foreground/90" asChild>
              <Link to="/book-appointment">Book Online</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePageTemplate;
