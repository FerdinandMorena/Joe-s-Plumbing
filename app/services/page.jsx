"use client"
import ServiceCard from "../../components/ServiceCard"
import { Wrench, Droplets, ShowerHead, Thermometer, Zap, Shield } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: Wrench,
    title: "Emergency Repairs",
    description: "Available 24/7 for urgent plumbing issues. Fast response time guaranteed.",
  },
  {
    icon: Droplets,
    title: "Leak Detection & Repair",
    description: "Advanced leak detection technology to find and fix hidden water leaks.",
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
  {
    icon: Zap,
    title: "Drain Cleaning",
    description: "Professional drain cleaning and hydro-jetting services.",
  },
  {
    icon: Shield,
    title: "Preventive Maintenance",
    description: "Regular maintenance plans to prevent costly plumbing emergencies.",
  },
]

export default function Services() {
  return (
    <main className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional plumbing solutions for residential and commercial properties
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </main>
  )
}
