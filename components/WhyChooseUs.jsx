"use client"
import { Shield, Clock, Award, ThumbsUp } from "lucide-react"
import { motion } from "framer-motion"

export default function WhyChooseUs() {
  const reasons = [
    
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Call anytime - I'm always ready to help with plumbing emergencies.",
    },
    {
      icon: Award,
      title: "10+ Years Experience",
      description: "Over a decade of honest, quality work you can count on.",
    },
    {
      icon: ThumbsUp,
      title: "Fair & Honest Pricing",
      description: "Upfront quotes with no hidden fees. You'll know the cost before I start.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Joe</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A plumber who cares about doing the job right
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
              >
                <reason.icon className="w-8 h-8 text-primary-foreground" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
