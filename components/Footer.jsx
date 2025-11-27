import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-foreground/10 dark:bg-white/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-foreground dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold">Joe's Plumbing</span>
            </div>
            <p className="text-primary-foreground/80 dark:text-white/80 mb-4">Ready to help with all your plumbing needs.</p>
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
                <span className="text-primary-foreground/80 dark:text-white/80">info@joesplumbing.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-primary-foreground dark:text-white flex-shrink-0 mt-1" />
                <span className="text-primary-foreground/80 dark:text-white/80">
                  123 Main Street
                  <br />
                  Anytown, ST 12345
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
              <li className="text-primary-foreground dark:text-white font-semibold pt-2">24/7 Emergency Service</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 dark:border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/80 dark:text-white/80 text-sm">Joe's Plumbing - Serving since 2014</p>
          <div className="flex gap-4">
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
          </div>
        </div>
      </div>
    </footer>
  )
}
