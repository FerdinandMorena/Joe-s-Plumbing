import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ScrollToTop from "../components/ScrollToTop"
import { ThemeProvider } from "../components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Joe's Plumbing | Emergency & Residential Plumbing Services",
  description:
    "Joe's Plumbing offers 24/7 emergency plumbing, leak repair, drain cleaning, bathroom installations, and water heater services. Trusted local plumber with over 10 years of experience.",
  metadataBase: new URL("https://www.example.com"),
  keywords: [
    "plumber",
    "emergency plumber",
    "24/7 plumbing",
    "leak detection",
    "drain cleaning",
    "water heater repair",
    "bathroom plumbing",
    "local plumber",
    "plumbing services",
  ],
  authors: [{ name: "Joe's Plumbing" }],
  openGraph: {
    title: "Joe's Plumbing | 24/7 Emergency & Residential Plumbing Services",
    description:
      "Fast, reliable plumbing services including emergency repairs, leak detection, drain cleaning, and water heater installation. Serving local homes and businesses for over a decade.",
    url: "/",
    siteName: "Joe's Plumbing",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
}

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
  )
}
