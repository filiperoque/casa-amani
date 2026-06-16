import type { Metadata } from "next";
import { type Locale, getTranslations } from "@/i18n/translations";
import Header from "@/components/Header";
import HouseHeroWordmark from "@/components/HouseHeroWordmark";
import OptimizedImage from "@/components/OptimizedImage";
import Tagline from "@/components/Tagline";
import HouseGallery from "@/components/HouseGallery";
import Location from "@/components/Location";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The House | Casa Amani Madeira | Arco da Calheta",
  description:
    "A 219 m² split-level contemporary villa with 2 bedrooms, 3 bathrooms, heated pool, sea view, and workspaces. Sleeps up to 6 in Arco da Calheta, Madeira.",
  alternates: {
    canonical: "/house",
  },
};

export default async function HousePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);

  return (
    <>
      <div className="bg-warm">
        <Header menuLabel={t.header.menu} mode="house" />
      </div>

      <main id="main" className="bg-warm">
        <HouseHeroWordmark text={t.landing.title} homeHref={`/${locale}`} />

        <div className="flex flex-col items-center gap-6 px-6 pt-4 lg:px-[120px] lg:pt-6">
          <p className="animate-fade-up animate-delay-1 text-center text-sm tracking-[5.76px] text-cream md:text-lg lg:text-2xl">
            {t.landing.subtitle}
          </p>
          <div className="animate-fade-up animate-delay-2 relative mt-2 h-[43svh] w-full overflow-hidden sm:h-[400px] md:h-[500px] lg:h-[654px]">
            <OptimizedImage
              src="/images/hero.jpg"
              alt="Interior view of Casa Amani with ocean views"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        </div>

        <Reveal>
          <Tagline
            heading={t.tagline.heading}
            subheading={t.tagline.subheading}
          />
        </Reveal>
        <HouseGallery t={t} />

        <section className="bg-cream px-6 py-16 md:py-24 lg:px-[120px] lg:py-32">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <h2 className="mb-10 font-display text-2xl text-brown md:text-3xl lg:text-4xl">
                {t.staysInclude.title}
              </h2>
              <ul className="mb-20 grid grid-cols-1 gap-4 text-sm leading-7 text-brown/70 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                {t.staysInclude.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="mb-10 font-display text-2xl text-brown md:text-3xl lg:text-4xl">
                {t.amenities.title}
              </h2>
              <ul className="grid grid-cols-1 gap-4 text-sm leading-7 text-brown/70 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                {t.amenities.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <Reveal>
          <Location
            heading={t.location.heading}
            description={t.location.description}
          />
        </Reveal>
        <Footer />
      </main>
    </>
  );
}
