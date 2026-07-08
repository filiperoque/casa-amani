interface TaglineProps {
  heading: string;
  subheading: string;
}

export default function Tagline({ heading, subheading }: TaglineProps) {
  return (
    <section className="flex flex-col items-center gap-4 bg-warm px-gutter py-16 text-cream md:gap-6 md:py-20 lg:px-gutter-lg lg:pb-[88px] lg:pt-[72px]">
      <div className="mx-auto flex w-full max-w-content flex-col items-center gap-4 md:gap-6">
        <h2 className="text-center font-display text-4xl md:text-5xl lg:text-[72px] lg:leading-[80px]">
          {heading}
        </h2>
        <p className="text-center text-lg font-normal text-cream md:text-2xl lg:text-[32px]">
          {subheading}
        </p>
      </div>
    </section>
  );
}
