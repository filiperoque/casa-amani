import OptimizedImage from "@/components/OptimizedImage";

interface LocationProps {
  heading: string;
  description: string;
}

export default function Location({ heading, description }: LocationProps) {
  return (
    <section className="bg-warm px-gutter py-16 text-cream lg:px-gutter-lg lg:py-[120px]">
      <div className="mx-auto flex w-full max-w-content flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex flex-col gap-4 md:gap-6 lg:w-1/2">
          <h2 className="font-display text-title md:text-title-lg">
            {heading}
          </h2>
          <p className="text-intro font-normal text-cream md:text-title-sm">
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
