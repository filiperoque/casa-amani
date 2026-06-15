import type { Metadata } from "next";
import { type Locale, getTranslations } from "@/i18n/translations";
import Image from "next/image";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import BookCTA from "@/components/BookCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Arco da Calheta | Casa Amani Madeira | West Coast",
  description:
    "Arco da Calheta sits on the south-west coast of Madeira, the quietest, sunniest stretch of the island. A village on a hill above the Atlantic, 30 minutes from Funchal.",
  alternates: {
    canonical: "/the-place",
  },
};

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

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Casa Amani", item: "https://casa-amani.com" },
    { "@type": "ListItem", position: 2, name: "The Place", item: "https://casa-amani.com/the-place" },
  ],
};

export default async function ThePlacePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main id="main">
        <div className="bg-warm">
          <Header menuLabel={t.header.menu} />
        </div>

        <section className="bg-cream px-6 py-16 md:py-24 lg:py-32">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h1 className="mb-6 font-display text-3xl text-brown md:text-4xl lg:text-5xl">
                {t.thePlace.title}
              </h1>
              <p className="mb-12 text-lg leading-8 text-brown/70 md:text-xl">
                {t.thePlace.intro}
              </p>
            </Reveal>

            <Reveal>
              <div className="relative mb-16 h-[300px] overflow-hidden md:h-[400px] lg:h-[500px]">
                <Image
                  src="/images/location.jpg"
                  alt="Aerial view of Arco da Calheta and the Atlantic coast of Madeira"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
            </Reveal>

            <Reveal>
              <h2 className="mb-6 font-display text-2xl text-brown md:text-3xl">
                {t.thePlace.distancesTitle}
              </h2>
              <dl className="mb-16 grid grid-cols-1 gap-4 text-brown/80 sm:grid-cols-2">
                {t.thePlace.distances.map(([place, distance]) => (
                  <div key={place} className="flex justify-between border-b border-brown/10 pb-3">
                    <span>{place}</span>
                    <span className="text-brown/50">{distance}</span>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal>
              <h2 className="mb-6 font-display text-2xl text-brown md:text-3xl">
                {t.thePlace.westCoastTitle}
              </h2>
              <p className="mb-4 leading-8 text-brown/70">
                {t.thePlace.westCoastP1}
              </p>
              <p className="mb-16 leading-8 text-brown/70">
                {t.thePlace.westCoastP2}
              </p>
            </Reveal>

            <Reveal>
              <h2 className="mb-6 font-display text-2xl text-brown md:text-3xl">
                {t.thePlace.climateTitle}
              </h2>
              <p className="mb-4 leading-8 text-brown/70">
                {t.thePlace.climateP1}
              </p>
              <p className="mb-16 leading-8 text-brown/70">
                {t.thePlace.climateP2}
              </p>
            </Reveal>

            <Reveal>
              <h2 className="mb-6 font-display text-2xl text-brown md:text-3xl">
                {t.thePlace.golfTitle}
              </h2>
              <p className="mb-4 leading-8 text-brown/70">
                {t.thePlace.golfP1}
              </p>
              <p className="mb-16 leading-8 text-brown/70">
                {t.thePlace.golfP2}
              </p>
            </Reveal>

            <Reveal>
              <h2 className="mb-6 font-display text-2xl text-brown md:text-3xl">
                {t.thePlace.gettingHereTitle}
              </h2>
              <p className="mb-4 leading-8 text-brown/70">
                {t.thePlace.gettingHereP1}
              </p>
              <p className="mb-16 leading-8 text-brown/70">
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
        <Footer />
      </main>
    </>
  );
}
