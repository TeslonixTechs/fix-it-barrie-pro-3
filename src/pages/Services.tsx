import { Link } from "react-router-dom";
import { Gauge, Settings, Cog, Disc3, CarFront, Wrench, Snowflake, FileCheck } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";

const allServices = [
  { num: "01", icon: Gauge, name: "Diagnostic Test", href: "/services", desc: "Our advanced computer diagnostics pinpoint exactly what's wrong with your vehicle — quickly and accurately. We use dealer-level scan tools for all makes, including European vehicles. No guesswork, no unnecessary parts replaced. We find the problem, explain it clearly, and fix it right." },
  { num: "02", icon: Settings, name: "Oil Change in Barrie", href: "/oil-change-barrie", desc: "Regular oil changes are the single most important thing you can do for your engine. At iFix, we use premium full synthetic and conventional oils matched to your vehicle's specifications. Quick turnaround, fair prices, and we always check your filters, fluid levels, and tire pressure while we're at it." },
  { num: "03", icon: Cog, name: "Engine Servicing in Barrie", href: "/services", desc: "From basic tune-ups to complex engine repairs, Ali and the team have the experience and equipment to handle it all. Spark plugs, timing belts, head gaskets, valve cover gaskets — we do it right the first time. European engine specialists with 15+ years of experience." },
  { num: "04", icon: Disc3, name: "Brake Repair in Barrie", href: "/brake-repair-barrie", desc: "Your brakes are your most important safety system. We inspect, service, and replace brake pads, rotors, calipers, brake lines, and brake fluid. If your brakes are squealing, grinding, or your pedal feels soft — bring it in. We'll get you stopping safely again." },
  { num: "05", icon: CarFront, name: "Tire Services in Barrie", href: "/services", desc: "Installation, rotation, balancing, and seasonal tire swaps. We work with all tire brands and sizes. Whether you need new winter tires mounted or your all-seasons balanced, we'll get it done quickly and properly." },
  { num: "06", icon: Wrench, name: "Suspension & Steering in Barrie", href: "/services", desc: "Shocks, struts, control arms, ball joints, tie rods, power steering — we handle all suspension and steering repairs. If your car is pulling, bouncing, or making clunking noises over bumps, your suspension likely needs attention. We'll diagnose it accurately and fix it right." },
  { num: "07", icon: Settings, name: "Transmission Service in Barrie", href: "/services", desc: "From transmission fluid changes to full transmission repairs, we have the expertise. Rough shifting, slipping gears, or transmission warning lights — bring it in for a proper diagnosis before a small problem becomes a big one." },
  { num: "08", icon: Snowflake, name: "Car A/C Repair in Barrie", href: "/car-ac-repair-barrie", desc: "A/C not blowing cold? We diagnose and repair all air conditioning systems including recharges, compressor replacement, evaporator and condenser repairs. Don't suffer through another Ontario summer without working A/C." },
  { num: "09", icon: FileCheck, name: "Safety Certificate in Barrie", href: "/safety-certificate-barrie", desc: "Need an Ontario safety standards certificate? We're a licensed inspection station. Our thorough inspections cover everything required by the Ministry of Transportation. Fast turnaround, fair pricing, and we'll explain any issues clearly." },
];

const Services = () => (
  <PageLayout>
    <SEOHead
      title="Auto Repair Services in Barrie, ON | iFix Auto Services"
      description="Full-service auto repair in Barrie. Oil changes, brakes, tires, engine repair, safety certificates, European car specialists. Call (705) 503-3242."
    />

    <section className="bg-dark pt-32 pb-16">
      <div className="container">
        <p className="text-primary font-body font-medium text-sm tracking-wider uppercase mb-2">/ Our Services</p>
        <h1 className="font-heading text-4xl md:text-6xl text-dark-foreground">
          Auto Repair Services<br />
          <span className="text-primary">in Barrie, Ontario</span>
        </h1>
        <p className="mt-4 text-dark-foreground/70 max-w-2xl">
          From routine oil changes to complex European engine work, iFix Auto Services has you covered. Every job done right, priced fair, guaranteed.
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <div className="space-y-16">
          {allServices.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.num} className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-start">
                <div className="flex items-center gap-4">
                  <span className="font-heading text-5xl text-primary/20">{s.num}</span>
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="font-heading text-3xl mb-3">{s.name}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                  <Link to={s.href} className="text-primary text-sm font-medium hover:underline">Learn More →</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    <section className="py-16 bg-dark border-l-4 border-primary">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="font-heading text-3xl text-dark-foreground mb-2">European & German Car Specialists</h2>
          <p className="text-dark-foreground/70">BMW, Mercedes-Benz, Audi, Volkswagen & Porsche — including diesel engines.</p>
        </div>
        <Button variant="cta" size="lg" asChild className="shrink-0">
          <Link to="/european-car-repair-barrie">Learn More →</Link>
        </Button>
      </div>
    </section>

    <section className="py-16 bg-primary">
      <div className="container text-center">
        <h2 className="font-heading text-4xl text-primary-foreground mb-4">Need a Repair? Let's Talk.</h2>
        <p className="text-primary-foreground/80 mb-8">Call Ali at (705) 503-3242 or book online.</p>
        <Button variant="heroOutline" size="lg" asChild>
          <Link to="/book-appointment">Book Appointment</Link>
        </Button>
      </div>
    </section>
  </PageLayout>
);

export default Services;
