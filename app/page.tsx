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

      {/* Available Vehicles */}
      <AvailableVehicles />
      
      {/* Services Section - SEO optimized */}
      <ServicesSection />





      {/* Store Locations */}
      <StoreLocations />

      {/* FAQ Section */}
      <FAQSection />

    </div>
  )
}
