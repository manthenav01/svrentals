"use client"

import { useState } from "react"
import { MapPin, Phone, Clock, Star, Navigation } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const locations = [
  {
    id: 1,
    name: "SV Rentals",
    address: "8-3-389/2/A, near Metro Pillar No-A1057, opp. South Indian Shopping Mall, Ameerpet, Hyderabad, Telangana 500073",
    phone: "+91 98765 43210",
    hours: "Open 24/7",
    rating: 4.9,
    reviews: 2196,
    mapUrl: "https://maps.google.com/maps?q=17.4947,78.3996",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2974177583475!2d78.39760001487727!3d17.494700088001234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI5JzQwLjkiTiA3OMKwMjMnNTguNiJF!5e0!3m2!1sen!2sin!4v1234567890",
    lat: 17.4947,
    lng: 78.3996
  }
]

export function StoreLocations() {
  const [selectedLocation, setSelectedLocation] = useState(locations[0])

  const handleDirections = (location: typeof locations[0]) => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`,
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
              Open 24/7 for your convenience.
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
                    
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{location.rating}</span>
                      <span className="text-muted-foreground">
                        ({location.reviews} reviews)
                      </span>
                    </div>
                    
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
                  src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${selectedLocation.lat},${selectedLocation.lng}&zoom=15`}
                  title={`Map showing ${selectedLocation.name}`}
                />
              </Card>
            </div>
          </div>

          {/* Note about API Key */}
          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> To display the interactive map, you'll need to:
            </p>
            <ol className="text-sm text-yellow-700 mt-2 ml-5 list-decimal">
              <li>Get a Google Maps API key from the <a href="https://console.cloud.google.com/google/maps-apis/overview" target="_blank" rel="noopener noreferrer" className="underline">Google Cloud Console</a></li>
              <li>Enable the Maps Embed API</li>
              <li>Replace "YOUR_API_KEY" in the iframe src with your actual API key</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}