"use client"

import { useBikes } from "@/hooks/use-bikes"
import { Database } from "@/types/database"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Bike, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

type BikeType = Database['public']['Tables']['bikes']['Row']

function PricingCard({ bike }: { bike: BikeType }) {
  // For Royal Enfield Classic 350, make "Per Day" the most popular option
  const isRoyalEnfield = bike.name === 'Royal Enfield Classic 350'
  
  const pricing = [
    { label: "Per Day", value: bike.price_per_day, popular: isRoyalEnfield },
    { label: "Per Week", value: bike.price_per_week, popular: !isRoyalEnfield },
    { label: "15 Days", value: Math.round(bike.price_per_week * 2.1), popular: false },
    { label: "30 Days", value: bike.price_per_month, popular: false },
  ]

  return (
    <Card className="rounded-2xl border border-slate-200 shadow-[0_10px_30px_rgba(2,6,23,0.06)] overflow-hidden h-full flex flex-col hover:shadow-[0_20px_40px_rgba(2,6,23,0.12)] transition-shadow duration-300">
      <div className="relative h-48 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
        {bike.image_url ? (
          <Image
            src={bike.image_url}
            alt={bike.name}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <Bike className="h-16 w-16 text-slate-300" />
          </div>
        )}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200/50">
            <Bike className="h-3.5 w-3.5 text-slate-400" /> {bike.type === 'scooter' ? 'Scooter' : 'Bike'}
          </span>
        </div>
      </div>
      
      <div className="px-6 pt-5 pb-6 flex-1 flex flex-col">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-slate-900 mb-1">{bike.name}</h3>
          <div className="flex items-center gap-2 text-slate-600">
            <MapPin className="h-4 w-4 text-slate-400" />
            <span className="text-sm">{bike.location}</span>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          {pricing.map((plan, index) => (
            <div 
              key={index} 
              className={`relative flex items-center justify-between p-3 rounded-lg border ${
                plan.popular 
                  ? 'border-emerald-500 bg-emerald-50/50' 
                  : 'border-slate-200 bg-white'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-2 right-3 px-2 py-0.5 text-xs font-medium bg-emerald-500 text-white rounded-full">
                  Most Popular
                </span>
              )}
              <span className="text-sm font-medium text-slate-700">{plan.label}</span>
              <span className="text-lg font-bold text-slate-900">₹{plan.value}</span>
            </div>
          ))}
        </div>

        <div className="space-y-2 mb-6">
          {bike.features && bike.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-slate-600">
              <Check className="h-4 w-4 text-emerald-500 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto">
          <Button 
            asChild 
            className="w-full rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-medium"
            disabled={!bike.available}
          >
            {bike.available ? (
              <Link href="tel:+917996790039">Book Now</Link>
            ) : (
              <span>Currently Unavailable</span>
            )}
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default function PricingPage() {
  const { bikes, loading, error } = useBikes()

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <div className="text-lg text-slate-600">Loading pricing information...</div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <div className="text-lg text-red-600">Error loading pricing: {error}</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Transparent <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Pricing</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the perfect rental duration for your needs. From daily commutes to monthly adventures, we've got you covered with competitive rates.
          </p>
        </div>

        <div className="mb-8 p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border border-emerald-200">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-emerald-600" />
              <span className="font-medium text-slate-800">No Hidden Charges</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-emerald-600" />
              <span className="font-medium text-slate-800">Free Helmet & Documents</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-emerald-600" />
              <span className="font-medium text-slate-800">24/7 Support</span>
            </div>
          </div>
        </div>

        {bikes.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-lg text-slate-600">No vehicles available at the moment.</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {bikes.map((bike) => (
              <PricingCard key={bike.id} bike={bike} />
            ))}
          </div>
        )}

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Need a Custom Package?</h2>
            <p className="text-slate-200 mb-6 max-w-2xl mx-auto">
              Planning a long-term rental or have specific requirements? Contact us for personalized pricing and exclusive deals.
            </p>
            <Button 
              asChild 
              className="bg-white text-slate-900 hover:bg-slate-100 font-medium px-8 py-3 rounded-xl"
            >
              <Link href="tel:+917996790039">
                Call Now: +91 7996790039
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}