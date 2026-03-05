import SEOHead from "@/components/SEOHead";
import PageLayout from "@/components/PageLayout";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const CarACRepair = () => (
  <PageLayout>
    <SEOHead
      title="Car AC Repair in Barrie, ON | A/C Recharge & Service | iFix Auto"
      description="Car AC repair and recharge in Barrie. Diagnosis, compressor repair, evaporator service. All makes including European. Call iFix: (705) 503-3242."
    />
    <ServicePageTemplate
      title="Car AC Repair Barrie"
      metaH1="Car AC Repair in Barrie, Ontario | iFix Auto Services"
      intro="A/C not blowing cold? We diagnose and repair all air conditioning systems. Fast turnaround, fair prices."
      content={[
        "Ontario summers can get hot, and a broken car A/C makes driving miserable. At iFix Auto Services in Barrie, we diagnose and repair all vehicle air conditioning systems — from simple refrigerant recharges to complex compressor replacements, evaporator repairs, and condenser replacements.",
        "If your A/C is blowing warm air, making unusual noises when engaged, or has a musty smell, it needs attention. Common A/C issues include low refrigerant (often caused by a leak), a failing compressor, a clogged expansion valve, or electrical problems with the A/C control system.",
        "For European vehicles, A/C systems often use specific refrigerants and have unique control systems. Ali's experience with BMW, Mercedes, and Audi climate control systems means accurate diagnosis and proper repair — not guesswork with a can of refrigerant.",
        "We start every A/C service with a proper diagnosis. We check refrigerant levels, test for leaks using electronic leak detection, inspect the compressor, check electrical connections, and test the entire system. Only after we know exactly what's wrong do we recommend repairs."
      ]}
      whyChoose="We don't just top up your refrigerant and hope for the best. We properly diagnose A/C issues, find the root cause, and fix it right. For European vehicles, we understand the specific climate control systems and use the correct refrigerant. Fair pricing, proper repairs, no guesswork."
      faqs={[
        { q: "How much does car AC repair cost in Barrie?", a: "A simple recharge is the most affordable option, while compressor or evaporator replacements cost more. We always diagnose first and provide a clear quote before any repair work." },
        { q: "How do I know if my car AC needs recharging?", a: "If your A/C is blowing air that's not cold enough, or if it takes a long time to cool down, it may need a recharge. However, low refrigerant usually means there's a leak that should be found and fixed." },
        { q: "Can you fix the AC on European cars?", a: "Absolutely. We service A/C systems on BMW, Mercedes, Audi, VW, and all other makes. European A/C systems often require specific diagnostic procedures that we're experienced with." },
      ]}
      relatedServices={[
        { label: "Oil Change", href: "/oil-change-barrie" },
        { label: "European Car Repair", href: "/european-car-repair-barrie" },
        { label: "Services", href: "/services" },
      ]}
      reviews={[
        { name: "Bajan Disa", text: "Everything was explained clearly, with no pressure, no hidden fees, and no unnecessary upselling. The service was incredibly fast without sacrificing quality." },
      ]}
    />
  </PageLayout>
);

export default CarACRepair;
