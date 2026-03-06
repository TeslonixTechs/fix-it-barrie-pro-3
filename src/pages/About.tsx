import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import PageLayout from "@/components/PageLayout";
import mechanicAli from "@/assets/mechanic-ali.jpg";

const About = () => (
  <PageLayout>
    <SEOHead
      title="About iFix Auto Services | Honest Auto Repair in Barrie, ON"
      description="Meet Ali and the iFix Auto Services team. 15+ years of honest, expert auto repair in Barrie, Ontario. Specializing in European vehicles. 4.9 stars on Google."
    />

    <section className="bg-dark pt-32 pb-16">
      <div className="container">
        <p className="text-primary font-body font-medium text-sm tracking-wider uppercase mb-2">/ About Us</p>
        <h1 className="font-heading text-4xl md:text-6xl text-dark-foreground">
          About iFix Auto Services —<br />
          <span className="text-primary">Barrie's European Car Specialists</span>
        </h1>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <img src={mechanicAli} alt="Ali owner of iFix Auto Services Barrie" className="w-full object-cover aspect-[4/5]" />
          <div>
            <h2 className="font-heading text-4xl mb-6">Meet Ali</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ali started iFix Auto Services with one goal: give Barrie drivers an honest alternative to overpriced dealerships and unreliable chain shops. With over 15 years of hands-on experience working on European and domestic vehicles, Ali built his reputation the old-fashioned way — by doing good work at fair prices and treating every customer like family.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Born and raised in the automotive world, Ali spent years mastering the complexities of BMW, Mercedes-Benz, Audi, and Volkswagen engines — including diesel. He saw how dealerships charged premium prices for routine work and how many independent shops cut corners. He knew Barrie deserved better.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Today, iFix Auto Services is one of Barrie's highest-rated auto repair shops with a 4.9-star rating across 132 Google reviews. Customers come from across Simcoe County — Innisfil, Alliston, Midhurst, Orillia — because they know Ali won't upsell them on work they don't need.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              "I treat every car like it's my own," Ali says. "If it doesn't need fixing, I'm not going to charge you for it. That's just how we do things here."
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-secondary">
      <div className="container">
        <h2 className="font-heading text-4xl text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { num: "01", title: "Honesty First", desc: "We tell you what's wrong, what it costs, and never push work you don't need." },
            { num: "02", title: "Expert Knowledge", desc: "15+ years specializing in European vehicles. Dealership training, local shop pricing." },
            { num: "03", title: "Fair Pricing", desc: "Transparent quotes before we start. No hidden fees. No surprises on the bill." },
            { num: "04", title: "Community Focus", desc: "We're Barrie locals serving Barrie locals. Your trust is our business." },
          ].map((v) => (
            <div key={v.num} className="relative border border-border p-6 overflow-hidden">
              <span className="section-number top-0 right-2">{v.num}</span>
              <h3 className="font-heading text-xl mb-2 relative z-10">{v.title}</h3>
              <p className="text-sm text-muted-foreground relative z-10">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-4xl mb-6">Our Shop</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Located at 1 Ferndale Dr N #3 in Barrie, our shop is equipped with the latest diagnostic tools and equipment to handle everything from routine oil changes to complex European engine repairs. We keep our shop clean, organized, and efficient — because that's how good work gets done.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We're open Monday through Friday 9:00 AM to 6:00 PM and Saturday 9:00 AM to 4:00 PM. Same-day service is available for many repairs — just give us a call.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { val: "15+", label: "Years Experience" },
                { val: "132", label: "Google Reviews" },
                { val: "4.9★", label: "Rating" },
                { val: "1000+", label: "Cars Serviced" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-heading text-3xl text-primary">{s.val}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <img src={"https://i.ibb.co/cS909CvK/IMG-20260305-WA0028.jpg"} alt="iFix Auto Services shop interior Barrie" className="w-full object-cover aspect-square" />
        </div>
      </div>
    </section>

    <section className="py-16 bg-primary">
      <div className="container text-center">
        <h2 className="font-heading text-4xl text-primary-foreground mb-4">Ready to Experience Honest Auto Repair?</h2>
        <p className="text-primary-foreground/80 mb-8">Book your appointment with Ali today.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="heroOutline" size="lg" asChild>
            <a href="tel:7055033242">Call (705) 503-3242</a>
          </Button>
          <Button variant="hero" size="lg" className="bg-dark-foreground text-dark hover:bg-dark-foreground/90" asChild>
            <Link to="/book-appointment">Book Online</Link>
          </Button>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default About;
