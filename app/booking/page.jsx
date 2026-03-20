"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "../../components/Button";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    serviceType: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // { type: 'success' | 'error', message: string }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    // Clear any previous message when re-submitting
    setSubmitStatus(null);

    // Basic validation
    const digitsOnlyPhone = (formData.phone || "").replace(/\D/g, "");
    if (digitsOnlyPhone.length < 9) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid phone number (numbers only).",
      });
      return;
    }

    // Prevent past dates (compare by local date, not time)
    if (formData.date) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const selected = new Date(`${formData.date}T00:00:00`);
      if (selected < today) {
        setSubmitStatus({
          type: "error",
          message: "Please choose a date that is today or in the future.",
        });
        return;
      }
    }

    setIsSubmitting(true);

    try {
      const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: digitsOnlyPhone,
        preferred_date: formData.date,
        preferred_time: formData.time,
        service_type: formData.serviceType,
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      setSubmitStatus({
        type: "success",
        message:
          "Booking request sent! We’ll contact you shortly to confirm your appointment.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        serviceType: "",
      });

      // Auto-hide success after a few seconds
      setTimeout(() => {
        setSubmitStatus((current) =>
          current?.type === "success" ? null : current,
        );
      }, 6000);
    } catch (error) {
      console.error("Booking submission failed:", error);
      setSubmitStatus({
        type: "error",
        message:
          "Couldn’t send your request. Please try again, or call +27 79 703 5547.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Phone: allow only digits in state
    if (name === "phone") {
      const digits = value.replace(/\D/g, "");
      setFormData({ ...formData, phone: digits });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  return (
    <main className="min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Book an Appointment
          </h1>
          <p className="text-lg text-muted-foreground">
            Schedule your plumbing service at your convenience
          </p>
        </div>

        <div className="bg-card p-8 md:p-10 rounded-2xl shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                maxLength={15}
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label
                htmlFor="serviceType"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Service Type *
              </label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select a service</option>
                <option value="Emergency Repairs">Emergency Repairs</option>
                <option value="Leak Detection & Repair">
                  Leak Detection & Repair
                </option>
                <option value="Bathroom Installation">
                  Bathroom Installation
                </option>
                <option value="Water Heater Servicesr">
                  Water Heater Services
                </option>
                <option value="Drain Cleaning">Drain Cleaning</option>
                <option value="Preventive Maintenance">
                  Preventive Maintenance
                </option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Preferred Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="time"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Preferred Time *
                </label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a time</option>
                  <option value="8am-10am">8:00 AM - 10:00 AM</option>
                  <option value="10am-12pm">10:00 AM - 12:00 PM</option>
                  <option value="12pm-2pm">12:00 PM - 2:00 PM</option>
                  <option value="2pm-4pm">2:00 PM - 4:00 PM</option>
                  <option value="4pm-6pm">4:00 PM - 6:00 PM</option>
                </select>
              </div>
            </div>

            <div className="bg-accent/10 p-6 rounded-lg">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Note:</strong> This is a
                booking request. We will contact you to confirm your appointment
                within 2 hours during business hours. For emergency services,
                please call us directly at
                <a
                  href="tel:+27797035547"
                  className="text-primary font-semibold"
                >
                  {" "}
                  +27 79 703 5547
                </a>
                .
              </p>
            </div>

            {submitStatus && (
              <div
                className={`rounded-xl border p-4 text-sm animate-in fade-in slide-in-from-bottom-1 ${
                  submitStatus.type === "success"
                    ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
                    : "border-rose-500/30 bg-rose-500/10 text-rose-700 dark:text-rose-300"
                }`}
                role={submitStatus.type === "error" ? "alert" : "status"}
                aria-live="polite"
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`mt-0.5 h-2.5 w-2.5 rounded-full ${
                      submitStatus.type === "success"
                        ? "bg-emerald-500"
                        : "bg-rose-500"
                    }`}
                    aria-hidden="true"
                  />
                  <div className="flex-1">
                    <p className="font-medium">
                      {submitStatus.type === "success"
                        ? "Request received"
                        : "Something went wrong"}
                    </p>
                    <p className="mt-1 opacity-90">{submitStatus.message}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubmitStatus(null)}
                    className="text-xs font-semibold underline underline-offset-4 opacity-80 hover:opacity-100"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            )}

            <Button
              type="submit"
              className="w-full cursor-pointer"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Request Appointment"}
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
