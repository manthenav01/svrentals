import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { StructuredData } from "@/components/structured-data";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "SV Rentals - Best Bike Rental Service in Hyderabad",
    template: "%s | SV Rentals"
  },
  description: "Rent bikes & scooters in KPHB starting ₹399/day | Self-drive two-wheelers, instant booking, 24/7 support | Mountain bikes, city bikes, electric scooters available | Free helmet & roadside assistance | SV Rentals - Trusted by 10,000+ riders",
  keywords: ["bike rental KPHB", "scooter rental Hyderabad", "self drive bikes", "two wheeler rental", "bike on rent near me", "daily bike rental", "monthly bike rental", "activa rental Hyderabad", "scooty rental", "motorcycle rental", "SV Rentals", "Hyderabad bike rental service", "affordable bike rental", "instant booking bikes"],
  authors: [{ name: "SV Rentals" }],
  creator: "SV Rentals",
  publisher: "SV Rentals",
  metadataBase: new URL("https://svrentals.com"),
  openGraph: {
    title: "SV Rentals - Bike & Scooter Rental in Hyderabad | Starting ₹399/day",
    description: "Self-drive bikes & scooters for rent in Hyderabad. Instant booking, 24/7 support, free helmet. Mountain bikes, scooters, motorcycles available. Trusted by 10,000+ riders.",
    type: "website",
    locale: "en_IN",
    siteName: "SV Rentals",
  },
  twitter: {
    card: "summary_large_image",
    title: "SV Rentals - Bike & Scooter Rental in Hyderabad | Starting ₹99/day",
    description: "Self-drive bikes & scooters for rent in Hyderabad. Instant booking, 24/7 support, free helmet. Mountain bikes, scooters, motorcycles available. Trusted by 10,000+ riders.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
