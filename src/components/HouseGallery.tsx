import RoomCard from "./RoomCard";
import Reveal from "./Reveal";
import type { Translations } from "@/i18n/translations";

interface HouseGalleryProps {
  t: Translations;
}

export default function HouseGallery({ t }: HouseGalleryProps) {
  const rooms = [
    { ...t.rooms.mainBedroom, image: "/images/main-bedroom.jpg", alt: "Main bedroom with ocean view" },
    { ...t.rooms.guestBedroom, image: "/images/guest-bedroom.jpg", alt: "Guest bedroom with built-in desk" },
    { ...t.rooms.familyBathroom, image: "/images/family-bathroom.jpg", alt: "Family bathroom with microcement finishes" },
    { ...t.rooms.swimmingPool, image: "/images/swimming-pool.jpg", alt: "Private heated swimming pool with terrace" },
    { ...t.rooms.livingSpace, image: "/images/living-space.jpg", alt: "Open-plan living space with terrace access" },
    { ...t.rooms.kitchen, image: "/images/kitchen.jpg", alt: "Fully equipped kitchen" },
    { ...t.rooms.lowerRoom, image: "/images/lower-room.jpg", alt: "Lower room with twin beds" },
    { ...t.rooms.outdoorDining, image: "/images/outdoor-dining.jpg", alt: "Outdoor dining area with barbecue" },
    { ...t.rooms.garage, image: "/images/garage.jpg", alt: "Private garage for two cars" },
  ];

  const featureLines = [t.house.features, t.house.features2];

  return (
    <section className="bg-cream px-gutter py-16 md:py-24 lg:px-gutter-lg">
      <Reveal>
        <div className="mx-auto flex w-full max-w-content flex-col items-center gap-4 text-center text-brown md:gap-6">
          <h2 className="font-display text-title md:text-title-lg lg:text-display">
            {t.house.title}
          </h2>
          <p className="max-w-copy text-sm leading-7 md:text-intro lg:text-title-sm">
            {featureLines.map((line, li) => (
              <span key={li} className="block">
                {line.split(" · ").map((fact, fi, arr) => (
                  <span key={fact} className="whitespace-nowrap">
                    {fact}
                    {fi < arr.length - 1 && <span aria-hidden="true"> · </span>}
                  </span>
                ))}
              </span>
            ))}
          </p>
        </div>
      </Reveal>

      <div className="no-scrollbar mx-auto mt-12 w-full max-w-content overflow-x-auto lg:mt-24">
        <div className="flex gap-6 pb-6 lg:gap-12">
          {rooms.map((room, i) => (
            <Reveal key={room.title} delay={i * 80} className="shrink-0">
              <RoomCard
                image={room.image}
                alt={room.alt}
                title={room.title}
                description={room.description}
              />
            </Reveal>
          ))}
          <div className="w-px shrink-0" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
