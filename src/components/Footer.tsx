import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import IFixLogo from "@/components/IFixLogo";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "European Car Repair", href: "/european-car-repair-barrie" },
  { label: "Book Appointment", href: "/book-appointment" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
];

const Footer = () => (
  <footer className="bg-dark text-dark-foreground">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Col 1 */}
        <div>
          <IFixLogo light />
          <p className="mt-4 text-sm text-dark-foreground/60">
            Barrie's European Car Repair Specialists
          </p>
          <div className="flex gap-4 mt-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-dark-foreground/60 hover:text-primary transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-dark-foreground/60 hover:text-primary transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="font-heading text-lg tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link to={l.href} className="text-sm text-dark-foreground/60 hover:text-primary transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="font-heading text-lg tracking-wider mb-4">Hours</h4>
          <ul className="space-y-2 text-sm text-dark-foreground/60">
            <li>Mon – Fri: 9:00 AM – 6:00 PM</li>
            <li>Saturday: 9:00 AM – 4:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>

        {/* Col 4 */}
        <div>
          <h4 className="font-heading text-lg tracking-wider mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-dark-foreground/60">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
              1 Ferndale Dr N #3, Barrie, ON L4N 9V3
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <a href="tel:7055033242" className="hover:text-primary transition-colors">(705) 503-3242</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <a href="mailto:ifixautoservices@gmail.com" className="hover:text-primary transition-colors">ifixautoservices@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-dark-foreground/10">
      <div className="container py-4 text-center text-xs text-dark-foreground/40">
        © 2025 iFix Auto Services. All Rights Reserved. | Proudly Serving Barrie, Innisfil, Alliston, Midhurst, Orillia & Simcoe County
      </div>
    </div>
  </footer>
);

export default Footer;
