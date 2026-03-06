import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Star, Clock, Shield, Wrench, Gauge, Disc3, Settings, Snowflake, FileCheck, CarFront, Cog } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import PageLayout from "@/components/PageLayout";
import BookingForm from "@/components/BookingForm";
import heroBg from "@/assets/hero-bg.jpg";
import mechanicAli from "@/assets/mechanic-ali.jpg";
import shopInterior from "@/assets/shop-interior.jpg";
import { SiBmw, SiMercedesBenz, SiAudi, SiVolkswagen, SiPorsche } from "react-icons/si";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "iFix Auto Services",
  image: "",
  "@id": "https://ifixautoservices.ca",
  url: "https://ifixautoservices.ca",
  telephone: "(705) 503-3242",
  email: "ifixautoservices@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1 Ferndale Dr N #3",
    addressLocality: "Barrie",
    addressRegion: "ON",
    postalCode: "L4N 9V3",
    addressCountry: "CA",
  },
  geo: { "@type": "GeoCoordinates", latitude: 44.3893, longitude: -79.6901 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "09:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "16:00" },
  ],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "132" },
  priceRange: "$$",
};

const services = [
  { num: "01", icon: Gauge, name: "Diagnostic Test", desc: "Advanced computer diagnostics to find any issue fast", href: "/services" },
  { num: "02", icon: Settings, name: "Oil Change", desc: "Full synthetic and conventional, done right every time", href: "/oil-change-barrie" },
  { num: "03", icon: Cog, name: "Engine Servicing", desc: "From tune-ups to full engine repairs", href: "/services" },
  { num: "04", icon: Disc3, name: "Brake Service", desc: "Pads, rotors, calipers — your safety comes first", href: "/brake-repair-barrie" },
  { num: "05", icon: CarFront, name: "Tire Services", desc: "Installation, rotation, balancing and seasonal swaps", href: "/services" },
  { num: "06", icon: Wrench, name: "Suspension & Steering", desc: "Shocks, struts, control arms and more", href: "/services" },
  { num: "07", icon: Settings, name: "Transmission Service", desc: "Fluid changes to full transmission repair", href: "/services" },
  { num: "08", icon: Snowflake, name: "A/C Service", desc: "Recharge, diagnosis and full AC repair", href: "/car-ac-repair-barrie" },
  { num: "09", icon: FileCheck, name: "Safety Certificate", desc: "Ontario safety inspections, fast and thorough", href: "/safety-certificate-barrie" },
];

const reviews = [
  { name: "Bajan Disa", time: "1 month ago", text: "Everything was explained clearly, with no pressure, no hidden fees, and no unnecessary upselling. It's refreshing to find an auto service where you genuinely feel they care about helping you, not just taking your money. The service was also incredibly fast without sacrificing quality." },
  { name: "Veronika Perisa", time: "2 weeks ago", text: "Ali and his family has taken great care of mine and my family's cars with the absolute best prices anywhere in Barrie, especially with oil changes. They're always able to find time to fit us in and gets the work done quickly and reliably." },
  { name: "Ahsan Syed", time: "3 months ago", text: "Excellent service, very competent and trustworthy mechanics. There has been no up-selling, and the prices are very fair! They do service all sorts of cars, but I was most happy to see that they service Mercedes and Audi vehicles, including diesels!" },
  { name: "Vida Woods", time: "5 months ago", text: "Coming in at just under his estimate was a much appreciated relief! I will not hesitate to use their services again, and highly recommend them." },
  { name: "Larissa Abbott", time: "3 months ago", text: "He is such an honest, friendly kind man, who doesn't scam you and does everything to work you in. Prices are great, and great work and experience from him and staff. I would recommend him to anyone any day of the week." },
];

const carBrands = ["BMW", "Mercedes-Benz", "Audi", "Volkswagen", "Porsche", "Land Rover", "Toyota", "Honda", "Hyundai", "Ford", "Chevrolet", "Mazda", "Subaru", "Nissan"];

