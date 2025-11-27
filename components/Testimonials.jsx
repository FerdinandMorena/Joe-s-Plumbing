import TestimonialCard from "./TestimonialCard"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Anytown, ST",
      rating: 5,
      text: "Excellent service! They responded quickly to our emergency leak and fixed it professionally. Highly recommend!",
    },
    {
      name: "Michael Chen",
      location: "Anytown, ST",
      rating: 5,
      text: "Very professional and knowledgeable. They installed our new water heater and explained everything clearly.",
    },
    {
      name: "Emily Rodriguez",
      location: "Anytown, ST",
      rating: 5,
      text: "Best plumber we've ever worked with. Fair pricing, quality work, and friendly service. Will definitely call again!",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
