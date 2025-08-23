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
  description: "Rent quality bikes in Hyderabad with SV Rentals. Mountain bikes, city bikes, electric bikes available for hourly, daily, and weekly rentals. Best prices and excellent service.",
  keywords: ["bike rental", "Hyderabad", "bicycle rental", "mountain bike", "city bike", "electric bike", "SV Rentals"],
  authors: [{ name: "SV Rentals" }],
  creator: "SV Rentals",
  publisher: "SV Rentals",
  metadataBase: new URL("https://svrentals.com"),
  openGraph: {
    title: "SV Rentals - Best Bike Rental Service in Hyderabad",
    description: "Rent quality bikes in Hyderabad with SV Rentals. Mountain bikes, city bikes, electric bikes available.",
    type: "website",
    locale: "en_IN",
    siteName: "SV Rentals",
  },
  twitter: {
    card: "summary_large_image",
    title: "SV Rentals - Best Bike Rental Service in Hyderabad",
    description: "Rent quality bikes in Hyderabad with SV Rentals. Mountain bikes, city bikes, electric bikes available.",
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
