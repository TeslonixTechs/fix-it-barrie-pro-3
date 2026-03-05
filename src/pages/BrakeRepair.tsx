import SEOHead from "@/components/SEOHead";
import PageLayout from "@/components/PageLayout";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const BrakeRepair = () => (
  <PageLayout>
    <SEOHead
      title="Brake Repair in Barrie, ON | Pads, Rotors, Calipers | iFix Auto"
      description="Expert brake repair in Barrie. Pads, rotors, calipers, brake fluid. All makes including European cars. Your safety comes first. Call (705) 503-3242."
    />
    <ServicePageTemplate
      title="Brake Repair Barrie"
      metaH1="Brake Repair in Barrie, Ontario | iFix Auto Services"
      intro="Your brakes are your most important safety system. At iFix, we get them right — every time."
      content={[
        "When it comes to your brakes, there's no room for shortcuts. At iFix Auto Services in Barrie, Ali and his team perform thorough brake inspections and repairs using quality parts. Whether you need brake pads, rotors, calipers, brake lines, or a complete brake fluid flush — we do it right.",
        "Common signs you need brake service include squealing or grinding noises when braking, a soft or spongy brake pedal, your vehicle pulling to one side under braking, vibration in the steering wheel when you brake, or your brake warning light coming on. If you notice any of these, bring your car in right away.",
        "For European vehicles like BMW, Mercedes, and Audi, brake systems are more complex and use specific pad compounds and rotor specifications. Ali's 15+ years of European car experience means your brake service is done to manufacturer standards — not with generic parts that don't perform correctly.",
        "At iFix, every brake service starts with a full inspection. We measure pad thickness, check rotor condition, inspect calipers and brake lines, and test brake fluid condition. We only replace what actually needs replacing — no upselling brake components that still have life left in them."
      ]}
      whyChoose="Brakes are safety-critical, and we treat them that way. We use quality parts matched to your vehicle, perform thorough inspections, and only replace what's needed. Our transparent pricing means you know the cost before we start. For European vehicles, we use the correct pad compounds and rotor specs."
      faqs={[
        { q: "How long does brake service take?", a: "Most brake pad and rotor replacements are completed within 1-2 hours. More complex repairs like caliper replacements may take longer. We'll give you an accurate time estimate when you bring your car in." },
        { q: "How much does brake repair cost in Barrie?", a: "Brake pad replacement costs vary by vehicle. European vehicles may cost more due to specific parts. We always provide a clear quote before starting work." },
        { q: "How do I know if I need new brakes?", a: "Squealing, grinding, soft pedal, vibration when braking, or your brake light coming on are all signs. We offer free brake inspections — just bring your car by." },
      ]}
      relatedServices={[
        { label: "Oil Change", href: "/oil-change-barrie" },
        { label: "Safety Certificate", href: "/safety-certificate-barrie" },
        { label: "European Car Repair", href: "/european-car-repair-barrie" },
      ]}
      reviews={[
        { name: "Vida Woods", text: "Coming in at just under his estimate was a much appreciated relief! I will not hesitate to use their services again, and highly recommend them." },
      ]}
    />
  </PageLayout>
);

export default BrakeRepair;
