import { Award, Clock, Users, CheckCircle } from "lucide-react"

export default function About() {
  return (
    <main className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Joe</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A plumber who treats your home like his own
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Hi, I'm Joe</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              I've been fixing leaky faucets, unclogging drains, and installing water heaters since 2014. What started
              with just me, a van, and a toolbox has grown thanks to word-of-mouth from satisfied customers like you.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              I believe in doing the job right the first time, being upfront about costs, and treating every home with
              respect. No job is too small, and I'm always happy to answer questions or give advice - even if it saves
              you a service call!
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not fixing pipes, you'll find me coaching little league or spending time with family. I love
              being part of this community.
            </p>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/professional-plumber-at-work.jpg"
              alt="Professional plumber"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-card p-8 rounded-xl shadow-md text-center">
            <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-foreground mb-2">10+</h3>
            <p className="text-muted-foreground">Years of Experience</p>
          </div>
          <div className="bg-card p-8 rounded-xl shadow-md text-center">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-foreground mb-2">500+</h3>
            <p className="text-muted-foreground">Homes Served</p>
          </div>
          <div className="bg-card p-8 rounded-xl shadow-md text-center">
            <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-foreground mb-2">24/7</h3>
            <p className="text-muted-foreground">Emergency Service</p>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-card p-10 rounded-2xl shadow-md mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Qualified & Trained</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Insured</h3>
                <p className="text-muted-foreground">Comprehensive insurance coverage for your peace of mind</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">EPA Certified</h3>
                <p className="text-muted-foreground">
                  Certified in environmental protection and safe disposal practices
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Background Checked</h3>
                <p className="text-muted-foreground">You can trust me in your home - background verified</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Always Learning</h3>
                <p className="text-muted-foreground">
                  Regular training on the latest plumbing technologies and best practices
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Meet the Plumber */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-12">That's Me!</h2>
          <div className="max-w-2xl mx-auto bg-card p-10 rounded-2xl shadow-md">
            <img
              src="/professional-plumber-portrait.png"
              alt="Joe - Your Plumber"
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
            />
            <h3 className="text-2xl font-bold text-foreground mb-2">Joe Martinez</h3>
            <p className="text-primary font-semibold mb-4">Master Plumber</p>
            <p className="text-muted-foreground leading-relaxed">
              I started this business over 10 years ago because I wanted to be my own boss and serve my community the
              right way. Every customer matters to me, and I take pride in doing quality work at fair prices. Give me a
              call anytime - I'm here to help!
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
