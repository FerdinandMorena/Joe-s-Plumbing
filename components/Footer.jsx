import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground dark:bg-black dark:text-white">
      {/* Subtle background pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-25 dark:opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-22 h-22 rounded-2xl bg-primary-foreground/10 dark:bg-white/10 ring-1 ring-primary-foreground/15 dark:ring-white/15 flex items-center justify-center overflow-hidden">
                <img
                  src="/logo.png"
                  alt="Joe's Plumbing logo"
                  className="w-20 h-20 object-contain"
                />
              </div>
              <div className="leading-tight">
                <span className="block text-xl font-extrabold">
                  Joe's Plumbing
                </span>
                <span className="block text-xs text-primary-foreground/80 dark:text-white/80 font-semibold">
                  Fast • Reliable • Local
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/80 dark:text-white/80 mb-4">
              Ready to help with all your plumbing needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-primary-foreground/80 hover:text-primary-foreground dark:text-white/80 dark:hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-primary-foreground/80 hover:text-primary-foreground dark:text-white/80 dark:hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground dark:text-white/80 dark:hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/booking"
                  className="text-primary-foreground/80 hover:text-primary-foreground dark:text-white/80 dark:hover:text-white transition-colors"
                >
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary-foreground dark:text-white" />
                <a
                  href="tel:+27797035547"
                  className="text-primary-foreground/80 hover:text-primary-foreground dark:text-white/80 dark:hover:text-white"
                >
                  +27 79 703 5547
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary-foreground dark:text-white" />
                <span className="text-primary-foreground/80 dark:text-white/80">
                  lesetjasathekge88@gmail.com
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-primary-foreground dark:text-white flex-shrink-0 mt-1" />
                <span className="text-primary-foreground/80 dark:text-white/80">
                  Stand no:890
                  <br />
                  lethuli park, 9L
                  <br />
                  Seshego
                </span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <ul className="space-y-2 text-primary-foreground/80 dark:text-white/80">
              <li>Monday - Friday: 7am - 8pm</li>
              <li>Saturday: 8am - 6pm</li>
              <li>Sunday: 9am - 5pm</li>
              <li className="text-primary-foreground dark:text-white font-semibold pt-2">
                24/7 Emergency Service
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 dark:border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* <p className="text-primary-foreground/80 dark:text-white/80 text-sm">
            Joe's Plumbing - Serving since 2014
          </p> */}
          {/* <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 dark:bg-white/10 flex items-center justify-center hover:bg-primary-foreground/20 dark:hover:bg-white/20 hover:scale-110 transition-all duration-200"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 dark:bg-white/10 flex items-center justify-center hover:bg-primary-foreground/20 dark:hover:bg-white/20 hover:scale-110 transition-all duration-200"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 dark:bg-white/10 flex items-center justify-center hover:bg-primary-foreground/20 dark:hover:bg-white/20 hover:scale-110 transition-all duration-200"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div> */}
          <p className="text-primary-foreground/80 dark:text-white/80 text-sm">
            &copy; {new Date().getFullYear()} Joe's Plumbing. All rights
            reserved.
          </p>
          <p className="text-primary-foreground/70 dark:text-white/70 text-xs">
            Website by <span className="font-semibold">Ferdinand Morena</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
