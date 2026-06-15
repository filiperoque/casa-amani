import OptimizedImage from "@/components/OptimizedImage";

interface LocationProps {
  heading: string;
  description: string;
}

export default function Location({ heading, description }: LocationProps) {
  return (
    <section className="flex flex-col gap-10 bg-warm px-6 py-16 text-cream md:px-16 lg:flex-row lg:items-start lg:justify-between lg:p-[120px]">
      <div className="flex flex-col gap-4 md:gap-6 lg:w-[560px] lg:shrink-0">
        <h2 className="font-display text-4xl leading-tight md:text-5xl lg:text-[72px] lg:leading-[80px]">
          {heading}
        </h2>
        <p className="text-lg font-normal leading-8 md:text-2xl lg:text-[32px] lg:leading-[48px]">
          {description}
        </p>
      </div>

      <div className="relative h-[350px] w-full overflow-hidden sm:h-[450px] md:h-[550px] lg:h-[654px] lg:w-[560px] lg:shrink-0">
        <OptimizedImage
          src="/images/location.jpg"
          alt="Aerial view of Casa Amani overlooking the Atlantic Ocean"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 560px"
        />
      </div>
    </section>
  );
}
