import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";

interface BlogPostPageProps {
  title: string;
  metaTitle: string;
  metaDesc: string;
  date: string;
  content: string[];
  slug: string;
  relatedLinks: { label: string; href: string }[];
}

const BlogPostLayout = ({ title, metaTitle, metaDesc, date, content, slug, relatedLinks }: BlogPostPageProps) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    datePublished: date,
    author: { "@type": "Person", name: "Ali — iFix Auto Services" },
    publisher: { "@type": "Organization", name: "iFix Auto Services" },
    url: `https://ifixautoservices.ca/blog/${slug}`,
  };

  return (
    <PageLayout>
      <SEOHead title={metaTitle} description={metaDesc} jsonLd={jsonLd} />

      <section className="bg-dark pt-32 pb-16">
        <div className="container max-w-3xl">
          <p className="text-primary text-sm font-body mb-4">{date}</p>
          <h1 className="font-heading text-3xl md:text-5xl text-dark-foreground">{title}</h1>
        </div>
      </section>

      <article className="py-16">
        <div className="container max-w-3xl">
          {content.map((p, i) => {
            if (p.startsWith("## ")) {
              return <h2 key={i} className="font-heading text-3xl mt-10 mb-4">{p.replace("## ", "")}</h2>;
            }
            return <p key={i} className="text-muted-foreground leading-relaxed mb-6">{p}</p>;
          })}
        </div>
      </article>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container text-center">
          <h2 className="font-heading text-3xl text-primary-foreground mb-4">Need This Service?</h2>
          <p className="text-primary-foreground/80 mb-8">Call Ali at (705) 503-3242 or book online.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="heroOutline" size="lg" asChild>
              <a href="tel:7055033242">Call Now</a>
            </Button>
            <Button variant="hero" size="lg" className="bg-dark-foreground text-dark hover:bg-dark-foreground/90" asChild>
              <Link to="/book-appointment">Book Online</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container max-w-3xl">
          <h3 className="font-heading text-xl mb-4">Related</h3>
          <div className="flex flex-wrap gap-3">
            {relatedLinks.map((l) => (
              <Button key={l.href} variant="ctaOutline" size="sm" asChild>
                <Link to={l.href}>{l.label}</Link>
              </Button>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export const BlogBMWDealership = () => (
  <BlogPostLayout
    slug="bmw-repair-barrie-dealership-alternative"
    title="Why BMW Owners in Barrie Should Skip the Dealership"
    metaTitle="Why BMW Owners in Barrie Should Skip the Dealership | iFix Auto"
    metaDesc="Tired of dealership prices for BMW service? Learn why Barrie BMW owners are choosing independent specialists like iFix Auto Services."
    date="February 15, 2025"
    relatedLinks={[
      { label: "BMW Repair Barrie", href: "/bmw-repair-barrie" },
      { label: "European Car Repair", href: "/european-car-repair-barrie" },
      { label: "Oil Change Barrie", href: "/oil-change-barrie" },
    ]}
    content={[
      "If you own a BMW in Barrie, Ontario, you've probably experienced the sticker shock of a dealership service bill. A routine oil change that should cost $100-150 somehow becomes $300+. A brake job that should be $500 turns into $1,200. Sound familiar?",
      "You're not imagining things. BMW dealerships charge premium prices — not because the work is better, but because of brand overhead, fancy waiting rooms, and corporate pricing structures. The actual mechanic doing the work often has the same training and tools as a good independent specialist.",
      "## The Dealership Markup Problem",
      "Dealerships mark up parts significantly — sometimes 100-200% over what an independent shop pays for the same OEM-quality components. Their labor rates are higher because they need to cover massive facility costs, corporate fees, and sales department expenses. None of that has anything to do with the quality of work on your car.",
      "## What a Good Independent Specialist Offers",
      "At iFix Auto Services in Barrie, Ali has spent over 15 years working exclusively with European vehicles — BMW, Mercedes, Audi, and Volkswagen. He uses the same diagnostic equipment that BMW dealerships use. He follows the same service procedures. He uses OEM-quality parts that meet or exceed BMW specifications.",
      "The difference? iFix charges fair, transparent prices. No corporate overhead. No upselling on unnecessary services. No $50 'shop supplies' fee tacked onto every bill.",
      "## Your Warranty is Protected",
      "Many BMW owners believe they must service their vehicle at the dealership to maintain their warranty. This is not true in Canada. Under the Competition Bureau's guidelines, you have the right to service your vehicle at any qualified shop without voiding your warranty, as long as the correct procedures and parts are used.",
      "## Real Savings, Real Quality",
      "Our Barrie BMW customers typically save 30-50% compared to dealership pricing. On a typical brake job, that's $300-500 in savings. On an oil service, $100-150. Over the life of your BMW, those savings add up to thousands of dollars — with zero compromise on quality.",
      "## The Bottom Line",
      "Skip the dealership. Find a specialist who knows BMWs inside and out, charges fair prices, and treats you honestly. At iFix Auto Services, that's exactly what Ali and his team deliver. Call (705) 503-3242 or book online — your BMW (and your wallet) will thank you.",
    ]}
  />
);

export const BlogOilChange = () => (
  <BlogPostLayout
    slug="oil-change-barrie-ontario-winter"
    title="How Often Should You Change Your Oil in Ontario's Winter Climate"
    metaTitle="How Often Should You Change Your Oil in Ontario's Winter | iFix Auto"
    metaDesc="Ontario winters are tough on engine oil. Learn the right oil change intervals for cold climates from Barrie's trusted auto repair specialists."
    date="January 28, 2025"
    relatedLinks={[
      { label: "Oil Change Barrie", href: "/oil-change-barrie" },
      { label: "European Car Repair", href: "/european-car-repair-barrie" },
      { label: "Services", href: "/services" },
    ]}
    content={[
      "Ontario winters don't just make driving harder — they're tough on your engine oil, too. If you've ever wondered whether you should change your oil more often during winter, the answer is: it depends on your vehicle, your oil type, and how you drive. Here's what Barrie drivers need to know.",
      "## How Cold Affects Your Engine Oil",
      "When temperatures drop below -20°C (which happens regularly in Barrie), engine oil thickens significantly. This means your engine has to work harder on cold starts — the most wear-intensive moment for any engine. Thicker oil doesn't flow as quickly to critical components, leading to increased friction and wear.",
      "Full synthetic oil handles cold temperatures much better than conventional oil. It maintains its viscosity across a wider temperature range, flowing faster on cold starts and protecting your engine better. This is why we recommend synthetic oil for all vehicles in Ontario — especially European cars that already specify synthetic.",
      "## The Right Oil Change Interval for Ontario",
      "For most vehicles using full synthetic oil: every 8,000 to 12,000 km or once a year, whichever comes first. However, Ontario's conditions often push vehicles toward the shorter end of that range.",
      "Factors that mean you should change more frequently include: lots of short trips (engine never fully warms up), stop-and-go city driving, frequent cold starts, towing or carrying heavy loads, and older vehicles with higher mileage.",
      "## European Vehicles Need the Right Oil",
      "BMW, Mercedes, Audi, and Volkswagen engines are designed for specific oil specifications — BMW LL-01, Mercedes 229.5, VW 502/504, etc. Using the wrong oil — even if it's synthetic — can cause problems. Many quick-lube shops use generic synthetic that doesn't meet these specs. At iFix, we always use the correct manufacturer-approved oil.",
      "## Don't Skip Oil Changes",
      "Oil is the lifeblood of your engine. Skipping changes or extending intervals too far leads to sludge buildup, increased wear, and eventually costly engine repairs. A $100 oil change is a lot cheaper than a $5,000 engine repair.",
      "## The Bottom Line",
      "In Ontario's climate, stick to the shorter end of your recommended interval, use full synthetic oil, and make sure the correct specification is used — especially for European vehicles. At iFix Auto Services in Barrie, Ali and his team do oil changes right, every time. Call (705) 503-3242 to book yours.",
    ]}
  />
);

export const BlogMercedesBrakes = () => (
  <BlogPostLayout
    slug="mercedes-brake-service-barrie"
    title="Signs Your Mercedes Needs a Brake Service"
    metaTitle="Signs Your Mercedes Needs a Brake Service | iFix Auto Barrie"
    metaDesc="Know the warning signs that your Mercedes brakes need attention. Expert brake service advice from Barrie's European car repair specialists."
    date="January 10, 2025"
    relatedLinks={[
      { label: "Mercedes Repair Barrie", href: "/mercedes-repair-barrie" },
      { label: "Brake Repair Barrie", href: "/brake-repair-barrie" },
      { label: "European Car Repair", href: "/european-car-repair-barrie" },
    ]}
    content={[
      "Mercedes-Benz vehicles are engineered for performance and safety — and their braking systems are a big part of that. But even the best brakes wear out over time. Here's how to know when your Mercedes needs brake service, and why it matters to use a specialist.",
      "## Warning Sign #1: Squealing or Squeaking",
      "Mercedes brake pads have built-in wear indicators — small metal tabs that contact the rotor when the pad material gets thin. This creates a high-pitched squealing sound, especially at low speeds. If you hear this, it's time for new pads. Don't ignore it — the squeal will soon become a grinding sound, which means rotor damage.",
      "## Warning Sign #2: Grinding Noise",
      "If your brakes are grinding — a harsh, metal-on-metal sound — your pads are likely worn through to the backing plate. This means metal is grinding against your rotors, causing damage that's expensive to repair. Get to a shop immediately.",
      "## Warning Sign #3: Vibration When Braking",
      "If you feel vibration or pulsation through the brake pedal or steering wheel when braking, your rotors are likely warped. This is common on Mercedes vehicles that have been driven hard or have had cheap brake pads installed. Warped rotors need to be replaced — they can't be reliably resurfaced on most modern Mercedes models.",
      "## Warning Sign #4: Soft or Spongy Brake Pedal",
      "A brake pedal that feels soft, spongy, or sinks further than normal could indicate air in the brake lines, a brake fluid leak, or a failing master cylinder. This is a safety concern — have it inspected immediately.",
      "## Warning Sign #5: Dashboard Warning Light",
      "Mercedes vehicles have sophisticated brake monitoring systems. If your brake wear indicator light or brake warning light illuminates, don't ignore it. It's telling you something needs attention.",
      "## Why Use a Mercedes Specialist",
      "Mercedes brake systems use specific pad compounds and rotor specifications optimized for the vehicle's weight, performance, and electronic stability systems. Using generic parts can affect braking performance and even trigger warning lights. At iFix in Barrie, we use parts that meet Mercedes specifications.",
      "## Don't Wait on Brakes",
      "Brakes are your most important safety system. If you notice any of these signs, bring your Mercedes to iFix Auto Services in Barrie. Ali will inspect your brakes thoroughly, explain what's needed, and give you a fair quote. No upselling, no pressure. Call (705) 503-3242.",
    ]}
  />
);

export const BlogSafetyCertificate = () => (
  <BlogPostLayout
    slug="safety-certificate-barrie-ontario"
    title="How to Get a Safety Certificate in Ontario"
    metaTitle="How to Get a Safety Certificate in Ontario | iFix Auto Barrie"
    metaDesc="Complete guide to getting a safety certificate in Ontario. What's inspected, costs, and where to go in Barrie. Licensed inspection station."
    date="December 20, 2024"
    relatedLinks={[
      { label: "Safety Certificate Barrie", href: "/safety-certificate-barrie" },
      { label: "Brake Repair", href: "/brake-repair-barrie" },
      { label: "Services", href: "/services" },
    ]}
    content={[
      "If you're buying or selling a used vehicle in Ontario, you'll need a Safety Standards Certificate (SSC). It's required by law for most vehicle transfers. Here's everything Barrie drivers need to know about getting one.",
      "## What is a Safety Standards Certificate?",
      "A Safety Standards Certificate (SSC) is an official document that confirms a vehicle meets minimum safety standards as set by the Ontario Ministry of Transportation (MTO). It's required when you sell a used vehicle privately, transfer ownership, or register a vehicle from out of province.",
      "## Where Can You Get One?",
      "Safety inspections can only be performed at a licensed Motor Vehicle Inspection Station (MVIS). Not every mechanic shop is licensed — you need to make sure the shop holds a valid MVIS license. iFix Auto Services in Barrie is a licensed inspection station and has been performing safety inspections for over 15 years.",
      "## What Gets Inspected?",
      "The inspection covers all major safety components: brakes (pads, rotors, lines, fluid), tires (tread depth, condition, matching), suspension (shocks, struts, ball joints, tie rods), steering (power steering, rack, linkage), exhaust system (leaks, condition), lighting (headlights, brake lights, turn signals, markers), windshield and glass (chips, cracks in driver's sightline), body and frame (rust, structural integrity), seat belts (function, condition), and horn.",
      "## What Does It Cost?",
      "The inspection fee varies by shop but is generally competitive across Barrie. At iFix, we charge a fair price for the inspection itself. If repairs are needed for the vehicle to pass, those are quoted separately. You're never obligated to have the repairs done at the same shop — but most of our customers do because our repair prices are fair.",
      "## How Long is It Valid?",
      "A Safety Standards Certificate is valid for 36 days from the date of issue. The vehicle must be sold or transferred within that period, or a new inspection is required.",
      "## What If My Vehicle Fails?",
      "If your vehicle doesn't pass, you'll receive a detailed list of what needs to be repaired. You can have the repairs done at the inspection station or take the list to another shop. Once repairs are completed, the vehicle needs to be re-inspected.",
      "## Tips for a Smooth Inspection",
      "Before bringing your car in, check the basics: make sure all lights work, tires have adequate tread, wipers function, and the horn works. Check for any obvious fluid leaks. These simple checks can prevent minor failures that delay getting your certificate.",
      "## Get Your Safety Certificate at iFix in Barrie",
      "At iFix Auto Services, Ali performs thorough, honest safety inspections. We don't fail vehicles on borderline items to generate repair work, and we don't pad repair lists. If your car is safe, it passes. If something needs attention, we'll explain it clearly and quote a fair price. Call (705) 503-3242 to book your inspection.",
    ]}
  />
);
