import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Tagline from "@/components/Tagline";
import HouseGallery from "@/components/HouseGallery";
import Location from "@/components/Location";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "The House — Casa Amani | Arco da Calheta, Madeira",
  description:
    "A 219 m² split-level contemporary villa with 2 bedrooms, 3 bathrooms, heated pool, sea view, and workspaces. Sleeps up to 6 in Arco da Calheta, Madeira.",
  alternates: {
    canonical: "/house",
  },
  openGraph: {
    title: "The House — Casa Amani | Arco da Calheta, Madeira",
    description:
      "2 bedrooms, 3 bathrooms, heated pool, sea view, workspaces. A 219 m² contemporary villa on Madeira's south-west coast.",
    url: "https://casa-amani.com/house",
    images: [
      {
        url: "/images/living-space.jpg",
        width: 1200,
        height: 630,
        alt: "Open-plan living space at Casa Amani with direct terrace and pool access",
      },
    ],
  },
};

export default function HousePage() {
  return (
    <main>
      <div className="bg-warm">
        <Header />
        <Hero />
      </div>
      <Reveal>
        <Tagline />
      </Reveal>
      <HouseGallery />
      <Reveal>
        <Location />
      </Reveal>
    </main>
  );
}
