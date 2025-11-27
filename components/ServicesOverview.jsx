"use client"
import Link from "next/link"
import ServiceCard from "./ServiceCard"
import Button from "./Button"
import { Wrench, Droplets, ShowerHead, Thermometer } from "lucide-react"
import { motion } from "framer-motion"

export default function ServicesOverview() {
  const services = [
    {
      icon: Wrench,
      title: "Emergency Repairs",
      description: "Available 24/7 for urgent plumbing issues with fast response times.",
    },
    {
      icon: Droplets,
      title: "Leak Detection",
      description: "Advanced technology to find and fix hidden water leaks quickly.",
    },
    {
      icon: ShowerHead,
      title: "Bathroom Installations",
      description: "Complete bathroom plumbing installations and renovations.",
    },
    {
      icon: Thermometer,
      title: "Water Heater Services",
      description: "Installation, repair, and maintenance of all water heater types.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive plumbing solutions for residential and commercial properties
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/services">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" className="bg-transparent">
                View All Services
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
