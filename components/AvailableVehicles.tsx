"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Bike, MapPin, Image as ImageIcon, Star, Zap, Shield } from "lucide-react"
import { useBikes } from "@/hooks/use-bikes"
import { Database } from "@/types/database"

type Bike = Database['public']['Tables']['bikes']['Row']

function BikeCard({ bike }: { bike: Bike }) {
  
  return (
    <Card className="rounded-2xl border border-slate-200 shadow-[0_10px_30px_rgba(2,6,23,0.06)] overflow-hidden h-full flex flex-col">
      <div className="relative h-48 bg-slate-100 flex items-center justify-center">
        <div className="absolute left-3 top-3">
          <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
            <Bike className="h-3.5 w-3.5 text-slate-400" /> Bike
          </span>
        </div>
        <div className="absolute right-3 top-3">
          <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium text-white ${
            bike.available ? 'bg-slate-900' : 'bg-red-500'
          }`}>
            {bike.available ? 'Available' : 'Unavailable'}
          </span>
        </div>
        {bike.image_url ? (
          <Image
            src={bike.image_url} 
            alt={bike.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex size-12 items-center justify-center rounded-full bg-white/70 ring-1 ring-slate-200">
            <ImageIcon className="h-6 w-6 text-slate-400" />
          </div>
        )}
      </div>
      <div className="px-6 pt-5 pb-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-xl font-semibold text-slate-900">{bike.name}</h3>
          {bike.rating && (
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="text-sm font-medium text-slate-600">{bike.rating}</span>
            </div>
          )}
        </div>
        
        <div className="mb-3">
          <div className="text-lg font-bold text-blue-700">
            Starts at ₹{Math.min(bike.price_per_hour * 8, bike.price_per_day)}
            <span className="text-sm font-normal text-slate-500"> /day</span>
          </div>
          <div className="text-xs text-slate-500">₹{bike.price_per_hour}/hour</div>
        </div>
        
        <div className="flex items-center gap-2 text-slate-600 mb-4">
          <MapPin className="h-4 w-4 text-slate-400" />
          <span className="text-sm">{bike.location}</span>
        </div>

        {bike.features && bike.features.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {bike.features.slice(0, 3).map((feature, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-100 text-xs text-slate-600"
                >
                  {feature.toLowerCase().includes('engine') && <Zap className="h-3 w-3" />}
                  {feature.toLowerCase().includes('brake') && <Shield className="h-3 w-3" />}
                  {feature.toLowerCase().includes('led') && <Zap className="h-3 w-3" />}
                  {feature}
                </span>
              ))}
              {bike.features.length > 3 && (
                <span className="inline-flex items-center px-2 py-1 rounded-full bg-slate-100 text-xs text-slate-500">
                  +{bike.features.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}
        
        <div className="mt-auto">
          <Button 
            asChild 
            className="enterprise-button w-full rounded-xl"
            disabled={!bike.available}
          >
            <Link href="tel:+917996790039">Rent Now</Link>
          </Button>
        </div>
      </div>
    </Card>
  )
}

export function AvailableVehicles() {
  const { bikes, loading, error } = useBikes({ available: true })
  
  if (loading) {
    return (
      <section className="bg-gradient-to-b from-slate-50 to-white py-10 md:py-14">
        <div className="container mx-auto container-padding">
          <div className="text-center">
            <div className="text-lg text-slate-600">Loading available bikes...</div>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="bg-gradient-to-b from-slate-50 to-white py-10 md:py-14">
        <div className="container mx-auto container-padding">
          <div className="text-center">
            <div className="text-lg text-red-600">Error loading bikes: {error}</div>
          </div>
        </div>
      </section>
    )
  }

  if (bikes.length === 0) {
    return (
      <section className="bg-gradient-to-b from-slate-50 to-white py-10 md:py-14">
        <div className="container mx-auto container-padding">
          <div className="text-center">
            <div className="text-lg text-slate-600">No bikes available at the moment.</div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-10 md:py-14">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-foreground mb-4">Available Bikes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our premium collection of well-maintained bikes
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {bikes.map((bike) => (
            <BikeCard 
              key={bike.id} 
              bike={bike}
            />
          ))}
        </div>
      </div>
    </section>
  )
}