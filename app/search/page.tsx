"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { Suspense, useState, useEffect } from "react"
import { format } from "date-fns"
import { MapPin, Calendar as CalendarIcon, Clock, ArrowLeft, Search, Check, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command"
import Link from "next/link"
import { AvailableVehicles } from "@/components/AvailableVehicles"
import { cn } from "@/lib/utils"

function SearchResultsContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  
  // Extract initial search parameters from URL
  const initialLocation = searchParams.get("location") || ""
  const initialPickupDate = searchParams.get("pickupDate") || ""
  const initialReturnDate = searchParams.get("returnDate") || ""
  
  // State for editable search parameters
  const [location, setLocation] = useState(initialLocation)
  const [pickupDate, setPickupDate] = useState<Date | undefined>(
    initialPickupDate ? new Date(initialPickupDate) : undefined
  )
  const [returnDate, setReturnDate] = useState<Date | undefined>(
    initialReturnDate ? new Date(initialReturnDate) : undefined
  )
  
  // Popover states
  const [openLocation, setOpenLocation] = useState(false)
  const [openPickupDate, setOpenPickupDate] = useState(false)
  const [openReturnDate, setOpenReturnDate] = useState(false)
  
  const locations = [
    "Kukatpally, Hyderabad",
    "Madhapur, Hyderabad",
    "Ameerpet, Hyderabad",
    "Secunderabad, Hyderabad",
    "Gachibowli, Hyderabad",
    "Begumpet, Hyderabad",
    "Kondapur, Hyderabad",
    "Miyapur, Hyderabad",
    "Bachupally, Hyderabad",
    "Nizampet, Hyderabad"
  ]
  
  // Update states when URL params change
  useEffect(() => {
    setLocation(initialLocation)
    setPickupDate(initialPickupDate ? new Date(initialPickupDate) : undefined)
    setReturnDate(initialReturnDate ? new Date(initialReturnDate) : undefined)
  }, [initialLocation, initialPickupDate, initialReturnDate])
  
  // Handle search update
  const handleSearchUpdate = () => {
    const newSearchParams = new URLSearchParams()
    
    if (location) {
      newSearchParams.append("location", location)
    }
    
    if (pickupDate) {
      newSearchParams.append("pickupDate", pickupDate.toISOString())
    }
    
    if (returnDate) {
      newSearchParams.append("returnDate", returnDate.toISOString())
    }
    
    router.push(`/search?${newSearchParams.toString()}`)
  }
  
  // TODO: In the future, this payload will be sent to the API
  const searchPayload = {
    location,
    pickupDate: pickupDate?.toISOString(),
    returnDate: returnDate?.toISOString()
  }
  
  console.log("Search payload:", searchPayload) // For development
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-2xl font-semibold">Search Results</h1>
          </div>
        </div>
      </div>
      
      {/* Editable Search Criteria */}
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            
            {/* Location Dropdown */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-600" />
                Pickup Location
              </label>
              <Popover open={openLocation} onOpenChange={setOpenLocation}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={openLocation}
                    className="w-full justify-between h-12 rounded-lg border-2 border-gray-200 hover:border-gray-300"
                  >
                    {location || "All Locations"}
                    <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[280px] p-0">
                  <Command>
                    <CommandList>
                      <CommandGroup>
                        <CommandItem
                          value=""
                          onSelect={() => {
                            setLocation("")
                            setOpenLocation(false)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              location === "" ? "opacity-100" : "opacity-0"
                            )}
                          />
                          All Locations
                        </CommandItem>
                        {locations.map((loc) => (
                          <CommandItem
                            key={loc}
                            value={loc}
                            onSelect={(currentValue) => {
                              setLocation(currentValue === location ? "" : currentValue)
                              setOpenLocation(false)
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                location === loc ? "opacity-100" : "opacity-0"
                              )}
                            />
                            {loc}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>

            {/* Pickup Date Calendar */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-emerald-600" />
                Pickup Date
              </label>
              <Popover open={openPickupDate} onOpenChange={setOpenPickupDate}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal h-12 rounded-lg border-2 border-gray-200 hover:border-gray-300",
                      !pickupDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {pickupDate ? format(pickupDate, "PPP") : <span>Select date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={pickupDate}
                    onSelect={(date) => {
                      setPickupDate(date)
                      setOpenPickupDate(false)
                    }}
                    disabled={(date) =>
                      date < new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Return Date Calendar */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-600" />
                Return Date
              </label>
              <Popover open={openReturnDate} onOpenChange={setOpenReturnDate}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal h-12 rounded-lg border-2 border-gray-200 hover:border-gray-300",
                      !returnDate && "text-muted-foreground"
                    )}
                  >
                    <Clock className="mr-2 h-4 w-4" />
                    {returnDate ? format(returnDate, "PPP") : <span>Select date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={returnDate}
                    onSelect={(date) => {
                      setReturnDate(date)
                      setOpenReturnDate(false)
                    }}
                    disabled={(date) =>
                      date < new Date() || (pickupDate ? date < pickupDate : false)
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Update Search Button */}
            <div className="flex items-end">
              <Button
                onClick={handleSearchUpdate}
                size="lg"
                className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" />
                Update Search
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Results Section */}
      <div className="container mx-auto px-4 py-8">
        {/* Using the existing AvailableVehicles component */}
        <AvailableVehicles />
      </div>
    </div>
  )
}

export default function SearchResults() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading search results...</p>
        </div>
      </div>
    }>
      <SearchResultsContent />
    </Suspense>
  )
}