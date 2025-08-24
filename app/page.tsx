import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Heart, Sparkles, Users } from "lucide-react"
import { ModernHeroSection } from "@/components/hero/ModernHeroSection"
import { AvailableVehicles } from "@/components/AvailableVehicles"
import { FAQSection } from "@/components/FAQSection"
import { StoreLocations } from "@/components/StoreLocations"
import { ServicesSection } from "@/components/ServicesSection"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Modern Hero Section */}
      <ModernHeroSection />

      {/* Services Section - SEO optimized */}
      <ServicesSection />

      {/* Why choose */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-foreground mb-4">Your Trusted Local Bike Partner</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Locally-owned business committed to your safety. Every bike is thoroughly sanitized, 
                safety-inspected, and maintained to the highest standards before your ride.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <Card className="enterprise-card text-center p-8">
                <div className="w-16 h-16 rounded-xl bg-blue-600 text-white flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <Sparkles className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl mb-3">Sanitized & Safe</CardTitle>
                <CardDescription>
                  Every bike is deep-cleaned, sanitized with hospital-grade disinfectants, and safety-tested before each rental.
                </CardDescription>
              </Card>
              <Card className="enterprise-card text-center p-8">
                <div className="w-16 h-16 rounded-xl bg-orange-600 text-white flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <Users className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl mb-3">Local & Personal</CardTitle>
                <CardDescription>
                  Locally-owned Hyderabad business. We know our city, we care about our community, and we&apos;re here for you daily from 9 AM to 8 PM.
                </CardDescription>
              </Card>
              <Card className="enterprise-card text-center p-8">
                <div className="w-16 h-16 rounded-xl bg-green-600 text-white flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <Heart className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl mb-3">Safety First</CardTitle>
                <CardDescription>
                  Complete insurance coverage, quality helmets provided, thorough safety briefings, and emergency roadside assistance.
                </CardDescription>
              </Card>
            </div>
          </div>
        </div>
      </section>


      {/* Store Locations */}
      <StoreLocations />

      {/* FAQ Section */}
      <FAQSection />

    </div>
  )
}
