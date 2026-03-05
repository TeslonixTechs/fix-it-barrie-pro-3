import SEOHead from "@/components/SEOHead";
import PageLayout from "@/components/PageLayout";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const OilChange = () => (
  <PageLayout>
    <SEOHead
      title="Oil Change in Barrie, ON | Fast & Affordable | iFix Auto Services"
      description="Quick, affordable oil changes in Barrie. Full synthetic & conventional. All makes including European cars. No appointment needed. Call (705) 503-3242."
    />
    <ServicePageTemplate
      title="Oil Change Barrie"
      metaH1="Oil Change in Barrie, Ontario | iFix Auto Services"
      intro="Fast, affordable oil changes in Barrie. Full synthetic and conventional options for all vehicles."
      content={[
        "Regular oil changes are the single most important thing you can do to keep your engine running smoothly and extend the life of your vehicle. At iFix Auto Services in Barrie, we make oil changes quick, affordable, and thorough.",
        "We carry premium full synthetic oils from brands like Mobil 1, Castrol, and Liqui Moly — matched to your vehicle's exact specifications. For European vehicles like BMW, Mercedes, Audi, and Volkswagen, using the correct oil specification is critical. We know exactly which oil your car needs.",
        "Every oil change at iFix includes more than just draining and filling. We replace your oil filter, check all fluid levels (coolant, brake, power steering, washer), inspect your air filter, and check tire pressure. It's a mini-inspection that helps catch small problems before they become big ones.",
        "Ontario's harsh winters are especially tough on engine oil. Cold temperatures cause oil to thicken, making your engine work harder on cold starts. Using the right grade of synthetic oil — and changing it on schedule — is critical for engine longevity in our climate. Ali recommends synthetic oil changes every 8,000-12,000 km depending on your driving habits and vehicle."
      ]}
      whyChoose="At iFix, oil changes are done right — not just fast. We use the correct oil specification for your vehicle, replace the filter, and do a courtesy inspection. Our prices are among the fairest in Barrie, especially for European vehicles. No appointment needed for most oil changes."
      faqs={[
        { q: "How much does an oil change cost in Barrie?", a: "Conventional oil changes start at competitive prices, and full synthetic varies by vehicle. European vehicles requiring specific oil specs may cost slightly more. We always quote you the exact price before we start." },
        { q: "How often should I change my oil in Ontario?", a: "For most vehicles using synthetic oil, every 8,000-12,000 km or once a year — whichever comes first. Ontario's cold winters and stop-and-go driving may require more frequent changes. Ali will recommend the right interval for your specific vehicle." },
        { q: "Do you do oil changes for BMW and Mercedes?", a: "Absolutely. We use BMW LL-01, Mercedes 229.5/229.51, and VW 502/504 approved oils. Using the correct spec is critical for these engines." },
      ]}
      relatedServices={[
        { label: "Brake Repair", href: "/brake-repair-barrie" },
        { label: "European Car Repair", href: "/european-car-repair-barrie" },
        { label: "Safety Certificate", href: "/safety-certificate-barrie" },
      ]}
      reviews={[
        { name: "Veronika Perisa", text: "Ali and his family has taken great care of mine and my family's cars with the absolute best prices anywhere in Barrie, especially with oil changes. They're always able to find time to fit us in and gets the work done quickly and reliably." },
      ]}
    />
  </PageLayout>
);

export default OilChange;
