import { useState } from "react";
import { Button } from "@/components/ui/button";

const services = [
  "Diagnostic Test",
  "Oil Change",
  "Engine Servicing",
  "Brake Service",
  "Tire Services",
  "Suspension & Steering",
  "Transmission Service",
  "A/C Service",
  "Safety Certificate",
  "European Car Repair",
  "Other",
];

const BookingForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-card border border-border p-8 text-center">
        <div className="text-primary text-4xl font-heading mb-4">Thank You!</div>
        <p className="text-muted-foreground">We've received your request. Ali or a team member will confirm your appointment within a few hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border p-6 md:p-8 space-y-4 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          required
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-3 border border-border bg-background text-foreground text-sm font-body focus:outline-none focus:border-primary"
        />
        <input
          required
          type="tel"
          placeholder="Phone Number"
          className="w-full px-4 py-3 border border-border bg-background text-foreground text-sm font-body focus:outline-none focus:border-primary"
        />
      </div>
      <input
        type="email"
        placeholder="Email Address"
        className="w-full px-4 py-3 border border-border bg-background text-foreground text-sm font-body focus:outline-none focus:border-primary"
      />
      <input
        type="text"
        placeholder="Vehicle Make, Model & Year"
        className="w-full px-4 py-3 border border-border bg-background text-foreground text-sm font-body focus:outline-none focus:border-primary"
      />
      <select
        required
        className="w-full px-4 py-3 border border-border bg-background text-foreground text-sm font-body focus:outline-none focus:border-primary"
        defaultValue=""
      >
        <option value="" disabled>Service Needed</option>
        {services.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
      <input
        type="date"
        placeholder="Preferred Date"
        className="w-full px-4 py-3 border border-border bg-background text-foreground text-sm font-body focus:outline-none focus:border-primary"
      />
      <textarea
        placeholder="Additional Notes"
        rows={3}
        className="w-full px-4 py-3 border border-border bg-background text-foreground text-sm font-body focus:outline-none focus:border-primary resize-none"
      />
      <Button variant="cta" size="lg" type="submit" className="w-full">
        Request Appointment →
      </Button>
    </form>
  );
};

export default BookingForm;
