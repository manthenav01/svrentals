import { Metadata } from "next"
import { Card } from "@/components/ui/card"
import { Shield, Heart, Users, MapPin, Clock, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "About SV Rentals - Safe & Sanitized Bike Rentals in Hyderabad",
  description: "Learn about SV Rentals, Hyderabad&apos;s trusted locally-owned bike rental service. We prioritize safety, cleanliness, and community with thoroughly sanitized bikes and professional service.",
  keywords: [
    "about SV Rentals",
    "bike rental Hyderabad",
    "safe bike rental",
    "sanitized bike rental", 
    "local bike rental Hyderabad",
    "family owned bike rental",
    "trusted bike rental service"
  ],
  openGraph: {
    title: "About SV Rentals - Safe & Sanitized Bike Rentals in Hyderabad",
    description: "Hyderabad&apos;s trusted locally-owned bike rental service prioritizing safety, cleanliness, and community service.",
    type: "website",
  },
  alternates: {
    canonical: "/about"
  }
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Trusted Local Bike Rental Partner
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              SV Rentals is Hyderabad&apos;s premier locally-owned bike rental service, committed to providing 
              safe, sanitized, and reliable transportation solutions for our community since our founding.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-semibold text-foreground mb-6">
                  Born and Raised in Hyderabad
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  As a locally-owned business rooted in Hyderabad, we understand the unique transportation 
                  needs of our city. From navigating busy streets to finding the perfect bike for weekend 
                  adventures, we&apos;ve been serving our community with dedication and care.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our local expertise means we know the best routes, understand traffic patterns, and 
                  can recommend the perfect bike for your specific needs in Hyderabad.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="enterprise-card text-center p-6">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Local Experts</h3>
                  <p className="text-sm text-muted-foreground">Born in Hyderabad</p>
                </Card>
                <Card className="enterprise-card text-center p-6">
                  <Users className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Locally Owned</h3>
                  <p className="text-sm text-muted-foreground">Personal Service</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                Our Commitment to You
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Every bike rental experience with SV Rentals is built on three core principles 
                that define who we are and how we serve our community.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="enterprise-card text-center p-8">
                <div className="w-16 h-16 rounded-xl bg-green-600 text-white flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Safety First Always</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every bike undergoes rigorous safety inspections, complete maintenance checks, 
                  and quality testing before each rental. Your safety is our top priority.
                </p>
              </Card>
              
              <Card className="enterprise-card text-center p-8">
                <div className="w-16 h-16 rounded-xl bg-blue-600 text-white flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Hospital-Grade Sanitization</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Each bike is thoroughly cleaned and sanitized with hospital-grade disinfectants 
                  between rentals, ensuring a hygienic experience every time.
                </p>
              </Card>
              
              <Card className="enterprise-card text-center p-8">
                <div className="w-16 h-16 rounded-xl bg-orange-600 text-white flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Community Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  As your neighbors, we&apos;re invested in building lasting relationships through 
                  exceptional service, fair pricing, and genuine care for our community.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-foreground mb-8">
              Why Hyderabad Trusts SV Rentals
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-left">
                <Clock className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Available When You Need Us
                </h3>
                <p className="text-muted-foreground">
                  Flexible pickup times, 24/7 customer support, and emergency assistance. 
                  We&apos;re here for you around the clock.
                </p>
              </div>
              
              <div className="text-left">
                <MapPin className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Know Every Corner of the City
                </h3>
                <p className="text-muted-foreground">
                  Local insights, route recommendations, and area expertise that only 
                  comes from years of serving Hyderabad residents.
                </p>
              </div>
            </div>
            
            <div className="mt-12 p-8 bg-blue-50 rounded-xl">
              <p className="text-lg text-foreground font-medium mb-4">
                &quot;At SV Rentals, every bike tells a story of safety, every rental builds community trust, 
                and every customer becomes part of our local community.&quot;
              </p>
              <p className="text-muted-foreground">— The SV Rentals Team</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}