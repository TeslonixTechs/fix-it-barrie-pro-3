import SEOHead from "@/components/SEOHead";
import PageLayout from "@/components/PageLayout";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const AudiRepair = () => (
  <PageLayout>
    <SEOHead
      title="Audi Repair in Barrie, ON | Expert Audi Mechanic | iFix Auto Services"
      description="Trusted Audi repair in Barrie, Ontario. A3, A4, A6, Q5, Q7, TT service. Quattro & DSG specialists. Fair prices. Call (705) 503-3242."
    />
    <ServicePageTemplate
      title="Audi Repair Barrie"
      metaH1="Audi Repair in Barrie, Ontario | iFix Auto Services"
      intro="Expert Audi service in Barrie. Quattro AWD, turbo engines, DSG transmissions — we know Audis inside and out."
      content={[
        "Audis are sophisticated vehicles that share a platform with Volkswagen but add layers of complexity — Quattro all-wheel drive, turbocharged engines, advanced electronic systems, and DSG dual-clutch transmissions. At iFix Auto Services, Ali has deep experience with the entire Audi lineup: A3, A4, A6, Q3, Q5, Q7, TT, and more.",
        "Common Audi issues we repair regularly include timing chain tensioner failures (especially on 2.0T engines), excessive oil consumption, carbon buildup on direct-injection engines, DSG transmission service, Quattro system repairs, and electrical diagnostics. These are complex problems that require specialized knowledge — and Ali has been solving them for over 15 years.",
        "We use manufacturer-grade diagnostic equipment that reads Audi-specific fault codes and live data. This means accurate diagnoses, not guesswork. When we tell you what's wrong with your Audi, we're confident in the diagnosis because we've verified it with the right tools.",
        "Barrie Audi owners choose iFix because we combine expert knowledge with honest, transparent pricing. You'll never pay for work your car doesn't need. We explain everything clearly, give you a fair quote, and deliver quality work backed by our guarantee."
      ]}
      whyChoose="Ali's specialized knowledge of the VW/Audi platform means your car gets expert care. We handle Quattro systems, DSG transmissions, and turbocharged engines with confidence. Our 4.9-star rating and 132 reviews prove that Barrie drivers trust iFix for quality Audi repair at fair prices."
      faqs={[
        { q: "Can you service Audi Quattro AWD systems?", a: "Yes. We service all Quattro variants including Haldex and Torsen systems. Transfer case fluid changes, differential service, and AWD system diagnostics." },
        { q: "How much does Audi repair cost in Barrie?", a: "Significantly less than the Audi dealership. Our customers save 30-50% on most services while getting the same quality of work with OEM-grade parts." },
        { q: "Do you handle Audi DSG transmission service?", a: "Absolutely. We perform DSG fluid and filter changes, mechatronic unit repairs, and clutch pack replacements. Regular DSG service is critical for longevity." },
      ]}
      relatedServices={[
        { label: "BMW Repair", href: "/bmw-repair-barrie" },
        { label: "Mercedes Repair", href: "/mercedes-repair-barrie" },
        { label: "European Car Repair", href: "/european-car-repair-barrie" },
        { label: "Oil Change", href: "/oil-change-barrie" },
      ]}
      reviews={[
        { name: "Ahsan Syed", text: "Excellent service, very competent and trustworthy mechanics. I was most happy to see that they service Mercedes and Audi vehicles, including diesels!" },
      ]}
    />
  </PageLayout>
);

export default AudiRepair;
