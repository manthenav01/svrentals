import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Phone, User, CreditCard, Shield } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Book a Bike - SV Rentals",
  description: "Book your perfect bike rental in Hyderabad with SV Rentals. Choose from mountain bikes, city bikes, and electric bikes with instant confirmation and flexible pickup options.",
}

export default function BookPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Book your perfect ride</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your bike, select your dates, and get ready for an amazing experience in Hyderabad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card className="enterprise-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  <span>Personal Information</span>
                </CardTitle>
                <CardDescription>
                  Please provide your details for the booking
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-3 py-2 rounded-lg border border-input bg-white focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="idType" className="block text-sm font-medium mb-2">
                      ID Proof Type *
                    </label>
                    <select
                      id="idType"
                      name="idType"
                      required
                      className="w-full px-3 py-2 rounded-lg border border-input bg-white focus:outline-none focus:ring-2 focus:ring-primary/30"
                    >
                      <option value="">Select ID Type</option>
                      <option value="aadhar">Aadhar Card</option>
                      <option value="pan">PAN Card</option>
                      <option value="driving">Driving License</option>
                      <option value="passport">Passport</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="idNumber" className="block text-sm font-medium mb-2">
                      ID Number *
                    </label>
                    <input
                      type="text"
                      id="idNumber"
                      name="idNumber"
                      required
                      className="w-full px-3 py-2 rounded-lg border border-input bg-white focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card className="enterprise-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Rental Details</span>
                </CardTitle>
                <CardDescription>
                  Choose your bike type and rental period
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="bikeType" className="block text-sm font-medium mb-2">
                      Bike Type *
                    </label>
                    <select
                      id="bikeType"
                      name="bikeType"
                      required
                      className="w-full px-3 py-2 rounded-lg border border-input bg-white focus:outline-none focus:ring-2 focus:ring-primary/30"
                    >
                      <option value="">Select Bike Type</option>
                      <option value="mountain">Mountain Bike - ₹200/day</option>
                      <option value="city">City Bike - ₹150/day</option>
                      <option value="electric">Electric Bike - ₹400/day</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="startDate" className="block text-sm font-medium mb-2">
                        Start Date *
                      </label>
                      <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        required
                        className="w-full px-3 py-2 rounded-lg border border-input bg-white focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                    <div>
                      <label htmlFor="endDate" className="block text-sm font-medium mb-2">
                        End Date *
                      </label>
                      <input
                        type="date"
                        id="endDate"
                        name="endDate"
                        required
                        className="w-full px-3 py-2 rounded-lg border border-input bg-white focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="pickupTime" className="block text-sm font-medium mb-2">
                        Pickup Time *
                      </label>
                      <select
                        id="pickupTime"
                        name="pickupTime"
                        required
                        className="w-full px-3 py-2 rounded-lg border border-input bg-white focus:outline-none focus:ring-2 focus:ring-primary/30"
                      >
                        <option value="">Select Time</option>
                        <option value="08:00">8:00 AM</option>
                        <option value="09:00">9:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="13:00">1:00 PM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="16:00">4:00 PM</option>
                        <option value="17:00">5:00 PM</option>
                        <option value="18:00">6:00 PM</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="returnTime" className="block text-sm font-medium mb-2">
                        Return Time *
                      </label>
                      <select
                        id="returnTime"
                        name="returnTime"
                        required
                        className="w-full px-3 py-2 rounded-lg border border-input bg-white focus:outline-none focus:ring-2 focus:ring-primary/30"
                      >
                        <option value="">Select Time</option>
                        <option value="08:00">8:00 AM</option>
                        <option value="09:00">9:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="13:00">1:00 PM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="16:00">4:00 PM</option>
                        <option value="17:00">5:00 PM</option>
                        <option value="18:00">6:00 PM</option>
                        <option value="19:00">7:00 PM</option>
                        <option value="20:00">8:00 PM</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="pickupLocation" className="block text-sm font-medium mb-2">
                      Pickup Location *
                    </label>
                    <select
                      id="pickupLocation"
                      name="pickupLocation"
                      required
                      className="w-full px-3 py-2 rounded-lg border border-input bg-white focus:outline-none focus:ring-2 focus:ring-primary/30"
                    >
                      <option value="">Select Location</option>
                      <option value="store">SV Rentals Store - Banjara Hills</option>
                      <option value="home">Home Delivery (+₹100)</option>
                      <option value="hotel">Hotel/Airport Pickup (+₹150)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="specialRequests" className="block text-sm font-medium mb-2">
                      Special Requests
                    </label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      rows={3}
                      className="w-full px-3 py-2 rounded-lg border border-input bg-white focus:outline-none focus:ring-2 focus:ring-primary/30"
                      placeholder="Any special requirements or requests..."
                    ></textarea>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="enterprise-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  <span>Booking Summary</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Bike Type</span>
                    <span className="font-medium">-</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rental Days</span>
                    <span className="font-medium">-</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Daily Rate</span>
                    <span className="font-medium">-</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery/Pickup</span>
                    <span className="font-medium">-</span>
                  </div>
                  <hr />
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-medium">₹0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Security Deposit</span>
                    <span className="font-medium">₹2000</span>
                  </div>
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>₹2000</span>
                  </div>
                </div>
                <Button className="w-full mt-6" variant="brand">
                  Proceed to Payment
                </Button>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  Security deposit will be refunded after bike return
                </p>
              </CardContent>
            </Card>

            <Card className="enterprise-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>What&apos;s Included</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>High-quality bike</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Safety helmet</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Basic tool kit</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Daily support (9 AM - 8 PM)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Insurance coverage</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="enterprise-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>Need Help?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" asChild className="w-full">
                    <Link href="tel:+917996790039">Call Us</Link>
                  </Button>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="https://wa.me/917996790039" target="_blank">WhatsApp</Link>
                  </Button>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/contact">Contact Form</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <Card className="enterprise-card">
            <CardHeader>
              <CardTitle>Important Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-medium mb-2">Requirements</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Valid government ID proof</li>
                    <li>• Minimum age: 18 years</li>
                    <li>• Security deposit (refundable)</li>
                    <li>• Basic cycling knowledge</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Cancellation Policy</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Free cancellation up to 24 hours</li>
                    <li>• 50% refund for 12-24 hour cancellation</li>
                    <li>• No refund for last-minute cancellation</li>
                    <li>• Weather-related free cancellation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Safety Guidelines</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Always wear the provided helmet</li>
                    <li>• Follow traffic rules and signals</li>
                    <li>• Avoid riding in heavy rain</li>
                    <li>• Report any issues immediately</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Return Policy</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Return on time to avoid charges</li>
                    <li>• Bike condition will be inspected</li>
                    <li>• Damage charges may apply</li>
                    <li>• Full fuel/charge required for e-bikes</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}