"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import Link from "next/link"
import Image from "next/image"
import { Bike, MapPin, Image as ImageIcon, Zap, Shield, ChevronLeft, ChevronRight } from "lucide-react"
import { useBikes } from "@/hooks/use-bikes"
import { Database } from "@/types/database"

type Bike = Database['public']['Tables']['bikes']['Row']

function BikeCard({ bike }: { bike: Bike }) {
  
  return (
    <Card className={`rounded-2xl border border-slate-200 shadow-[0_10px_30px_rgba(2,6,23,0.06)] overflow-hidden h-full flex flex-col ${!bike.available ? 'opacity-75' : ''}`}>
      <div className="relative h-64 bg-slate-50 overflow-hidden">
        <div className="absolute left-3 top-3 z-10">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200/50">
            <Bike className="h-3.5 w-3.5 text-slate-400" /> {bike.type === 'scooter' ? 'Scooter' : 'Bike'}
          </span>
        </div>
        <div className="absolute right-3 top-3 z-10">
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
            className={`object-contain ${!bike.available ? 'grayscale' : ''}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="flex size-16 items-center justify-center rounded-full bg-white ring-1 ring-slate-200">
              <ImageIcon className="h-8 w-8 text-slate-400" />
            </div>
          </div>
        )}
      </div>
      <div className="px-6 pt-5 pb-6 flex-1 flex flex-col">
        <div className="mb-3">
          <h3 className="text-xl font-semibold text-slate-900">{bike.name}</h3>
        </div>
        
        <div className="mb-3">
          <div className="text-lg font-bold text-blue-700">
            Starts at ₹{bike.price_per_day}
            <span className="text-sm font-normal text-slate-500"> /day</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-slate-600 mb-4">
          <MapPin className="h-4 w-4 text-slate-400" />
          <span className="text-sm">{bike.location}</span>
        </div>

        {bike.features && bike.features.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {bike.features.slice(0, 4).map((feature, index) => (
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
            </div>
          </div>
        )}
        
        <div className="mt-auto">
          <Button 
            asChild 
            className={`w-full rounded-xl ${bike.available ? 'enterprise-button' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
            disabled={!bike.available}
          >
            {bike.available ? (
              <Link href="tel:+917996790039">Rent Now</Link>
            ) : (
              <span>Not Available</span>
            )}
          </Button>
        </div>
      </div>
    </Card>
  )
}

function BikeCardSkeleton() {
  return (
    <Card className="rounded-2xl border border-slate-200 shadow-[0_10px_30px_rgba(2,6,23,0.06)] overflow-hidden h-full flex flex-col">
      <div className="relative h-64 bg-slate-50 overflow-hidden">
        <div className="absolute left-3 top-3 z-10">
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
        <div className="absolute right-3 top-3 z-10">
          <Skeleton className="h-6 w-20 rounded-full" />
        </div>
        <Skeleton className="w-full h-full" />
      </div>
      <div className="px-6 pt-5 pb-6 flex-1 flex flex-col">
        <div className="mb-3">
          <Skeleton className="h-6 w-3/4" />
        </div>
        
        <div className="mb-3">
          <Skeleton className="h-6 w-32" />
        </div>
        
        <div className="flex items-center gap-2 mb-4">
          <Skeleton className="h-4 w-4 rounded" />
          <Skeleton className="h-4 w-24" />
        </div>

        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-6 w-18 rounded-full" />
          </div>
        </div>
        
        <div className="mt-auto">
          <Skeleton className="h-10 w-full rounded-xl" />
        </div>
      </div>
    </Card>
  )
}

export function AvailableVehicles() {
  const { bikes, loading, error } = useBikes()
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])
  
  if (loading) {
    return (
      <section className="bg-gradient-to-b from-slate-50 to-white py-10 md:py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <Skeleton className="h-8 w-64 mx-auto mb-2" />
            <Skeleton className="h-5 w-96 mx-auto" />
          </div>
          
          <div className="relative">
            <div className="flex gap-2 md:gap-4 overflow-hidden">
              {/* Show 3 skeleton cards on desktop, 2 on tablet, 1 on mobile */}
              <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-1">
                <BikeCardSkeleton />
              </div>
              <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-1 hidden sm:block">
                <BikeCardSkeleton />
              </div>
              <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-1 hidden lg:block">
                <BikeCardSkeleton />
              </div>
            </div>
            
            {/* Skeleton navigation arrows */}
            <div className="hidden md:flex absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2">
              <Skeleton className="h-10 w-10 lg:h-12 lg:w-12 rounded-full" />
            </div>
            <div className="hidden md:flex absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2">
              <Skeleton className="h-10 w-10 lg:h-12 lg:w-12 rounded-full" />
            </div>
            
            {/* Mobile skeleton arrows */}
            <div className="md:hidden absolute left-2 top-1/2 -translate-y-1/2">
              <Skeleton className="h-8 w-8 rounded-full" />
            </div>
            <div className="md:hidden absolute right-2 top-1/2 -translate-y-1/2">
              <Skeleton className="h-8 w-8 rounded-full" />
            </div>
          </div>
          
          {/* Mobile skeleton dots */}
          <div className="flex justify-center mt-6 gap-2 md:hidden">
            <Skeleton className="h-2 w-8 rounded-full" />
            <Skeleton className="h-2 w-2 rounded-full" />
            <Skeleton className="h-2 w-2 rounded-full" />
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Available Vehicles</h2>
          <p className="text-slate-600">Choose from our fleet of well-maintained bikes and scooters</p>
        </div>
        
        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {bikes.map((bike) => (
                <CarouselItem key={bike.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="h-full p-1">
                    <BikeCard bike={bike} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Desktop navigation arrows */}
            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12 h-10 w-10 lg:h-12 lg:w-12 border-slate-200 bg-white/90 backdrop-blur hover:bg-white shadow-lg">
              <ChevronLeft className="h-5 w-5 lg:h-6 lg:w-6" />
            </CarouselPrevious>
            <CarouselNext className="hidden md:flex -right-4 lg:-right-12 h-10 w-10 lg:h-12 lg:w-12 border-slate-200 bg-white/90 backdrop-blur hover:bg-white shadow-lg">
              <ChevronRight className="h-5 w-5 lg:h-6 lg:w-6" />
            </CarouselNext>
          </Carousel>
          
          {/* Mobile navigation arrows */}
          <button
            onClick={() => api?.scrollPrev()}
            className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-white/90 backdrop-blur shadow-md flex items-center justify-center"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => api?.scrollNext()}
            className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-white/90 backdrop-blur shadow-md flex items-center justify-center"
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        
        {/* Mobile pagination dots */}
        <div className="flex justify-center mt-6 gap-2 md:hidden">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 transition-all ${
                current === index + 1
                  ? "w-8 bg-slate-600"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              } rounded-full`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}