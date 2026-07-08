import type { Metadata } from "next";
import { type Locale, getTranslations } from "@/i18n/translations";
import { pageMetadata } from "@/lib/seo";
import Header from "@/components/Header";
import HouseHeroWordmark from "@/components/HouseHeroWordmark";
import OptimizedImage from "@/components/OptimizedImage";
import Tagline from "@/components/Tagline";
import HouseGallery from "@/components/HouseGallery";
import Location from "@/components/Location";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({
    locale: locale as Locale,
    path: "/house",
    page: "house",
    image: "/images/hero.jpg",
    imageAlt: "Interior of Casa Amani with ocean view through floor-to-ceiling windows",
  });
}

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
        <h1 className="sr-only">{t.house.title}</h1>
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

        <Reveal>
          <section className="bg-cream px-6 py-16 lg:px-[120px]">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 font-display text-2xl text-brown md:text-3xl">
                {t.staysInclude.title}
              </h2>
              <ul className="flex flex-col gap-3 leading-7 text-brown">
                {t.staysInclude.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h2 className="mb-6 mt-14 font-display text-2xl text-brown md:text-3xl">
                {t.amenities.title}
              </h2>
              <ul className="flex flex-col gap-3 leading-7 text-brown">
                {t.amenities.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <Location
            heading={t.location.heading}
            description={t.location.description}
          />
        </Reveal>
        <Reveal>
          <section className="bg-cream px-6 py-12 lg:px-[120px]">
            <div className="mx-auto max-w-3xl flex flex-wrap gap-x-8 gap-y-2 text-base text-brown">
              <a href={`/${locale}/remote-work`} className="transition-colors hover:text-brown">Remote work from Casa Amani</a>
              <a href={`/${locale}/experiences`} className="transition-colors hover:text-brown">Experiences</a>
              <a href={`/${locale}/the-guide/table`} className="transition-colors hover:text-brown">Where to eat</a>
              <a href={`/${locale}/calheta`} className="transition-colors hover:text-brown">About Calheta</a>
            </div>
          </section>
        </Reveal>
        <Footer />
      </main>
    </>
  );
}
