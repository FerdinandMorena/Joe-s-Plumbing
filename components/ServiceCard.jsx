"use client"
import { motion } from "framer-motion"

export default function ServiceCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <motion.div
      className="bg-card p-6 rounded-xl shadow-md border border-border"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        y: -8,
        boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        transition: { duration: 0.3 },
      }}
    >
      <motion.div
        className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <Icon className="w-6 h-6 text-primary" />
      </motion.div>
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  )
}
