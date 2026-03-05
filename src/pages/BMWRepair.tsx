import SEOHead from "@/components/SEOHead";
import PageLayout from "@/components/PageLayout";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const BMWRepair = () => (
  <PageLayout>
    <SEOHead
      title="BMW Repair in Barrie, ON | Expert BMW Mechanic | iFix Auto Services"
      description="Trusted BMW repair in Barrie, Ontario. Expert service for all BMW models including 3 Series, 5 Series, X3, X5. Fair prices, no upselling. Call (705) 503-3242."
    />
    <ServicePageTemplate
      title="BMW Repair Barrie"
      metaH1="BMW Repair in Barrie, Ontario | iFix Auto Services"
      intro="Barrie's most trusted BMW mechanic. Dealership-level expertise at honest, local shop prices."
      content={[
        "If you drive a BMW in Barrie, you know these cars need a mechanic who understands German engineering. At iFix Auto Services, Ali has spent over 15 years working on every BMW model — from the 3 Series and 5 Series sedans to X3, X5, and X7 SUVs, and even high-performance M models.",
        "We handle everything BMW owners need: oil services with the correct BMW-approved synthetic oil, brake pad and rotor replacements, cooling system repairs (a common BMW weak point), VANOS and Valvetronic system repairs, electrical diagnostics, and much more.",
        "BMW dealerships in Barrie and the GTA charge premium rates for routine maintenance. At iFix, you get the same quality of work — same diagnostic tools, same quality parts — at 30-50% less. That's not a gimmick, it's just how we run our business. Low overhead, honest pricing, quality work.",
        "Whether your BMW needs a simple oil change or a complex engine repair, Ali and his team will diagnose the issue accurately, explain it in plain English, give you a fair quote, and get it done right. No surprises. No upselling. That's why Barrie BMW owners trust iFix."
      ]}
      whyChoose="Ali's 15+ years of BMW experience means your car is in expert hands. We use OEM-quality parts, BMW-specific diagnostic equipment, and follow manufacturer service procedures. The only difference between us and the dealer? We charge fair prices and we don't push work you don't need. Our 4.9-star Google rating speaks for itself."
      faqs={[
        { q: "How much does BMW repair cost in Barrie?", a: "It depends on the service, but our customers typically save 30-50% compared to BMW dealership pricing. We always provide a clear quote before starting any work." },
        { q: "Do you use OEM parts for BMW repairs?", a: "We use OEM-quality parts that meet or exceed BMW specifications. We can also source genuine BMW parts if you prefer — just ask." },
        { q: "Can you service my BMW diesel in Barrie?", a: "Absolutely. Ali has extensive experience with BMW diesel engines including the N47, N57, and B47 variants. DPF issues, injector problems, turbo repairs — we handle it all." },
      ]}
      relatedServices={[
        { label: "Mercedes Repair", href: "/mercedes-repair-barrie" },
        { label: "Audi Repair", href: "/audi-repair-barrie" },
        { label: "European Car Repair", href: "/european-car-repair-barrie" },
        { label: "Oil Change", href: "/oil-change-barrie" },
        { label: "Brake Repair", href: "/brake-repair-barrie" },
      ]}
      reviews={[
        { name: "Bajan Disa", text: "Everything was explained clearly, with no pressure, no hidden fees, and no unnecessary upselling. The service was also incredibly fast without sacrificing quality." },
      ]}
    />
  </PageLayout>
);

export default BMWRepair;
