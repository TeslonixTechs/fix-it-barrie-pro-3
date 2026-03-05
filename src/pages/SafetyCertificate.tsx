import SEOHead from "@/components/SEOHead";
import PageLayout from "@/components/PageLayout";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const SafetyCertificate = () => (
  <PageLayout>
    <SEOHead
      title="Safety Certificate in Barrie, ON | Ontario Safety Inspection | iFix Auto"
      description="Ontario safety certificate inspections in Barrie. Licensed inspection station. Fast, thorough, fair pricing. Call iFix Auto Services: (705) 503-3242."
    />
    <ServicePageTemplate
      title="Safety Certificate Barrie"
      metaH1="Safety Certificate in Barrie, Ontario | iFix Auto Services"
      intro="Licensed Ontario safety inspection station. Fast turnaround, thorough inspections, fair pricing."
      content={[
        "If you're buying or selling a used vehicle in Ontario, you need a Safety Standards Certificate (SSC). At iFix Auto Services in Barrie, we're a licensed Motor Vehicle Inspection Station (MVIS) authorized by the Ontario Ministry of Transportation to perform safety inspections.",
        "Our safety inspections are thorough and follow all MTO requirements. We inspect brakes, tires, suspension, steering, exhaust, lights, glass, body condition, seat belts, and all other components required by the Ontario Highway Traffic Act. We use calibrated equipment and follow the inspection checklist to the letter.",
        "If your vehicle passes inspection, we issue the Safety Standards Certificate on the spot. If it doesn't pass, we provide a detailed list of what needs to be repaired. We can perform those repairs at fair prices, or you're free to take the list elsewhere — no pressure.",
        "Ali's approach to safety inspections is the same as everything else at iFix: honest and fair. We don't fail vehicles on things that don't need fixing, and we don't pad repair lists with unnecessary items. If your car is safe, it passes. If something needs attention, we'll explain it clearly and quote you a fair price."
      ]}
      whyChoose="As a licensed Ontario inspection station, we perform thorough, honest safety inspections. We follow MTO requirements exactly — no padding the repair list, no unnecessary failures. If repairs are needed, we quote fair prices and get the work done quickly so you can get your certificate."
      faqs={[
        { q: "How much does a safety certificate cost in Barrie?", a: "The inspection fee is competitive with other Barrie shops. If repairs are needed, we'll quote those separately. You only pay for the inspection upfront." },
        { q: "How long is a safety certificate valid in Ontario?", a: "A Safety Standards Certificate is valid for 36 days from the date of issue. The vehicle must be sold or transferred within that period." },
        { q: "What fails a safety inspection in Ontario?", a: "Common failure items include worn brake pads/rotors, tire tread depth below minimum, suspension wear, exhaust leaks, lighting issues, and windshield damage in the driver's line of sight. We'll explain any failure clearly." },
      ]}
      relatedServices={[
        { label: "Brake Repair", href: "/brake-repair-barrie" },
        { label: "Oil Change", href: "/oil-change-barrie" },
        { label: "Services", href: "/services" },
      ]}
      reviews={[
        { name: "Larissa Abbott", text: "He is such an honest, friendly kind man, who doesn't scam you and does everything to work you in. Prices are great, and great work and experience from him and staff." },
      ]}
    />
  </PageLayout>
);

export default SafetyCertificate;
