import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ScrollToTop from "../components/ScrollToTop"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Joe's Plumbing | Expert Plumbing Services",
  description:
    "Joe's Plumbing - Plumbing services available 24/7. Trusted for over 10 years. Emergency repairs, installations, and maintenance.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollToTop />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
