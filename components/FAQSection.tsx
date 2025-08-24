"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { Card } from "@/components/ui/card"

const faqs = [
  {
    question: "What documents are required to book a bike?",
    answer: "You need a valid driving license, Aadhar card or any government ID proof, and one local contact reference. For visitors from other cities, additional verification may be required. All documents should be original for verification."
  },
  {
    question: "What is the check-in and check-out timing?",
    answer: "Our standard check-in time is 9:00 AM and check-out time is 6:00 PM. However, we offer flexible timings based on availability. For early morning or late evening pickups, please contact us in advance to arrange special timings."
  },
  {
    question: "Is fuel included in tariff?",
    answer: "For electric bikes, charging is included in the rental price. For petrol bikes, you'll receive the bike with a full tank and should return it with the same fuel level. Any fuel consumed during your rental period is your responsibility."
  },
  {
    question: "Can I reschedule my booking?",
    answer: "Yes, you can reschedule your booking up to 24 hours before your scheduled pickup time without any charges. For changes within 24 hours, rescheduling fees may apply. Please contact us via WhatsApp to make changes."
  },
  {
    question: "Can I extend my trip after it ends?",
    answer: "Absolutely! You can extend your rental period based on bike availability. Extension charges will be calculated at hourly rates. Please inform us at least 2 hours before your original return time to ensure the bike remains available for extension."
  },
  {
    question: "How do I pay?",
    answer: "We accept multiple payment methods including cash, UPI, debit/credit cards, and digital wallets. A security deposit is required at the time of booking, which will be refunded after the safe return of the bike."
  },
  {
    question: "Is there any kilometer capping?",
    answer: "Our rentals include generous kilometer limits: 100km for half-day, 150km for full-day, and unlimited kilometers for weekly rentals. Additional kilometers are charged at ₹3 per km for city bikes and ₹5 per km for premium bikes."
  }
]

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our bike rental service
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="enterprise-card overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200 group"
                >
                  <span className="font-medium text-lg text-foreground pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                    {openItems.includes(index) ? (
                      <Minus className="h-4 w-4 text-primary" />
                    ) : (
                      <Plus className="h-4 w-4 text-primary" />
                    )}
                  </div>
                </button>
                {openItems.includes(index) && (
                  <div className="px-6 pb-6">
                    <div className="h-px bg-border mb-4" />
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}