import { Star } from "lucide-react"

export default function TestimonialCard({ name, location, rating, text }) {
  return (
    <div className="bg-card p-6 rounded-xl shadow-md border border-border">
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-muted-foreground mb-4 leading-relaxed italic">"{text}"</p>
      <div>
        <p className="font-semibold text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{location}</p>
      </div>
    </div>
  )
}
