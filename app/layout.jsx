import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { ThemeProvider } from "../components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Joe's Plumbing | Plumbers Around Seshego (Polokwane)",
    template: "%s | Joe's Plumbing",
  },
  description:
    "Joe's Plumbing provides fast, affordable plumbing services in Seshego and around Polokwane. 24/7 emergency plumber for leaks, blocked drains, geysers, toilets, taps, and bathroom installations.",
  metadataBase: new URL("https://joe-s-plumbing.vercel.app"),
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/logo.png", type: "image/png" }],
  },
  keywords: [
    // Core
    "plumber",
    "plumbing services",
    "emergency plumber",
    "24/7 plumber",

    // Location intent
    "plumbers around seshego",
    "plumber seshego",
    "seshego plumber",
    "plumber near me seshego",
    "plumber polokwane",
    "plumbing services seshego",
    "plumbing services polokwane",

    // Services
    "leak repair",
    "leak detection",
    "blocked drain",
    "drain cleaning",
    "toilet repair",
    "tap repair",
    "geyser repair",
    "water heater repair",
    "bathroom plumbing",
    "bathroom installation",
  ],
  authors: [{ name: "Joe's Plumbing" }],
  openGraph: {
    title: "Joe's Plumbing | Plumbers Around Seshego (Polokwane)",
    description:
      "Trusted local plumber in Seshego and Polokwane. Emergency call-outs, leak repairs, blocked drains, geysers, toilets, taps, and bathroom installations.",
    url: "/",
    siteName: "Joe's Plumbing",
    type: "website",
    locale: "en_ZA",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Joe's Plumbing - Plumber in Seshego and Polokwane",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joe's Plumbing | Plumbers Around Seshego (Polokwane)",
    description:
      "Emergency plumber in Seshego & Polokwane. Leaks, blocked drains, geysers, toilets, taps, and bathroom installations.",
    images: ["/hero.png"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ScrollToTop />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
