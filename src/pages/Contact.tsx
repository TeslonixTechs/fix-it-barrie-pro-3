import { Phone, MapPin, Clock, Mail } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import PageLayout from "@/components/PageLayout";
import BookingForm from "@/components/BookingForm";
import { Button } from "@/components/ui/button";

const Contact = () => (
  <PageLayout>
    <SEOHead
      title="Book an Appointment | iFix Auto Services — Barrie, ON"
      description="Book your auto repair appointment with Ali at iFix Auto Services in Barrie. Same-day service available. Call (705) 503-3242 or book online."
    />

    <section className="bg-dark pt-32 pb-16">
      <div className="container">
        <h1 className="font-heading text-4xl md:text-6xl text-dark-foreground">
          Book an Appointment at<br />
          <span className="text-primary">iFix Auto Services in Barrie</span>
        </h1>
        <p className="mt-4 text-dark-foreground/70 max-w-2xl">
          Call Ali directly or fill out the form below. We'll confirm your appointment within a few hours.
        </p>
      </div>
    </section>

    {/* Mobile CTA */}
    <div className="md:hidden bg-primary p-4">
      <Button variant="hero" size="xl" className="w-full bg-dark-foreground text-dark" asChild>
        <a href="tel:7055033242">
          <Phone className="w-5 h-5" />
          Call (705) 503-3242
        </a>
      </Button>
    </div>

    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading text-4xl mb-8">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium mb-1">Phone</p>
                  <a href="tel:7055033242" className="text-muted-foreground hover:text-primary transition-colors">(705) 503-3242</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium mb-1">Email</p>
                  <a href="mailto:ifixautoservices@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">ifixautoservices@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium mb-1">Address</p>
                  <p className="text-muted-foreground">1 Ferndale Dr N #3, Barrie, ON L4N 9V3</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium mb-1">Hours</p>
                  <p className="text-muted-foreground">Mon – Fri: 9:00 AM – 6:00 PM</p>
                  <p className="text-muted-foreground">Saturday: 9:00 AM – 4:00 PM</p>
                  <p className="text-muted-foreground">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          <BookingForm />
        </div>
      </div>
    </section>

    {/* Map */}
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.5!2d-79.6901!3d44.3893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s1+Ferndale+Dr+N+%233+Barrie+ON!5e0!3m2!1sen!2sca!4v1"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="iFix Auto Services location in Barrie Ontario"
    />
  </PageLayout>
);

export default Contact;
