import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact Us - SV Rentals",
  description: "Get in touch with SV Rentals for bike rental inquiries in Hyderabad. Visit our store, call us, or send us a message for the best bike rental experience.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Contact us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We&apos;re here to help! Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="enterprise-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Visit our store</span>
                </CardTitle>
                <CardDescription>
                  Come see our bikes in person and get expert advice
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  SV Rentals Store<br />
                  Main Road, Banjara Hills<br />
                  Hyderabad, Telangana 500034<br />
                  India
                </p>
                <Button asChild variant="brand">
                  <Link href="https://maps.google.com/?q=Banjara+Hills,+Hyderabad" target="_blank">
                    Get Directions
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="enterprise-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>Call us</span>
                </CardTitle>
                <CardDescription>
                  Quick assistance for bookings and inquiries
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div>
                    <p className="font-medium">Customer Service</p>
                    <Link href="tel:+917996790039" className="text-primary hover:underline">
                      +91 79967 90039
                    </Link>
                  </div>
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <Link href="https://wa.me/917996790039" className="text-primary hover:underline">
                      +91 79967 90039
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="enterprise-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>Email us</span>
                </CardTitle>
                <CardDescription>
                  Send us detailed inquiries or feedback
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div>
                    <p className="font-medium">General Inquiries</p>
                    <Link href="mailto:info@svrentals.com" className="text-primary hover:underline">
                      info@svrentals.com
                    </Link>
                  </div>
                  <div>
                    <p className="font-medium">Bookings</p>
                    <Link href="mailto:bookings@svrentals.com" className="text-primary hover:underline">
                      bookings@svrentals.com
                    </Link>
                  </div>
                  <div>
                    <p className="font-medium">Support</p>
                    <Link href="mailto:support@svrentals.com" className="text-primary hover:underline">
                      support@svrentals.com
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="enterprise-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Business hours</span>
                </CardTitle>
                <CardDescription>
                  When we&apos;re available to serve you
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Saturday</span>
                    <span>8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Emergency Service</span>
                    <span>24/7 Available</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="enterprise-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <span>Send us a message</span>
                </CardTitle>
                <CardDescription>
                  Fill out the form and we&apos;ll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-3 py-2 rounded-lg border border-input bg-white focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-3 py-2 rounded-lg border border-input bg-white focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 rounded-lg border border-input bg-white focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-3 py-2 rounded-lg border border-input bg-white focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                  <div>
                    <label htmlFor="bikeType" className="block text-sm font-medium mb-2">
                      Interested Bike Type
                    </label>
                    <select
                      id="bikeType"
                      name="bikeType"
                      className="w-full px-3 py-2 rounded-lg border border-input bg-white focus:outline-none focus:ring-2 focus:ring-primary/30"
                    >
                      <option value="">Select a bike type</option>
                      <option value="mountain">Mountain Bike</option>
                      <option value="city">City Bike</option>
                      <option value="electric">Electric Bike</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-3 py-2 rounded-lg border border-input bg-white focus:outline-none focus:ring-2 focus:ring-primary/30"
                      placeholder="Tell us about your rental needs, dates, or any questions you have..."
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="enterprise-card">
              <CardHeader>
                <CardTitle>Quick actions</CardTitle>
                <CardDescription>
                  Need immediate assistance? Try these options
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button asChild className="w-full" variant="brand">
                    <Link href="/book">Book a Bike Now</Link>
                  </Button>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="https://wa.me/917996790039" target="_blank">
                      Chat on WhatsApp
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="tel:+917996790039">Call Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </div>
  )
}