"use client"

import { useState } from "react"
import { MapPin, Phone, Clock, Navigation } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const locations = [
  {
    id: 1,
    name: "SV Rentals",
    address: "MIG 3rd Phase, Sathibabu Biryani Backside, 15-31-2M-41/1, Kukatpally Housing Board Colony, Kukatpally, Hyderabad, Telangana 500072, India",
    phone: "+91 79967 90039",
    hours: "9 AM - 8 PM",
    mapUrl: "https://maps.google.com/maps?q=17.4843,78.3907",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5!2d78.3907!3d17.4843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI5JzEwLjMiTiA3OMKwMjMnMjYuNSJF!5e0!3m2!1sen!2sin!4v1234567890",
    lat: 17.4843,
    lng: 78.3907
  }
]

export function StoreLocations() {
  const [selectedLocation, setSelectedLocation] = useState(locations[0])

  const handleDirections = (location: typeof locations[0]) => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.address)}`,
      '_blank'
    )
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-4">
              Visit Our Store
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Conveniently located in Hyderabad to serve you better. 
              Open daily from 9 AM to 8 PM for your convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Location Cards */}
            <div className="lg:col-span-1 space-y-4">
              {locations.map((location) => (
                <Card 
                  key={location.id}
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    selectedLocation.id === location.id 
                      ? 'ring-2 ring-emerald-600 shadow-lg' 
                      : ''
                  }`}
                  onClick={() => setSelectedLocation(location)}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-start justify-between">
                      <span>{location.name}</span>
                      <MapPin className="h-5 w-5 text-emerald-600 shrink-0" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      {location.address}
                    </p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-emerald-600" />
                        <span>{location.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-emerald-600" />
                        <span className="text-green-600 font-medium">{location.hours}</span>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={(e) => {
                        e.stopPropagation()
                        handleDirections(location)
                      }}
                      className="w-full mt-3 bg-emerald-600 hover:bg-emerald-700"
                      size="sm"
                    >
                      <Navigation className="h-4 w-4 mr-2" />
                      Get Directions
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map */}
            <div className="lg:col-span-2">
              <Card className="h-full overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0, height: '400px' }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=SV+Rentals,+${encodeURIComponent(selectedLocation.address)}&zoom=15`}
                  title={`Map showing ${selectedLocation.name}`}
                />
              </Card>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}