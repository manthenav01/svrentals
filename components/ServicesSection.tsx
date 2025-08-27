import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Shield, 
  MapPin, 
  Calendar, 
  Bike, 
  DollarSign, 
  Clock,
 
} from "lucide-react"

const services = [
  {
    icon: Shield,
    title: "Sanitized & Clean Bikes",
    description: "Every bike is thoroughly sanitized and deep-cleaned before each rental. Hospital-grade disinfection ensures your safety and hygiene with every ride.",
    keywords: "sanitized bikes, clean vehicles, disinfected bikes, hygiene safety"
  },
  {
    icon: Bike,
    title: "Wide Range of Vehicles",
    description: "From fuel-efficient scooters to powerful motorcycles. Choose from Activa, Apache, Pulsar, Royal Enfield, and many more premium brands.",
    keywords: "scooter rental, bike rental, motorcycle rental, Activa, Apache, Pulsar, Royal Enfield"
  },
  {
    icon: MapPin,
    title: "Multiple Pickup Points",
    description: "Convenient pickup and drop-off locations across Hyderabad. Book from home, office, or any location that suits your schedule.",
    keywords: "pickup points, drop-off locations, convenient locations, Hyderabad bike rental"
  },
  {
    icon: DollarSign,
    title: "Affordable Rates",
    description: "Transparent pricing with no hidden charges. Best rates in Hyderabad starting from just ₹399/day with fuel-efficient vehicles.",
    keywords: "affordable rates, cheap bike rental, transparent pricing, best rates Hyderabad"
  },
  {
    icon: Calendar,
    title: "Flexible Rental Plans",
    description: "Daily, weekly, and monthly rental packages. Long-term discounts available. Perfect for tourists, students, and working professionals.",
    keywords: "daily rental, weekly rental, monthly rental, flexible plans, long-term discount"
  },
  {
    icon: Clock,
    title: "Daily Service Hours",
    description: "Open daily from 9 AM to 8 PM with instant booking. Emergency roadside assistance and customer support during business hours.",
    keywords: "daily service, 9am-8pm, instant booking, roadside assistance, customer support"
  }
]


export function ServicesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Premium Bike & Scooter Rental Services in Hyderabad
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Experience the freedom of two-wheeler rentals with SV Rentals. From daily commutes to weekend adventures, 
              we provide the most reliable and affordable bike rental services in Hyderabad with unmatched convenience.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="enterprise-card h-full hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl mb-3">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>


          {/* SEO Text Block */}
          <div className="mt-16 prose prose-lg max-w-none">
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Best Bike Rental Service in Hyderabad - SV Rentals
              </h3>
              <div className="grid md:grid-cols-2 gap-8 text-gray-700">
                <div>
                  <p className="mb-4">
                    <strong>SV Rentals</strong> is Hyderabad&apos;s most trusted bike rental service, offering a comprehensive fleet of 
                    well-maintained motorcycles and scooters. Whether you need a <strong>scooter for daily commuting</strong>, 
                    a <strong>bike for weekend trips</strong>, or a <strong>long-term rental solution</strong>, we have the perfect 
                    vehicle for your needs.
                  </p>
                  <p className="mb-4">
                    Our <strong>affordable rental rates</strong> start from just ₹399/day, making us the most 
                    cost-effective choice for bike rentals in Hyderabad. We offer <strong>daily, weekly, and monthly rental packages</strong> 
                    with significant discounts for long-term bookings.
                  </p>
                </div>
                <div>
                  <p className="mb-4">
                    With <strong>multiple pickup points</strong> across Hyderabad including Kukatpally, Madhapur, and other prime locations, 
                    we ensure maximum convenience for our customers. Our <strong>daily service (9 AM - 8 PM)</strong> includes instant booking, 
                    emergency roadside assistance, and dedicated customer support.
                  </p>
                  <p>
                    Every rental includes <strong>free ISI-certified helmets</strong>, comprehensive insurance coverage, 
                    and thoroughly sanitized vehicles. Experience the difference with SV Rentals - your reliable partner 
                    for <strong>bike rentals in Hyderabad</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}