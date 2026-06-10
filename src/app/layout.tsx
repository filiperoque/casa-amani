import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Casa Amani — A contemporary house on Madeira's quiet side",
  description:
    "A two-bedroom contemporary house in Arco da Calheta, on Madeira's quiet side. Made to be lived in slowly — by visitors and remote workers alike.",
  keywords: [
    "Casa Amani",
    "Madeira villa",
    "Arco da Calheta",
    "vacation rental Madeira",
    "remote work Madeira",
    "holiday house Calheta",
    "Madeira south-west coast",
    "slow travel Madeira",
  ],
  metadataBase: new URL("https://casa-amani.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Casa Amani — A contemporary house on Madeira's quiet side",
    description:
      "A two-bedroom contemporary house in Arco da Calheta, on Madeira's quiet side. Made to be lived in slowly — by visitors and remote workers alike.",
    url: "https://casa-amani.com",
    siteName: "Casa Amani",
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
    title: "Casa Amani — A contemporary house on Madeira's quiet side",
    description:
      "A two-bedroom contemporary house in Arco da Calheta, on Madeira's quiet side. Made to be lived in slowly.",
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
  alternateName: "Amani",
  url: "https://casa-amani.com",
  image: [
    "https://casa-amani.com/images/hero.jpg",
    "https://casa-amani.com/images/living-space.jpg",
    "https://casa-amani.com/images/swimming-pool.jpg",
  ],
  description:
    "A 2-bedroom contemporary rental villa in Arco da Calheta, on the quiet south-west coast of Madeira, Portugal. Built for slow stays — equally suited to travellers visiting the island and to remote-mobile workers using it as a base. Sleeps up to 6.",
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
    { "@type": "LocationFeatureSpecification", name: "Private heated pool (optional)", value: true },
    { "@type": "LocationFeatureSpecification", name: "Panoramic sea view", value: true },
    { "@type": "LocationFeatureSpecification", name: "Desk in both bedrooms; external monitor in guest bedroom", value: true },
    { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi throughout villa and terrace", value: true },
    { "@type": "LocationFeatureSpecification", name: "Smart TV with Netflix and YouTube", value: true },
    { "@type": "LocationFeatureSpecification", name: "Bluetooth speaker", value: true },
    { "@type": "LocationFeatureSpecification", name: "Fully equipped kitchen with induction hob, oven, dishwasher, espresso machine", value: true },
    { "@type": "LocationFeatureSpecification", name: "BBQ", value: true },
    { "@type": "LocationFeatureSpecification", name: "Washer and dryer", value: true },
    { "@type": "LocationFeatureSpecification", name: "Air conditioning and central heating", value: true },
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
