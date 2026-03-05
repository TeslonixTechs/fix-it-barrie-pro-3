import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageLayout from "@/components/PageLayout";
import BookingForm from "@/components/BookingForm";
import { Button } from "@/components/ui/button";

interface LocationPageProps {
  city: string;
  distance: string;
  metaTitle: string;
  metaDesc: string;
  content: string[];
}

const LocationPage = ({ city, distance, metaTitle, metaDesc, content }: LocationPageProps) => (
  <PageLayout>
    <SEOHead title={metaTitle} description={metaDesc} />

    <section className="bg-dark pt-32 pb-16">
      <div className="container">
        <h1 className="font-heading text-4xl md:text-6xl text-dark-foreground">
          Auto Repair for {city} Residents<br />
          <span className="text-primary">iFix Auto Services in Barrie</span>
        </h1>
        <p className="mt-4 text-dark-foreground/70">Just {distance} from {city}. Same-day service available.</p>
      </div>
    </section>

    <section className="py-20">
      <div className="container max-w-3xl">
        {content.map((p, i) => (
          <p key={i} className="text-muted-foreground leading-relaxed mb-6">{p}</p>
        ))}
        <h2 className="font-heading text-3xl mb-4 mt-12">Services Available for {city} Drivers</h2>
        <div className="flex flex-wrap gap-3 mb-12">
          {[
            { label: "Oil Change", href: "/oil-change-barrie" },
            { label: "Brake Repair", href: "/brake-repair-barrie" },
            { label: "European Car Repair", href: "/european-car-repair-barrie" },
            { label: "Safety Certificate", href: "/safety-certificate-barrie" },
            { label: "A/C Repair", href: "/car-ac-repair-barrie" },
            { label: "All Services", href: "/services" },
          ].map((s) => (
            <Button key={s.href} variant="ctaOutline" size="sm" asChild>
              <Link to={s.href}>{s.label}</Link>
            </Button>
          ))}
        </div>
      </div>
    </section>

    {/* Google Maps */}
    <section className="py-0">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.5!2d-79.6901!3d44.3893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s1+Ferndale+Dr+N+%233+Barrie+ON!5e0!3m2!1sen!2sca!4v1"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`iFix Auto Services location - serving ${city}`}
      />
    </section>

    <section className="py-20 bg-secondary">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading text-4xl mb-6">Book Your Appointment</h2>
            <p className="text-muted-foreground mb-4">Call Ali at <a href="tel:7055033242" className="text-primary font-medium">(705) 503-3242</a></p>
            <p className="text-muted-foreground">1 Ferndale Dr N #3, Barrie, ON L4N 9V3</p>
          </div>
          <BookingForm />
        </div>
      </div>
    </section>
  </PageLayout>
);

export const AutoRepairInnisfil = () => (
  <LocationPage
    city="Innisfil"
    distance="15 minutes"
    metaTitle="Auto Repair Near Innisfil | iFix Auto Services — Barrie, ON"
    metaDesc="Innisfil's closest trusted auto repair shop. iFix Auto Services in Barrie — just 15 minutes away. European car specialists. Call (705) 503-3242."
    content={[
      "Live in Innisfil and need a trustworthy mechanic? iFix Auto Services in Barrie is just a 15-minute drive from Innisfil along Highway 400 or Yonge Street. We've been serving Innisfil drivers for over 15 years with honest, expert auto repair at fair prices.",
      "Whether you drive a European vehicle like BMW, Mercedes, or Audi, or a domestic or Japanese make, Ali and his team provide the same high-quality service. From oil changes and brake repairs to complex engine diagnostics and safety certificates — we handle it all.",
      "Many Innisfil residents choose iFix over local options because of our specialization in European vehicles, our no-upselling policy, and our 4.9-star Google rating. The short drive to Barrie is worth it for honest service and fair prices.",
      "Same-day service is available for many repairs. Call Ali at (705) 503-3242 to book your appointment or drop by our shop at 1 Ferndale Dr N #3 in Barrie."
    ]}
  />
);

export const AutoRepairAlliston = () => (
  <LocationPage
    city="Alliston"
    distance="25 minutes"
    metaTitle="Auto Repair Near Alliston | iFix Auto Services — Barrie, ON"
    metaDesc="Alliston's trusted auto repair alternative. iFix Auto Services in Barrie — just 25 min away. European car specialists. Call (705) 503-3242."
    content={[
      "Alliston drivers looking for honest, expert auto repair trust iFix Auto Services in Barrie — just 25 minutes east on Highway 89. Ali and his team have been serving customers from Alliston and across Simcoe County for over 15 years.",
      "We specialize in European vehicles — BMW, Mercedes, Audi, and Volkswagen — but service all makes and models. Our reputation is built on honest diagnostics, fair pricing, and quality work. No upselling, no hidden fees, no surprises.",
      "Whether you need an oil change, brake service, safety certificate, engine repair, or A/C service, the drive from Alliston to iFix in Barrie is worth it for the quality of work and pricing you'll receive.",
      "With a 4.9-star Google rating across 132 reviews, Alliston drivers know they're in good hands at iFix. Call Ali at (705) 503-3242 to schedule your visit."
    ]}
  />
);

export const AutoRepairMidhurst = () => (
  <LocationPage
    city="Midhurst"
    distance="10 minutes"
    metaTitle="Auto Repair Near Midhurst | iFix Auto Services — Barrie, ON"
    metaDesc="Midhurst's closest trusted auto repair shop. iFix Auto Services in Barrie — just 10 minutes away. European car specialists. Call (705) 503-3242."
    content={[
      "Midhurst residents — your trusted auto repair shop is just 10 minutes away. iFix Auto Services on Ferndale Dr in Barrie is the closest European car specialist to Midhurst, and we've been serving the community for over 15 years.",
      "Ali and his team specialize in BMW, Mercedes, Audi, and Volkswagen, but we service all makes and models. From quick oil changes to complex engine repairs, safety certificates, and A/C service — everything is done with the same level of care and honesty.",
      "At just a 10-minute drive from Midhurst, iFix is more convenient than driving to dealerships in Barrie's south end or the GTA. And our prices are significantly lower than dealership rates — with the same quality of work.",
      "Book your appointment with Ali at (705) 503-3242. Same-day service available for many repairs."
    ]}
  />
);

export default LocationPage;
