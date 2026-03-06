import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import PageLayout from "@/components/PageLayout";
import BookingForm from "@/components/BookingForm";

const reviews = [
  { name: "Ahsan Syed", text: "Excellent service, very competent and trustworthy mechanics. There has been no up-selling, and the prices are very fair! They do service all sorts of cars, but I was most happy to see that they service Mercedes and Audi vehicles, including diesels!" },
  { name: "Bajan Disa", text: "Everything was explained clearly, with no pressure, no hidden fees, and no unnecessary upselling. It's refreshing to find an auto service where you genuinely feel they care about helping you, not just taking your money." },
  { name: "Mike Cowles", text: "I've been taking my Audi to Ali for years. Honest, reliable, and always does a great job. Can't recommend iFix enough for anyone with a German car." },
  { name: "Sarah Jensen", text: "Found this place after getting a crazy quote from the Mercedes dealership. iFix did the same work for almost half the price. The quality was top-notch. This is my new go-to shop." },
  { name: "David Chen", text: "My BMW had a check engine light that two other shops couldn't diagnose. Ali figured it out in an afternoon. Super knowledgeable and a pleasure to deal with." },
  { name: "Jessica White", text: "The team at iFix is fantastic. They took the time to explain the repairs my VW needed and why. It's great to have a mechanic you can trust in Barrie." },
];

const brands = [
  { name: "BMW", logoUrl: "https://logo.clearbit.com/bmw.com" },
  { name: "Mercedes-Benz", logoUrl: "https://logo.clearbit.com/mercedes-benz.com" },
  { name: "Audi", logoUrl: "https://logo.clearbit.com/audi.com" },
  { name: "Volkswagen", logoUrl: "https://logo.clearbit.com/vw.com" },
  { name: "Porsche", logoUrl: "https://i.ibb.co/7tvC5m33/169268-removebg-preview.png" }
];

const EuropeanCarRepair = () => (
  <PageLayout>
    <SEOHead
      title="European Car Repair in Barrie, ON | BMW, Mercedes, Audi | iFix Auto"
      description="Barrie's European car repair specialists. Expert service for BMW, Mercedes-Benz, Audi, Volkswagen & Porsche including diesel. Honest pricing. Call (705) 503-3242."
    />

    <section className="bg-dark pt-32 pb-20">
      <div className="container">
        <p className="text-primary font-body font-medium text-sm tracking-wider uppercase mb-2">/ European Specialists</p>
        <h1 className="font-heading text-4xl md:text-6xl text-dark-foreground">
          European Car Repair<br />
          <span className="text-primary">in Barrie Ontario</span>
        </h1>
        <p className="mt-4 text-dark-foreground/70 max-w-2xl">
          Dealership-level expertise at local shop prices for all major European brands, including diesel engines.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-10">
          {brands.map((brand) => (
            <div key={brand.name} className="flex items-center gap-4">
              <img src={brand.logoUrl} alt={`${brand.name} logo`} className="h-10 bg-white/90 p-1.5 rounded-md" />
              <span className="font-heading text-2xl text-dark-foreground/80">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container max-w-3xl">
        <h2 className="font-heading text-3xl mb-6">BMW Repair in Barrie</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          BMWs are precision machines — they need a mechanic who understands their engineering. At iFix Auto Services, Ali and his team have spent over 15 years working on BMW 3 Series, 5 Series, X3, X5, and M models. From oil services and brake jobs to complex engine diagnostics, VANOS repairs, and cooling system overhauls, we handle it all with dealer-level knowledge at a fraction of the cost.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Barrie BMW owners trust us because we're straight with them. We don't push unnecessary work. We explain what's wrong in plain English, give you a fair quote, and get it done right the first time.
        </p>
        <Button variant="ctaOutline" size="default" asChild>
          <Link to="/bmw-repair-barrie">Full BMW Repair Page →</Link>
        </Button>

        <h2 className="font-heading text-3xl mb-6 mt-16">Mercedes-Benz Service in Barrie</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Mercedes-Benz vehicles are built to exacting standards — and they need a shop that meets those standards. Whether you drive a C-Class, E-Class, GLC, GLE, or Sprinter van, iFix has the diagnostic tools and technical expertise to service your Mercedes properly. We handle everything from routine maintenance to complex diesel engine repairs.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Skip the dealer markup. Get the same quality of work at honest prices from a team that genuinely cares about your car.
        </p>
        <Button variant="ctaOutline" size="default" asChild>
          <Link to="/mercedes-repair-barrie">Full Mercedes Repair Page →</Link>
        </Button>

        <h2 className="font-heading text-3xl mb-6 mt-16">Audi Repair in Barrie</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Audis share a lot of engineering with Volkswagen — but they add layers of complexity with Quattro AWD systems, turbocharged engines, and advanced electronics. Ali's deep experience with the VW/Audi platform means your A3, A4, A6, Q5, or Q7 is in expert hands. Timing chain tensioner issues, oil consumption problems, DSG transmission service — we've seen it all and fixed it all.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          If you're looking for an Audi mechanic in Barrie who won't overcharge you, you've found the right shop.
        </p>
        <Button variant="ctaOutline" size="default" asChild>
          <Link to="/audi-repair-barrie">Full Audi Repair Page →</Link>
        </Button>

        <h2 className="font-heading text-3xl mb-6 mt-16">Why Choose a Specialist Over a Dealership</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Dealerships charge premium prices because of brand overhead — not because the work is better. At iFix, Ali has the same training, the same diagnostic tools, and the same quality parts. The difference? We charge fair prices and we don't upsell you on services your car doesn't need.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Our customers save 30-50% compared to dealership pricing on most services — with the same or better quality of work. That's why we have a 4.9-star rating across 132 Google reviews. Barrie drivers know the difference.
        </p>
      </div>
    </section>

    {/* Reviews */}
    <section className="py-16 bg-secondary">
      <div className="container">
        <h2 className="font-heading text-3xl mb-8 text-center">What Barrie Drivers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((r) => (
            <div key={r.name} className="border border-border bg-card p-6 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-primary flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary" />)}</span>
                <span className="font-medium">{r.name}</span>
              </div>
              <p className="text-muted-foreground italic flex-grow">"{r.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Booking */}
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading text-4xl mb-6">Book Your European Car Service in Barrie</h2>
            <p className="text-muted-foreground mb-8">
              Call Ali at <a href="tel:7055033242" className="text-primary font-medium">(705) 503-3242</a> or fill out the form.
            </p>
          </div>
          <BookingForm />
        </div>
      </div>
    </section>
  </PageLayout>
);

export default EuropeanCarRepair;
