interface TaglineProps {
  heading: string;
  subheading: string;
}

export default function Tagline({ heading, subheading }: TaglineProps) {
  return (
    <section className="flex flex-col items-center gap-4 bg-warm px-gutter py-16 text-cream md:gap-6 md:py-24 lg:px-gutter-lg lg:pt-16 lg:pb-24">
      <div className="mx-auto flex w-full max-w-content flex-col items-center gap-4 md:gap-6">
        <h2 className="text-center font-display text-title md:text-title-lg lg:text-display">
          {heading}
        </h2>
        <p className="text-center text-intro font-normal text-cream md:text-title-sm">
          {subheading}
        </p>
      </div>
    </section>
  );
}
