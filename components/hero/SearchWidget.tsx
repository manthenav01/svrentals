"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command"
import { MapPin, Calendar as CalendarIcon, Clock, Search, Check, ChevronDown } from "lucide-react"
import { format, addDays } from "date-fns"
import { cn } from "@/lib/utils"

export function SearchWidget() {
  const router = useRouter()
  const [location, setLocation] = useState('KPHB Colony')
  const [pickupDate, setPickupDate] = useState<Date | undefined>(new Date())
  const [returnDate, setReturnDate] = useState<Date | undefined>(addDays(new Date(), 3))
  const [openLocation, setOpenLocation] = useState(false)
  const [openPickupDate, setOpenPickupDate] = useState(false)
  const [openReturnDate, setOpenReturnDate] = useState(false)

  const locations = [
    "KPHB Colony",
    "Kukatpally",
    "Madhapur"
  ]

  const handleSearch = () => {
    const searchParams = new URLSearchParams()
    
    if (location) {
      searchParams.append("location", location)
    }
    
    if (pickupDate) {
      searchParams.append("pickupDate", pickupDate.toISOString())
    }
    
    if (returnDate) {
      searchParams.append("returnDate", returnDate.toISOString())
    }
    
    router.push(`/search?${searchParams.toString()}`)
  }

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="relative z-20 w-full max-w-6xl mx-auto"
    >
      {/* Main Search Card */}
      <motion.div
        className="bg-white/90 backdrop-blur-lg border border-white/50 rounded-3xl p-8 md:p-10 shadow-2xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
          
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
                  className="w-full justify-between px-5 py-4 h-[60px] rounded-2xl border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50/50 bg-white/70 backdrop-blur-sm transition-colors"
                >
                  {location
                    ? locations.find((loc) => loc === location)
                    : "Enter location"}
                  <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[340px] p-0">
                <Command>
                  <CommandList>
                    <CommandGroup>
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
                    "w-full justify-start text-left font-normal px-5 py-4 h-[60px] rounded-2xl border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50/50 bg-white/70 backdrop-blur-sm transition-colors",
                    !pickupDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {pickupDate ? format(pickupDate, "PPP") : <span>Pick a date</span>}
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
                    "w-full justify-start text-left font-normal px-5 py-4 h-[60px] rounded-2xl border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50/50 bg-white/70 backdrop-blur-sm transition-colors",
                    !returnDate && "text-muted-foreground"
                  )}
                >
                  <Clock className="mr-2 h-4 w-4" />
                  {returnDate ? format(returnDate, "PPP") : <span>Pick a date</span>}
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

          {/* Search Button */}
          <div className="flex items-end">
            <motion.div 
              className="w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                onClick={handleSearch}
                className="w-full h-[60px] bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" />
                Search Bikes
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}