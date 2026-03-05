import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import IFixLogo from "@/components/IFixLogo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Reviews", href: "/#reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Book Now", href: "/book-appointment" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <IFixLogo light={!scrolled} />

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`text-sm font-medium font-body transition-colors hover:text-primary ${
                scrolled ? "text-foreground" : "text-primary-foreground"
              } ${pathname === l.href ? "text-primary" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop right */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:7055033242"
            className={`flex items-center gap-2 text-sm font-medium ${
              scrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            <Phone className="w-4 h-4" />
            (705) 503-3242
          </a>
          <Button variant="cta" size="default" asChild>
            <Link to="/book-appointment">Book Appointment</Link>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className={`text-sm font-medium py-2 ${pathname === l.href ? "text-primary" : "text-foreground"}`}
              >
                {l.label}
              </Link>
            ))}
            <a href="tel:7055033242" className="flex items-center gap-2 text-sm font-medium text-foreground py-2">
              <Phone className="w-4 h-4" />
              (705) 503-3242
            </a>
            <Button variant="cta" size="lg" asChild>
              <Link to="/book-appointment">Book Appointment</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
