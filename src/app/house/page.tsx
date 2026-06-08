import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Tagline from "@/components/Tagline";
import HouseGallery from "@/components/HouseGallery";
import Location from "@/components/Location";
import Reveal from "@/components/Reveal";

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
