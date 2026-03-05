import SEOHead from "@/components/SEOHead";
import PageLayout from "@/components/PageLayout";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const MercedesRepair = () => (
  <PageLayout>
    <SEOHead
      title="Mercedes Repair in Barrie, ON | Expert Mercedes Mechanic | iFix Auto"
      description="Expert Mercedes-Benz repair in Barrie. C-Class, E-Class, GLC, GLE, Sprinter. Diesel specialists. Fair pricing, no upselling. Call (705) 503-3242."
    />
    <ServicePageTemplate
      title="Mercedes Repair Barrie"
      metaH1="Mercedes-Benz Repair in Barrie, Ontario | iFix Auto Services"
      intro="Trusted Mercedes-Benz service in Barrie. Expert diagnostics, honest pricing, diesel specialists."
      content={[
        "Mercedes-Benz vehicles are engineered to the highest standards — and they deserve a mechanic who meets those standards. At iFix Auto Services in Barrie, Ali and his team have over 15 years of hands-on experience servicing every Mercedes model, from the C-Class and E-Class to the GLC, GLE, S-Class, and Sprinter vans.",
        "We specialize in both gasoline and diesel Mercedes engines. Whether you're dealing with an AdBlue warning, a DPF regeneration issue, injector problems, or a routine oil service, we have the diagnostic tools and technical knowledge to handle it properly.",
        "Common Mercedes repairs we handle daily include brake pad and rotor replacements, suspension work (airmatic and conventional), transmission service, electrical diagnostics, engine oil leaks, and cooling system repairs. We use quality parts that meet Mercedes specifications.",
        "Why pay dealership prices when you can get the same quality of work at iFix? Our Barrie customers save significantly compared to Mercedes dealerships — without sacrificing quality. Ali's philosophy is simple: fix what needs fixing, charge a fair price, and earn your trust for the long run."
      ]}
      whyChoose="With 15+ years of Mercedes-Benz experience, dealer-level diagnostic equipment, and a 4.9-star Google rating, iFix Auto Services is Barrie's trusted alternative to the Mercedes dealership. We specialize in diesel engines, use quality parts, and never upsell. Your Mercedes deserves expert care at honest prices."
      faqs={[
        { q: "Do you service Mercedes diesel engines in Barrie?", a: "Yes. Ali has extensive experience with Mercedes diesel engines including OM651, OM654, and OM642 variants. DPF, AdBlue, injector, and turbo repairs are all services we provide." },
        { q: "How much does Mercedes repair cost in Barrie?", a: "Our customers typically save 30-50% compared to Mercedes dealership pricing. We provide clear quotes before starting and never add hidden charges." },
        { q: "Can you service my Mercedes Sprinter van?", a: "Absolutely. We service Sprinter vans regularly — both diesel and gasoline models. Oil changes, brake service, engine repairs, and diagnostics." },
      ]}
      relatedServices={[
        { label: "BMW Repair", href: "/bmw-repair-barrie" },
        { label: "Audi Repair", href: "/audi-repair-barrie" },
        { label: "European Car Repair", href: "/european-car-repair-barrie" },
        { label: "Brake Repair", href: "/brake-repair-barrie" },
      ]}
      reviews={[
        { name: "Ahsan Syed", text: "Excellent service, very competent and trustworthy mechanics. There has been no up-selling, and the prices are very fair! I was most happy to see that they service Mercedes and Audi vehicles, including diesels!" },
      ]}
    />
  </PageLayout>
);

export default MercedesRepair;
