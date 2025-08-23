export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SV Rentals",
    "description": "Premium bike rental service in Hyderabad offering mountain bikes, city bikes, and electric bikes for rent.",
    "url": "https://svrentals.com",
    "telephone": "+917996790039",
    "email": "info@svrentals.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.3850,
      "longitude": 78.4867
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday", 
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "08:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, Credit Card, UPI",
    "areaServed": {
      "@type": "City",
      "name": "Hyderabad"
    },
    "serviceType": "Bike Rental",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Bike Rental Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Mountain Bike Rental",
            "description": "High-quality mountain bikes for off-road adventures"
          },
          "price": "200",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Product",
            "name": "City Bike Rental",
            "description": "Comfortable city bikes for urban commuting"
          },
          "price": "150",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product", 
            "name": "Electric Bike Rental",
            "description": "Eco-friendly electric bikes for effortless rides"
          },
          "price": "400",
          "priceCurrency": "INR"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "124"
    },
    "foundingDate": "2020",
    "founder": {
      "@type": "Organization",
      "name": "SV Rentals Local Team"
    },
    "knowsAbout": [
      "Bike Safety",
      "Sanitization Protocols", 
      "Hyderabad Local Transportation",
      "Bike Maintenance",
      "Customer Service"
    ],
    "slogan": "Your Trusted Local Bike Partner",
    "brand": {
      "@type": "Brand",
      "name": "SV Rentals"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}