import Hero from "../components/Hero"
import ServicesOverview from "../components/ServicesOverview"
import WhyChooseUs from "../components/WhyChooseUs"
import Testimonials from "../components/Testimonials"

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <Testimonials />
    </main>
  )
}
