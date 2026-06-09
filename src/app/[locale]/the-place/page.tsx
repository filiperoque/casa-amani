import type { Metadata } from "next";
import { type Locale, getTranslations } from "@/i18n/translations";
import Image from "next/image";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import BookCTA from "@/components/BookCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Arco da Calheta — Casa Amani | West Madeira",
  description:
    "Arco da Calheta sits on the south-west coast of Madeira — the quietest, sunniest stretch of the island. A village on a hill above the Atlantic, 30 minutes from Funchal.",
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

      <main>
        <div className="bg-warm">
          <Header menuLabel={t.header.menu} />
        </div>

        <section className="bg-cream px-6 py-16 md:py-24 lg:py-32">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h1 className="mb-6 font-display text-3xl text-brown md:text-4xl lg:text-5xl">
                Arco da Calheta, Madeira
              </h1>
              <p className="mb-12 text-lg leading-8 text-brown/70 md:text-xl">
                Arco da Calheta is a parish in Calheta municipality, on the
                south-west coast of Madeira island, Portugal. It sits on a
                hillside above the Atlantic, facing south — the quietest,
                sunniest stretch of an island that already has one of Europe&apos;s
                mildest climates. The village is small. The light is
                consistent. The pace is slow by design, not by accident.
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
                distances
              </h2>
              <dl className="mb-16 grid grid-cols-1 gap-4 text-brown/80 sm:grid-cols-2">
                {[
                  ["Calheta beach & marina", "6 km / 5 min"],
                  ["Nearest bar & restaurant", "1 km"],
                  ["Funchal", "30 min by car"],
                  ["Madeira Airport (FNC)", "48 km / 50 min"],
                  ["Jardim do Mar (surf)", "8 km / 10 min"],
                  ["Paul do Mar", "12 km / 15 min"],
                  ["Ponta do Sol", "15 km / 20 min"],
                  ["Pico do Arieiro", "55 km / 75 min"],
                ].map(([place, distance]) => (
                  <div key={place} className="flex justify-between border-b border-brown/10 pb-3">
                    <span>{place}</span>
                    <span className="text-brown/50">{distance}</span>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal>
              <h2 className="mb-6 font-display text-2xl text-brown md:text-3xl">
                the west coast
              </h2>
              <p className="mb-4 leading-8 text-brown/70">
                Most visitors to Madeira stay in Funchal or along the south-east
                coast. The west side — from Ribeira Brava to Porto Moniz — is
                where the island opens up. Fewer hotels, fewer tour buses,
                longer views. The south-west coast in particular gets more sun
                hours than anywhere else on the island, sheltered from the
                north-east trade winds by the central mountain range.
              </p>
              <p className="mb-16 leading-8 text-brown/70">
                Calheta municipality is the heart of this stretch. Its marina
                has one of the island&apos;s only sand beaches (imported, but
                pleasant). The village of Jardim do Mar, ten minutes downhill, is
                a recognised surf break. Paul do Mar, further along the coast,
                is quieter still. Inland, the levadas — Madeira&apos;s network of
                irrigation channels — thread through laurel forest that&apos;s been
                here since before the island was settled.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="mb-6 font-display text-2xl text-brown md:text-3xl">
                the climate
              </h2>
              <p className="mb-4 leading-8 text-brown/70">
                Madeira&apos;s south-west coast is mild year-round. Summer
                averages 22–26°C; winter rarely drops below 16°C. Rain falls
                mostly on the north side and in the mountains — the south-west
                is the dry side. The sea temperature ranges from 18°C in winter
                to 24°C in summer, warm enough for swimming most of the year.
              </p>
              <p className="mb-16 leading-8 text-brown/70">
                There is no bad season. The island is greenest in winter, busiest
                in August, and at its most balanced in April and October — warm
                without the crowds, flowering everywhere, the levadas at their
                fullest.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="mb-6 font-display text-2xl text-brown md:text-3xl">
                getting here
              </h2>
              <p className="mb-4 leading-8 text-brown/70">
                Madeira International Airport (FNC) has direct flights
                year-round from London, Frankfurt, Amsterdam, Paris, Lisbon,
                Porto, Warsaw, and a dozen other European cities. Low-cost
                carriers (easyJet, Ryanair, Wizz Air) and full-service airlines
                (TAP, British Airways, Condor) both serve the island.
              </p>
              <p className="mb-16 leading-8 text-brown/70">
                From the airport, Arco da Calheta is about 50 minutes west along
                the VR1 motorway. A hire car is recommended — the west side is
                best explored at your own pace, and the roads are good.
              </p>
            </Reveal>

            <Reveal>
              <div className="border-t border-brown/10 pt-8">
                <BookCTA placement="the-place-cta" />
              </div>
            </Reveal>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
