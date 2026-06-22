import OptimizedImage from "@/components/OptimizedImage";

interface LocationProps {
  heading: string;
  description: string;
}

export default function Location({ heading, description }: LocationProps) {
  return (
    <section className="bg-warm px-6 py-16 text-cream lg:px-[120px] lg:py-[120px]">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex flex-col gap-4 md:gap-6 lg:w-1/2">
          <h2 className="font-display text-4xl leading-tight md:text-5xl lg:text-[56px] lg:leading-[64px]">
            {heading}
          </h2>
          <p className="text-lg font-normal leading-8 text-cream/80 md:text-xl lg:text-2xl lg:leading-9">
            {description}
          </p>
        </div>

        <div className="relative h-[350px] w-full overflow-hidden sm:h-[450px] lg:h-[500px] lg:w-1/2">
          <OptimizedImage
            src="/images/location.jpg"
            alt="Aerial view of Casa Amani overlooking the Atlantic Ocean"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
