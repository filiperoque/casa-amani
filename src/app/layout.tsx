import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Casa Amani — Luxury Villa in Arco da Calheta, Madeira",
  description:
    "A 234 m² atlantic-facing villa with heated pool, 2+1 bedrooms, and ocean views in Arco da Calheta, Madeira. Made to be lived in slowly, on Madeira's sunny side.",
  keywords: [
    "Casa Amani",
    "Madeira villa",
    "Arco da Calheta",
    "luxury holiday rental",
    "heated pool",
    "ocean view villa",
    "Madeira accommodation",
    "vacation rental Madeira",
  ],
  metadataBase: new URL("https://casa-amani.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Casa Amani — Luxury Villa in Arco da Calheta, Madeira",
    description:
      "A 234 m² atlantic-facing villa with heated pool, 2+1 bedrooms, and ocean views. Made to be lived in slowly, on Madeira's sunny side.",
    url: "https://casa-amani.com",
    siteName: "Casa Amani",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1440,
        height: 654,
        alt: "Interior view of Casa Amani with ocean views in Madeira",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Casa Amani — Luxury Villa in Madeira",
    description:
      "Atlantic-facing villa with heated pool in Arco da Calheta. 2+1 bedrooms, 234 m², ocean views.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              name: "Casa Amani",
              description:
                "A 234 m² atlantic-facing luxury villa with heated pool, 2+1 bedrooms, open-plan living, and ocean views in Arco da Calheta, on Madeira's sunny south-west coast.",
              url: "https://casa-amani.com",
              image: "https://casa-amani.com/images/hero.jpg",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Arco da Calheta",
                addressRegion: "Madeira",
                addressCountry: "PT",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 32.7333,
                longitude: -17.1667,
              },
              amenityFeature: [
                { "@type": "LocationFeatureSpecification", name: "Heated pool", value: true },
                { "@type": "LocationFeatureSpecification", name: "Ocean view", value: true },
                { "@type": "LocationFeatureSpecification", name: "Fibre WiFi", value: true },
                { "@type": "LocationFeatureSpecification", name: "Garage for 2 cars", value: true },
                { "@type": "LocationFeatureSpecification", name: "Outdoor dining & barbecue", value: true },
                { "@type": "LocationFeatureSpecification", name: "Workspaces", value: true },
              ],
              numberOfRooms: 3,
              floorSize: {
                "@type": "QuantitativeValue",
                value: 234,
                unitCode: "MTK",
              },
              sameAs: [
                "https://www.airbnb.co.uk/rooms/1695506665949683620",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
