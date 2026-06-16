import OptimizedImage from "@/components/OptimizedImage";

interface HeroProps {
  title: string;
  subtitle: string;
}

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="flex flex-col items-center gap-6 bg-warm px-6 pb-0 lg:px-[120px]">
      <h1 className="animate-fade-up font-display text-5xl text-cream md:text-7xl lg:text-[88px] lg:leading-[80px]">
        {title}
      </h1>
      <p className="animate-fade-up animate-delay-1 text-center text-sm tracking-[5.76px] text-cream md:text-lg lg:text-2xl">
        {subtitle}
      </p>

      <div className="animate-fade-up animate-delay-2 relative mt-4 h-[43svh] w-full overflow-hidden sm:h-[400px] md:h-[500px] lg:h-[654px]">
        <OptimizedImage
          src="/images/hero.jpg"
          alt="Interior view of Casa Amani with ocean views"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
    </section>
  );
}
