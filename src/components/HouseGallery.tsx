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

  return (
    <section className="bg-cream py-16 lg:py-[120px]">
      <Reveal>
        <div className="mx-auto flex w-full max-w-content flex-col items-center gap-4 px-gutter text-center text-brown md:gap-6 lg:px-gutter-lg">
          <h2 className="font-display text-4xl md:text-5xl lg:text-[72px] lg:leading-[80px]">
            {t.house.title}
          </h2>
          <p className="max-w-copy text-sm leading-7 md:text-lg lg:text-2xl lg:leading-8">
            {t.house.features}
            <br className="hidden md:block" />
            {t.house.features2}
          </p>
        </div>
      </Reveal>

      <div className="no-scrollbar mt-12 overflow-x-auto lg:mt-20">
        <div className="mx-auto flex w-full max-w-content gap-6 px-gutter pb-6 lg:gap-10 lg:px-gutter-lg">
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
