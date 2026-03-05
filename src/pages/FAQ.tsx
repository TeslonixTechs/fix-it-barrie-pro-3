import SEOHead from "@/components/SEOHead";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What is the most neglected car maintenance?", a: "Oil changes and brake inspections are the most commonly neglected maintenance items. Many drivers push well past their recommended oil change interval, which leads to sludge buildup, increased engine wear, and eventually costly repairs. Regular oil changes with the correct oil specification are the cheapest way to protect your engine. At iFix, we recommend following your manufacturer's service schedule — and we'll remind you when you're due." },
  { q: "What are signs of a good auto mechanic?", a: "A good mechanic explains what's wrong in plain language, shows you the problem when possible, provides a clear quote before starting work, doesn't pressure you into unnecessary repairs, and stands behind their work. At iFix, Ali takes the time to walk you through every diagnosis and repair recommendation. Our 4.9-star rating across 132 Google reviews is proof that Barrie drivers trust our approach." },
  { q: "How often should I get an oil change in Ontario?", a: "For most vehicles using full synthetic oil, every 8,000 to 12,000 km or once a year — whichever comes first. Ontario's cold winters and stop-and-go driving conditions can accelerate oil breakdown, so we often recommend the shorter end of that range. European vehicles like BMW, Mercedes, and Audi have specific oil change intervals — Ali will recommend the right schedule for your car." },
  { q: "Do I need to go to a dealership for European car service?", a: "No. In Canada, you are not required to service your vehicle at a dealership to maintain your warranty. Any qualified independent shop can perform manufacturer-recommended maintenance. At iFix, we use OEM-quality parts, correct oil specifications, and dealer-level diagnostic tools. Our customers save 30-50% compared to dealership pricing." },
  { q: "What is the hardest car to maintain?", a: "European luxury and performance vehicles — particularly BMW, Mercedes, Audi, and Land Rover — tend to have higher maintenance costs due to specialized parts and complex engineering. However, with the right mechanic, these costs can be managed. At iFix, Ali's 15+ years of European car experience means efficient, accurate repairs that save you money versus trial-and-error at a general shop." },
  { q: "What are the 10 most unreliable cars?", a: "Reliability rankings change yearly, but certain models consistently rank lower due to complex electronics and expensive repair needs. Rather than focusing on unreliable cars, we recommend finding a trusted mechanic who knows your specific vehicle. At iFix, we service all makes and models — and our experience with European vehicles means we can keep even the 'unreliable' ones running reliably." },
  { q: "Which car brand is the cheapest to maintain?", a: "Generally, Japanese brands like Toyota, Honda, and Mazda have the lowest maintenance costs due to simpler engineering and widely available parts. However, maintenance costs also depend heavily on your driving habits, mileage, and where you get your car serviced. At iFix, we keep maintenance affordable for all brands — including European vehicles." },
  { q: "How do I get a safety certificate in Ontario?", a: "You need to bring your vehicle to a licensed Motor Vehicle Inspection Station (MVIS) like iFix Auto Services. We perform a comprehensive inspection covering brakes, tires, suspension, steering, exhaust, lights, and other safety components. If everything passes, we issue the certificate on the spot. If repairs are needed, we'll explain exactly what's required and quote you a fair price." },
  { q: "What does a car diagnostic test tell you?", a: "A diagnostic test reads fault codes stored in your vehicle's computer system. These codes identify issues with your engine, transmission, ABS, airbags, emissions, and other systems. At iFix, we use advanced scan tools that provide manufacturer-specific data — not just generic codes. This means more accurate diagnoses and repairs." },
  { q: "How long does a brake service take?", a: "A standard brake pad and rotor replacement typically takes 1-2 hours per axle. More complex work — like caliper replacement, brake line repair, or ABS system diagnosis — may take longer. We'll give you an accurate time estimate before starting work." },
  { q: "What is included in a full engine service?", a: "A full engine service at iFix includes oil and filter change, spark plug replacement (if due), air filter replacement, inspection of belts and hoses, fluid level checks, and a visual inspection of the engine bay. For European vehicles, we also check for common model-specific issues." },
  { q: "How do I know if my car AC needs recharging?", a: "If your A/C blows air that's not cold enough, takes longer than usual to cool the cabin, or doesn't blow cold at all, it likely needs attention. Low refrigerant is common — but usually indicates a leak that should be found and repaired. At iFix, we properly diagnose A/C issues rather than just topping up refrigerant." },
  { q: "How far is iFix Auto Services from Innisfil?", a: "iFix Auto Services is approximately 15 minutes from Innisfil via Highway 400 or Yonge Street. Many Innisfil residents choose iFix for our European car expertise, honest pricing, and 4.9-star reputation." },
  { q: "How far is iFix Auto Services from Alliston?", a: "We're about 25 minutes from Alliston via Highway 89. Alliston drivers make the trip because of our specialization in European vehicles and our no-upselling policy. The drive is worth it for honest, expert service." },
  { q: "Do you service diesel engines?", a: "Yes. Ali has extensive experience with European diesel engines — BMW, Mercedes-Benz, Audi, and Volkswagen. DPF issues, injector problems, turbo repairs, glow plug replacement, and routine diesel maintenance are all services we provide." },
  { q: "What European car brands do you specialize in?", a: "We specialize in BMW, Mercedes-Benz, Audi, Volkswagen, and Porsche. Ali has over 15 years of hands-on experience with these brands, including diesel variants. We use manufacturer-grade diagnostic tools and OEM-quality parts." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <PageLayout>
      <SEOHead
        title="Auto Repair FAQ | iFix Auto Services Barrie, Ontario"
        description="Answers to common car repair questions from Barrie's trusted auto shop. European car specialists. Call Ali: (705) 503-3242"
        jsonLd={faqJsonLd}
      />

      <section className="bg-dark pt-32 pb-16">
        <div className="container">
          <h1 className="font-heading text-4xl md:text-6xl text-dark-foreground">
            Frequently Asked Questions —<br />
            <span className="text-primary">Auto Repair in Barrie</span>
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-3xl">
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="border border-border">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/50 transition-colors"
                >
                  <h2 className="font-heading text-xl pr-4">{f.q}</h2>
                  <ChevronDown className={`w-5 h-5 text-primary shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="container text-center">
          <h2 className="font-heading text-4xl text-primary-foreground mb-4">Still Have Questions?</h2>
          <p className="text-primary-foreground/80 mb-8">Call Ali at (705) 503-3242 — he's happy to help.</p>
          <Button variant="heroOutline" size="lg" asChild>
            <Link to="/book-appointment">Book Appointment</Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default FAQ;
