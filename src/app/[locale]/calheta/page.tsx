import type { Metadata } from "next";
import { type Locale, getTranslations } from "@/i18n/translations";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import OptimizedImage from "@/components/OptimizedImage";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import BookCTA from "@/components/BookCTA";
import Footer from "@/components/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({
    locale: locale as Locale,
    path: "/calheta",
    page: "calheta",
    image: "/images/location.jpg",
    imageAlt: "Aerial view of the coast at Arco da Calheta, Madeira",
  });
}

const placeJsonLd = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Arco da Calheta",
  description:
    "A parish in Calheta municipality on the south-west coast of Madeira island, Portugal. Known for its mild climate, banana plantations, and views across the Atlantic.",
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.7333,
    longitude: -17.1667,
  },
  containedInPlace: {
    "@type": "AdministrativeArea",
    name: "Calheta",
    containedInPlace: {
      "@type": "Place",
      name: "Madeira",
      sameAs: "https://www.wikidata.org/wiki/Q26253",
    },
  },
};

export default async function ThePlacePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);
  const breadcrumbs = breadcrumbJsonLd(locale as Locale, [
    { name: "Calheta", path: "/calheta" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <main id="main">
        <Header menuLabel={t.header.menu} />

        <section className="bg-cream px-6 py-16 md:py-24 lg:py-32">
          <div className="mx-auto max-w-copy">
            <Reveal>
              <h1 className="mb-6 font-display text-title-sm text-brown md:text-title lg:text-title-lg">
                {t.thePlace.title}
              </h1>
              <p className="mb-12 text-intro text-brown">
                {t.thePlace.intro}
              </p>
            </Reveal>

            <Reveal>
              <div className="relative mb-16 h-[300px] overflow-hidden md:h-[400px] lg:h-[500px]">
                <OptimizedImage
                  src="/images/location.jpg"
                  alt="Aerial view of Arco da Calheta and the Atlantic coast of Madeira"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
            </Reveal>

            <Reveal>
              <h2 className="mb-6 font-display text-title-sm text-brown">
                {t.thePlace.distancesTitle}
              </h2>
              <dl className="mb-16 grid grid-cols-1 gap-4 text-brown/80 sm:grid-cols-2">
                {t.thePlace.distances.map(([place, distance]) => (
                  <div key={place} className="flex justify-between border-b border-brown/10 pb-3">
                    <span>{place}</span>
                    <span className="text-brown">{distance}</span>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal>
              <h2 className="mb-6 font-display text-title-sm text-brown">
                {t.thePlace.westCoastTitle}
              </h2>
              <p className="mb-4 text-body text-brown">
                {t.thePlace.westCoastP1}
              </p>
              <p className="mb-16 text-body text-brown">
                {t.thePlace.westCoastP2}
              </p>
            </Reveal>

            <Reveal>
              <h2 className="mb-6 font-display text-title-sm text-brown">
                {t.thePlace.climateTitle}
              </h2>
              <p className="mb-4 text-body text-brown">
                {t.thePlace.climateP1}
              </p>
              <p className="mb-16 text-body text-brown">
                {t.thePlace.climateP2}
              </p>
            </Reveal>

            <Reveal>
              <h2 className="mb-6 font-display text-title-sm text-brown">
                {t.thePlace.golfTitle}
              </h2>
              <p className="mb-4 text-body text-brown">
                {t.thePlace.golfP1}
              </p>
              <p className="mb-16 text-body text-brown">
                {t.thePlace.golfP2}
              </p>
            </Reveal>

            <Reveal>
              <h2 className="mb-6 font-display text-title-sm text-brown">
                {t.thePlace.gettingHereTitle}
              </h2>
              <p className="mb-4 text-body text-brown">
                {t.thePlace.gettingHereP1}
              </p>
              <p className="mb-16 text-body text-brown">
                {t.thePlace.gettingHereP2}
              </p>
            </Reveal>

            <Reveal>
              <div className="border-t border-brown/10 pt-8">
                <BookCTA placement="the-place-cta" label={t.bookCta} />
              </div>
            </Reveal>
          </div>
        </section>
        <Reveal>
          <section className="bg-cream px-gutter py-12 lg:px-gutter-lg">
            <div className="mx-auto max-w-copy flex flex-wrap gap-x-8 gap-y-2 text-sm text-brown">
              <a href={`/${locale}/house`} className="transition-colors hover:text-brown">The house</a>
              <a href={`/${locale}/the-guide`} className="transition-colors hover:text-brown">The Guide</a>
              <a href={`/${locale}/the-guide/surf`} className="transition-colors hover:text-brown">Surfing west Madeira</a>
              <a href={`/${locale}/experiences`} className="transition-colors hover:text-brown">Experiences</a>
            </div>
          </section>
        </Reveal>
        <Footer />
      </main>
    </>
  );
}
