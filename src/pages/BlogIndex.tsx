import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageLayout from "@/components/PageLayout";

const posts = [
  {
    slug: "bmw-repair-barrie-dealership-alternative",
    title: "Why BMW Owners in Barrie Should Skip the Dealership",
    date: "February 15, 2025",
    excerpt: "Tired of paying dealership prices for routine BMW maintenance? Here's why Barrie BMW owners are switching to independent specialists — and saving thousands.",
  },
  {
    slug: "oil-change-barrie-ontario-winter",
    title: "How Often Should You Change Your Oil in Ontario's Winter Climate",
    date: "January 28, 2025",
    excerpt: "Ontario winters are brutal on your engine oil. Here's how cold temperatures affect your oil and the right change intervals for our climate.",
  },
  {
    slug: "mercedes-brake-service-barrie",
    title: "Signs Your Mercedes Needs a Brake Service",
    date: "January 10, 2025",
    excerpt: "Mercedes brake systems are engineered for performance — but they still wear out. Here are the warning signs every Mercedes owner should know.",
  },
  {
    slug: "safety-certificate-barrie-ontario",
    title: "How to Get a Safety Certificate in Ontario",
    date: "December 20, 2024",
    excerpt: "Buying or selling a used car in Ontario? Here's everything you need to know about safety certificates — what's inspected, what it costs, and where to go in Barrie.",
  },
];

const BlogIndex = () => (
  <PageLayout>
    <SEOHead
      title="Auto Repair Tips & News | iFix Auto Services Blog — Barrie, ON"
      description="Expert auto repair tips from Barrie's European car specialists. BMW, Mercedes, Audi maintenance advice, Ontario car care tips, and more."
    />

    <section className="bg-dark pt-32 pb-16">
      <div className="container">
        <h1 className="font-heading text-4xl md:text-6xl text-dark-foreground">
          Auto Repair Tips from<br />
          <span className="text-primary">Barrie's European Car Specialists</span>
        </h1>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((p) => (
            <Link key={p.slug} to={`/blog/${p.slug}`} className="border border-border group hover:border-primary/40 transition-colors">
              <div className="p-8">
                <p className="text-xs text-muted-foreground mb-3">{p.date}</p>
                <h2 className="font-heading text-2xl mb-3 group-hover:text-primary transition-colors">{p.title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.excerpt}</p>
                <span className="text-primary text-sm font-medium">Read More →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default BlogIndex;
