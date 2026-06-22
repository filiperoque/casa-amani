import type { Metadata } from "next";
import { type Locale, getTranslations } from "@/i18n/translations";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import GuideEntryCard from "@/components/GuideEntryCard";
import Footer from "@/components/Footer";
import { restaurants } from "@/content/guide/table/restaurants";
import { bars } from "@/content/guide/table/bars";

export const metadata: Metadata = {
  title: "Table | Casa Amani Madeira | Where to Eat and Drink",
  description:
    "Restaurants, bars, poncha spots, and wine on the west coast of Madeira. Curated by the owners of Casa Amani.",
  alternates: { canonical: "/the-guide/table" },
  openGraph: {
    title: "Table | Casa Amani Madeira | Where to Eat and Drink",
    description:
      "Restaurants, bars, poncha spots, and wine on the west coast of Madeira. Curated by the owners of Casa Amani.",
    images: [
      {
        url: "/images/outdoor-dining.jpg",
        width: 1200,
        height: 630,
        alt: "Outdoor terrace dining at Casa Amani",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Table | Casa Amani Madeira | Where to Eat and Drink",
    description:
      "Restaurants, bars, poncha spots, and wine on the west coast of Madeira. Curated by the owners of Casa Amani.",
    images: ["/images/outdoor-dining.jpg"],
  },
};

export default async function TablePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);

  return (
    <main id="main">
      <Header menuLabel={t.header.menu} />

      <section className="bg-cream px-6 py-16 md:py-24 lg:px-[120px] lg:py-32">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h1 className="mb-6 font-display text-3xl text-brown md:text-4xl lg:text-5xl">
              table
            </h1>
            <p className="mb-16 text-lg leading-8 text-brown/70 md:text-xl">
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
  );
}
