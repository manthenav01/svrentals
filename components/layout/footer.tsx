import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white/70 backdrop-blur border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">SV Rentals</h3>
            <p className="text-sm text-muted-foreground">
              Your trusted bike rental partner in Hyderabad. Quality bikes, affordable prices, excellent service.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/bikes" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Our Bikes
              </Link>
              <Link href="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Hyderabad, Telangana, India
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <Link href="tel:+917996790039" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +91 79967 90039
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <Link href="mailto:info@svrentals.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  info@svrentals.com
                </Link>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Business Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Mon - Sat: 8:00 AM - 8:00 PM
                </span>
              </div>
              <div className="text-sm text-muted-foreground ml-6">
                Sun: 9:00 AM - 6:00 PM
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 SV Rentals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}