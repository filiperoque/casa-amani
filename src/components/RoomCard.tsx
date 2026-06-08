import Image from "next/image";

interface RoomCardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  featured?: boolean;
}

export default function RoomCard({
  image,
  alt,
  title,
  description,
  featured = false,
}: RoomCardProps) {
  return (
    <div
      className={`group flex flex-col gap-6 ${
        featured ? "w-[320px] md:w-[440px] lg:w-[560px]" : "w-[280px] md:w-[340px] lg:w-[399px]"
      }`}
    >
      <div
        className={`relative w-full overflow-hidden ${
          featured ? "h-[420px] md:h-[560px] lg:h-[736px]" : "h-[340px] md:h-[420px] lg:h-[525px]"
        }`}
      >
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          sizes={featured ? "(max-width: 768px) 320px, (max-width: 1024px) 440px, 560px" : "(max-width: 768px) 280px, (max-width: 1024px) 340px, 399px"}
        />
      </div>
      <div className="flex flex-col gap-3 text-brown lg:gap-4">
        <h3 className="text-sm font-medium tracking-[4.8px] md:text-base lg:text-xl">
          {title}
        </h3>
        <p className="text-sm leading-6 lg:text-base">{description}</p>
      </div>
    </div>
  );
}
