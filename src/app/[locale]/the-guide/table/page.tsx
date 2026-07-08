import type { Metadata } from "next";
import { type Locale, getTranslations } from "@/i18n/translations";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import GuideEntryCard from "@/components/GuideEntryCard";
import Footer from "@/components/Footer";
import { restaurants } from "@/content/guide/table/restaurants";
import { bars } from "@/content/guide/table/bars";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({
    locale: locale as Locale,
    path: "/the-guide/table",
    page: "guideTable",
    image: "/images/outdoor-dining.jpg",
    imageAlt: "Outdoor terrace dining at Casa Amani",
  });
}

export default async function TablePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);

  const restaurantSchemas = restaurants.map((r) => ({
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: r.title,
    description: r.body,
    address: {
      "@type": "PostalAddress",
      addressLocality: r.location,
      addressRegion: "Madeira",
      addressCountry: "PT",
    },
    ...(r.distanceKm && {
      geo: {
        "@type": "GeoCoordinates",
        description: `${r.distanceKm} km from Casa Amani`,
      },
    }),
  }));

  return (
    <>
      {restaurantSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <main id="main">
        <Header menuLabel={t.header.menu} />

      <section className="bg-cream px-gutter py-16 md:py-24 lg:px-gutter-lg lg:py-32">
        <div className="mx-auto max-w-copy">
          <Reveal>
            <h1 className="mb-6 font-display text-3xl text-brown md:text-4xl lg:text-5xl">
              table
            </h1>
            <p className="mb-16 text-lg leading-8 text-brown md:text-xl">
              Where the food and drink lives. Every place listed is somewhere we
              have eaten or drunk, on the west coast of Madeira or worth the
              drive from Arco da Calheta. Nothing sponsored, nothing paid.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="mb-8 font-display text-2xl text-brown md:text-3xl">
              restaurants
            </h2>
          </Reveal>
          <div className="mb-16">
            {restaurants.map((entry) => (
              <GuideEntryCard key={entry.slug} entry={entry} />
            ))}
          </div>

          <Reveal>
            <h2 className="mb-8 font-display text-2xl text-brown md:text-3xl">
              bars and poncha
            </h2>
          </Reveal>
          <div className="mb-16">
            {bars.map((entry) => (
              <GuideEntryCard key={entry.slug} entry={entry} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
    </>
  );
}
