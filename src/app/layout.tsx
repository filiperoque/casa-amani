import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Casa Amani Madeira | Made for slow stays on Madeira's quiet side",
  description:
    "Casa Amani Madeira is a two-bedroom contemporary villa in Arco da Calheta. Made for slow stays on Madeira's quiet side, by visitors, remote workers, and surfers on the west-coast breaks.",
  keywords: [
    "Casa Amani Madeira",
    "Casa Amani Calheta",
    "Madeira villa",
    "Arco da Calheta",
    "vacation rental Madeira",
    "remote work Madeira",
    "holiday house Calheta",
    "Madeira south-west coast",
    "slow travel Madeira",
    "surf villa Madeira",
  ],
  metadataBase: new URL("https://casa-amani.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Casa Amani Madeira | Made for slow stays on Madeira's quiet side",
    description:
      "Casa Amani Madeira is a two-bedroom contemporary villa in Arco da Calheta. Made for slow stays on Madeira's quiet side, by visitors, remote workers, and surfers on the west-coast breaks.",
    url: "https://casa-amani.com",
    siteName: "Casa Amani Madeira",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Interior of Casa Amani with ocean views across the Atlantic, Arco da Calheta, Madeira",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Casa Amani Madeira | Made for slow stays on Madeira's quiet side",
    description:
      "Casa Amani Madeira is a two-bedroom contemporary villa in Arco da Calheta. Made for slow stays on Madeira's quiet side.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VacationRental",
  name: "Casa Amani",
  alternateName: ["Casa Amani Madeira", "Casa Amani Calheta", "Amani"],
  url: "https://casa-amani.com",
  image: [
    "https://casa-amani.com/images/hero.jpg",
    "https://casa-amani.com/images/living-space.jpg",
    "https://casa-amani.com/images/swimming-pool.jpg",
  ],
  description:
    "Casa Amani is a two-bedroom contemporary rental villa in Arco da Calheta, on the south-west coast of Madeira, Portugal. The house sits split-level above a private heated pool with a front-facing sea view, and is designed for slow stays, equally suited to travellers visiting Madeira, to remote-mobile workers using the island as a base, and to surfers based on the island's west-coast breaks. It sleeps up to six and is available for stays of one week or longer. Registered Alojamento Local 176882/AL.",
  brand: { "@type": "Brand", name: "Casa Amani" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Arco da Calheta",
    addressRegion: "Madeira",
    postalCode: "9370",
    addressCountry: "PT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.715988,
    longitude: -17.140852,
  },
  containedInPlace: {
    "@type": "Place",
    name: "Madeira",
    sameAs: "https://www.wikidata.org/wiki/Q26253",
  },
  numberOfRooms: 2,
  numberOfBedrooms: 2,
  numberOfBathroomsTotal: 3,
  floorSize: {
    "@type": "QuantitativeValue",
    value: 219,
    unitCode: "MTK",
  },
  lotSize: {
    "@type": "QuantitativeValue",
    value: 324,
    unitCode: "MTK",
  },
  occupancy: { "@type": "QuantitativeValue", maxValue: 6 },
  petsAllowed: false,
  smokingAllowed: false,
  identifier: {
    "@type": "PropertyValue",
    propertyID: "Alojamento Local licence",
    value: "176882/AL",
  },
  sameAs: [
    "https://www.ourmadeira.com/regions/calheta-area/amani/",
    "https://www.airbnb.co.uk/rooms/1695506665949683620",
    "https://www.vrbo.com/en-gb/p12152433",
    "https://www.booking.com/hotel/pt/superb-modern-villa-with-pool-in-calhetaamani.en-gb.html",
    "https://www.casai.com/property/ourmadeira-amani/BC-16564906",
  ],
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Private heated pool, 7m, with panoramic sea view", value: true },
    { "@type": "LocationFeatureSpecification", name: "Panoramic sea view", value: true },
    { "@type": "LocationFeatureSpecification", name: "Desk in both bedrooms; external monitor in guest bedroom", value: true },
    { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi throughout villa and terrace", value: true },
    { "@type": "LocationFeatureSpecification", name: "Smart TV with Netflix and YouTube", value: true },
    { "@type": "LocationFeatureSpecification", name: "Bluetooth speaker", value: true },
    { "@type": "LocationFeatureSpecification", name: "Fully equipped kitchen with induction hob, oven, dishwasher, espresso machine", value: true },
    { "@type": "LocationFeatureSpecification", name: "BBQ", value: true },
    { "@type": "LocationFeatureSpecification", name: "Washer and dryer", value: true },
    { "@type": "LocationFeatureSpecification", name: "Air conditioning throughout; same units heat when needed", value: true },
    { "@type": "LocationFeatureSpecification", name: "Private garage for two cars", value: true },
    { "@type": "LocationFeatureSpecification", name: "Safe deposit", value: true },
    { "@type": "LocationFeatureSpecification", name: "Cot and high chair available", value: true },
  ],
  checkinTime: "16:00",
  checkoutTime: "11:00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/fonts/GT-Sectra-Display-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/GT-Walsheim-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/GT-Walsheim-Medium.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/images/landing-bg.avif" type="image/avif" />
        <link rel="preload" as="image" href="/images/hero.avif" type="image/avif" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          async
          src="https://plausible.io/js/pa-ySxT_AZs1Q8jkSINO-Uxk.js"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=[50,90],f=new Set;function c(){var s=Math.round((window.scrollY+window.innerHeight)/document.documentElement.scrollHeight*100);t.forEach(function(v){if(s>=v&&!f.has(v)){f.add(v);window.plausible("scroll-"+v,{props:{path:window.location.pathname}})}})}var k=false;window.addEventListener("scroll",function(){if(!k){window.requestAnimationFrame(function(){c();k=false});k=true}},{passive:true})})()`,
          }}
        />
      </head>
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-cream focus:px-4 focus:py-2 focus:text-brown focus:outline-none"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
