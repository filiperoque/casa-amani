import RoomCard from "./RoomCard";
import Reveal from "./Reveal";

const rooms = [
  {
    image: "/images/main-bedroom.jpg",
    alt: "Main bedroom with ocean view",
    title: "THE MAIN BEDROOM",
    description:
      "king bed facing the atlantic, with an en-suite bathroom and a desk behind the bed for early work or reading.",
  },
  {
    image: "/images/guest-bedroom.jpg",
    alt: "Guest bedroom with built-in desk",
    title: "THE GUEST BEDROOM",
    description:
      "king bed just off the living space, with a built-in desk and monitor for both rest and remote work.",
  },
  {
    image: "/images/family-bathroom.jpg",
    alt: "Family bathroom with microcement finishes",
    title: "THE FAMILY BATHROOM",
    description:
      "microcement throughout, with a rain shower and built-in sound. warm, soft, and easy to use day to day.",
  },
  {
    image: "/images/swimming-pool.jpg",
    alt: "Private heated swimming pool with terrace",
    title: "THE SWIMMING POOL",
    description:
      "private pool set into the terrace, with seating and surrounding plants. used at different times of day.",
  },
  {
    image: "/images/living-space.jpg",
    alt: "Open-plan living space with terrace access",
    title: "THE LIVING SPACE",
    description:
      "open-plan living with direct access to the terrace and pool, where most of the day moves between inside and out.",
    featured: true,
  },
  {
    image: "/images/kitchen.jpg",
    alt: "Fully equipped kitchen",
    title: "THE KITCHEN",
    description:
      "fully equipped kitchen set just off the living space, used daily from morning coffee to longer meals later on.",
  },
  {
    image: "/images/lower-room.jpg",
    alt: "Lower room with twin beds",
    title: "THE LOWER ROOM",
    description:
      "downstairs room with two single beds and its own bathroom, more private and comfortable, though without a window.",
  },
  {
    image: "/images/outdoor-dining.jpg",
    alt: "Outdoor dining area with barbecue",
    title: "THE OUTDOOR DINING AREA",
    description:
      "outdoor table and gas barbecue set just beyond the living space. meals tend to move outside without much planning.",
  },
  {
    image: "/images/garage.jpg",
    alt: "Private garage for two cars",
    title: "THE GARAGE",
    description:
      "private garage with space for two cars, directly connected to the house for straightforward arrival and departure.",
  },
];

export default function HouseGallery() {
  return (
    <section className="bg-cream py-16 lg:py-[120px]">
      <Reveal>
        <div className="flex flex-col items-center gap-4 px-6 text-center text-brown md:gap-6 lg:px-[120px]">
          <h2 className="font-fine text-4xl md:text-5xl lg:text-[72px] lg:leading-[80px]">
            the house
          </h2>
          <p className="max-w-3xl text-sm leading-7 md:text-lg lg:text-2xl lg:leading-8">
            2 + 1 bedrooms • 234 m² • atlantic-facing • heated pool • open-plan
            living
            <br className="hidden md:block" />
            workspaces • fibre wifi • outdoor dining &amp; barbecue • garage for 2
            cars
          </p>
        </div>
      </Reveal>

      <div className="mt-12 overflow-x-auto lg:mt-20">
        <div className="flex gap-6 px-6 pb-6 lg:gap-10 lg:px-[120px]">
          {rooms.map((room, i) => (
            <Reveal key={room.title} delay={i * 80} className="shrink-0">
              <RoomCard
                image={room.image}
                alt={room.alt}
                title={room.title}
                description={room.description}
                featured={room.featured}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