const Index = () => {
  return (
    <PageLayout>
      <SEOHead
        title="iFix Auto Services | European Car Repair in Barrie, Ontario"
        description="Barrie's top-rated European car repair shop. Specializing in BMW, Mercedes, Audi & Volkswagen. Honest service, fair prices, same-day availability. 4.9 stars. Call Ali: (705) 503-3242"
        jsonLd={jsonLd}
      />

      {/* SECTION 1 — HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="European car repair shop in Barrie Ontario" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark/70" />
        </div>
        <div className="container relative z-10 pt-24 pb-16">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 px-4 py-1.5 mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs font-body font-medium text-primary-foreground tracking-wider uppercase">Open Now — Barrie, Ontario</span>
          </div>

          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-dark-foreground leading-[0.95]">
            European Car Repair<br />
            <span className="text-primary">in Barrie, Ontario</span>
          </h1>

          <p className="mt-6 text-dark-foreground/80 max-w-2xl text-lg font-body leading-relaxed">
            Barrie's most trusted auto repair shop. Honest work, fair prices, and no unnecessary upselling — ever. Specializing in BMW, Mercedes, Audi, and Volkswagen.
          </p>

          <div className="mt-8">
            <p className="text-xs font-body font-medium text-primary tracking-[0.2em] uppercase mb-3">Specialists In:</p>
            <div className="flex items-center gap-6 text-dark-foreground/80 font-heading text-xl tracking-wider">
              <span className="flex items-center gap-2"><SiBmw /> BMW</span>
              <span className="flex items-center gap-2"><SiMercedesBenz /> Mercedes-Benz</span>
              <span className="flex items-center gap-2"><SiAudi /> Audi</span>
              <span className="flex items-center gap-2"><SiVolkswagen /> VW</span>
              <span className="flex items-center gap-2"><SiPorsche /> Porsche</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Button variant="hero" size="xl" asChild>
              <Link to="/book-appointment">Book an Appointment</Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="tel:7055033242">
                <Phone className="w-5 h-5" />
                Call Ali: (705) 503-3242
              </a>
            </Button>
          </div>

          {/* Stat cards */}
          <div className="flex flex-col sm:flex-row gap-4 mt-16">
            {[
              { top: "4.9★", bottom: "132 Google Reviews" },
              { top: "15+", bottom: "Years Experience" },
              { top: "Same Day", bottom: "Service Available" },
            ].map((stat) => (
              <div key={stat.top} className="bg-dark/80 border-t-2 border-primary px-6 py-4 backdrop-blur-sm">
                <div className="text-2xl font-heading text-dark-foreground">{stat.top}</div>
                <div className="text-sm text-dark-foreground/60 font-body">{stat.bottom}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand scroll strip */}
      <div className="bg-dark py-4 overflow-hidden">
        <div className="flex animate-scroll-left whitespace-nowrap">
          {[...carBrands, ...carBrands].map((b, i) => (
            <span key={i} className="mx-8 text-dark-foreground/30 font-heading text-lg tracking-wider">{b}</span>
          ))}
        </div>
      </div>

      {/* SECTION 2 — TRUST BAR */}
      <section className="bg-primary py-4">
        <div className="container flex flex-wrap justify-center gap-x-8 gap-y-2 text-primary-foreground text-sm font-body font-medium">
          {["4.9 Stars — 132 Google Reviews", "No Upselling — Ever", "Same-Day Service Available", "All Work Guaranteed"].map((t) => (
            <span key={t} className="flex items-center gap-2">
              <Shield className="w-4 h-4" /> {t}
            </span>
          ))}
        </div>
      </section>

      {/* SECTION 3 — ABOUT ALI */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img src={mechanicAli} alt="Ali - owner and mechanic at iFix Auto Services Barrie" className="w-full object-cover aspect-[4/5]" />
              <div className="absolute -bottom-4 -right-4 bg-primary w-24 h-24 flex flex-col items-center justify-center text-primary-foreground">
                <span className="font-heading text-2xl">15+</span>
                <span className="text-[0.6rem] uppercase tracking-wider">Years</span>
              </div>
            </div>
            <div>
              <p className="text-primary font-body font-medium text-sm tracking-wider uppercase mb-2">/ Who We Are</p>
              <h2 className="font-heading text-4xl md:text-5xl mb-6">Meet Ali — Barrie's Most Trusted Mechanic</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                For over 15 years, Ali and his team at iFix Auto Services have been the go-to shop for Barrie drivers who want honest, expert repairs without the dealership prices. Specializing in European and German vehicles — BMW, Mercedes, Audi, and Volkswagen including diesel engines — Ali brings the knowledge of a dealership technician with the pricing and personal service of a local shop. No upselling. No surprises. Just reliable work done right the first time.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { val: "15", label: "Yrs Experience" },
                  { val: "132", label: "Happy Clients" },
                  { val: "4.9★", label: "Google Rating" },
                  { val: "Same-Day", label: "Available" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-heading text-3xl text-primary">{s.val}</div>
                    <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
              <Link to="/about" className="text-primary font-medium text-sm hover:underline">Learn More About Us →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — SERVICES */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-primary font-body font-medium text-sm tracking-wider uppercase mb-2">/ What We Offer</p>
            <h2 className="font-heading text-4xl md:text-5xl">Complete Auto Services in Barrie, ON</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.num} className="relative border border-border p-6 group hover:border-primary/40 transition-colors overflow-hidden">
                  <span className="section-number top-2 right-4">{s.num}</span>
                  <Icon className="w-8 h-8 text-primary mb-4 relative z-10" />
                  <h3 className="font-heading text-xl mb-2 relative z-10">{s.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 relative z-10">{s.desc}</p>
                  <Link to={s.href} className="text-primary text-sm font-medium hover:underline relative z-10">Learn More →</Link>
                </div>
              );
            })}
          </div>

          {/* European specialist card */}
          <div className="mt-12 bg-dark p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-primary">
            <p className="text-dark-foreground font-body text-lg">
              <span className="font-medium">European & German Car Specialists</span> — BMW, Mercedes-Benz, Audi, Volkswagen & Porsche, including diesel engines. Trusted by Barrie drivers for over 15 years.
            </p>
            <Button variant="cta" size="lg" asChild className="shrink-0">
              <Link to="/european-car-repair-barrie">Book European Car Service →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 5 — CAR BRANDS */}
      <section className="py-16 bg-secondary">
        <div className="container text-center">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground mb-8">We Service All Makes & Models</p>
          <div className="overflow-hidden">
            <div className="flex animate-scroll-left whitespace-nowrap">
              {[...carBrands, ...carBrands].map((b, i) => (
                <span key={i} className="mx-10 font-heading text-2xl text-muted-foreground/40 hover:text-foreground transition-colors cursor-default">{b}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — WHY IFIX */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-body font-medium text-sm tracking-wider uppercase mb-2">/ Why Choose Us</p>
              <h2 className="font-heading text-4xl md:text-5xl mb-8">Honest Work. Fair Prices. No Surprises.</h2>
              <div className="space-y-8">
                {[
                  { num: "01", title: "No Upselling, Ever", desc: "We only fix what your vehicle actually needs. No pressure, no surprise charges." },
                  { num: "02", title: "European Car Experts", desc: "Specialized in BMW, Mercedes, Audi and VW including diesel. Dealership knowledge, local shop pricing." },
                  { num: "03", title: "Same-Day Service", desc: "We work hard to fit you in fast. Many jobs completed the same day you call." },
                  { num: "04", title: "Transparent Pricing", desc: "You'll know the cost before we start. No hidden fees, ever." },
                ].map((p) => (
                  <div key={p.num} className="flex gap-4">
                    <span className="font-heading text-4xl text-primary/20">{p.num}</span>
                    <div>
                      <h3 className="font-heading text-xl mb-1">{p.title}</h3>
                      <p className="text-sm text-muted-foreground">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <img src={shopInterior} alt="iFix Auto Services shop interior in Barrie Ontario" className="w-full object-cover aspect-square" />
          </div>
        </div>
      </section>

      {/* SECTION 7 — HOW IT WORKS */}
      <section className="py-20 bg-primary">
        <div className="container text-center">
          <h2 className="font-heading text-4xl md:text-5xl text-primary-foreground mb-12">Getting Your Car Fixed is Simple</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Call or Book Online", desc: "Tell us your issue or book through the form" },
              { num: "02", title: "Drop Off Your Car", desc: "Come to 1 Ferndale Dr N #3, Barrie — we diagnose and get to work" },
              { num: "03", title: "Drive Away Fixed", desc: "Fast turnaround, quality work, fair price. All work guaranteed." },
            ].map((s) => (
              <div key={s.num}>
                <span className="font-heading text-7xl text-primary-foreground/20">{s.num}</span>
                <h3 className="font-heading text-2xl text-primary-foreground mt-2">{s.title}</h3>
                <p className="text-primary-foreground/70 mt-2 font-body">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — REVIEWS */}
      <section id="reviews" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-primary font-body font-medium text-sm tracking-wider uppercase mb-2">/ What Barrie Drivers Say</p>
            <h2 className="font-heading text-4xl md:text-5xl">4.9 Stars Across 132 Google Reviews</h2>
            <p className="text-muted-foreground mt-2">Real reviews from real Barrie customers</p>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4 snap-x">
            {reviews.map((r) => (
              <div key={r.name} className="min-w-[300px] md:min-w-[360px] border border-border p-6 snap-start shrink-0">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-medium">{r.name}</span>
                </div>
                <div className="flex gap-0.5 text-primary mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary" />)}
                </div>
                <p className="text-sm text-muted-foreground italic leading-relaxed">"{r.text}"</p>
                <p className="text-xs text-muted-foreground/60 mt-3">{r.time}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="ctaOutline" size="lg" asChild>
              <a href="https://www.google.com/maps/place/iFix+Auto+Services" target="_blank" rel="noopener noreferrer">
                See All 132 Reviews on Google →
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 9 — BOOKING FORM */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-primary font-body font-medium text-sm tracking-wider uppercase mb-2">/ Book Your Visit</p>
              <h2 className="font-heading text-4xl md:text-5xl mb-6">Book an Appointment</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Call or text Ali directly at <a href="tel:7055033242" className="text-primary font-medium">(705) 503-3242</a>, or fill out the form and we'll confirm within a few hours.
              </p>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Hours</p>
                    <p>Mon – Fri: 9:00 AM – 6:00 PM</p>
                    <p>Saturday: 9:00 AM – 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            <BookingForm />
          </div>
        </div>
      </section>

      {/* SECTION 10 — LOCAL SEO TEXT */}
      <section className="py-12">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-2xl mb-4">Serving Barrie and Simcoe County</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            iFix Auto Services is Barrie's top-rated auto repair shop, proudly serving drivers across Barrie, Innisfil, Alliston, Midhurst, Orillia and all of Simcoe County. Whether you need an oil change in Barrie, European car repair, a safety certificate, brake service, or a full engine diagnostic — Ali and his team are here to help. We specialize in BMW repair in Barrie, Mercedes repair, Audi service, and Volkswagen maintenance, with the expertise to handle all European and German vehicles including diesels. Trusted by over 132 satisfied customers with a 4.9-star Google rating, iFix Auto Services is the honest, reliable choice for auto repair in Barrie, Ontario.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
