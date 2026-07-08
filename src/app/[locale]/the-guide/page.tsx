import type { Metadata } from "next";
import { type Locale, getTranslations } from "@/i18n/translations";
import { pageMetadata } from "@/lib/seo";
import Header from "@/components/Header";
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
    path: "/the-guide",
    page: "guide",
    image: "/images/location.jpg",
    imageAlt: "Aerial view of the coast at Arco da Calheta, Madeira",
  });
}

const categories = [
  {
    title: "land",
    href: "the-guide/land",
    description: "Walks, levadas, viewpoints, mountain biking, golf, gardens.",
  },
  {
    title: "sea",
    href: "the-guide/sea",
    description: "Surf, boats, swimming, diving. The Atlantic from in it.",
  },
  {
    title: "surf",
    href: "the-guide/surf",
    description: "Jardim do Mar, Paul do Mar, Ponta Pequena. A dedicated guide to the west-coast breaks.",
  },
  {
    title: "table",
    href: "the-guide/table",
    description: "Restaurants, bars, poncha, wine, rum. Where the food and drink lives.",
  },
  {
    title: "culture",
    href: "the-guide/culture",
    description: "Contemporary art, music nights, festivals, marine life.",
  },
  {
    title: "practical",
    href: "the-guide/practical",
    description: "Getting around, safety, emergency contacts, apps.",
  },
];

export default async function GuidePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);
  const base = `/${locale}`;

  return (
    <main id="main">
      <Header menuLabel={t.header.menu} />

      <section className="bg-cream px-gutter py-16 md:py-24 lg:px-gutter-lg lg:py-32">
        <div className="mx-auto max-w-copy">
          <Reveal>
            <h1 className="mb-6 font-display text-3xl text-brown md:text-4xl lg:text-5xl">
              the guide
            </h1>
            <p className="mb-12 text-lg leading-8 text-brown md:text-xl">
              Places we go and send guests to on the west coast of Madeira. Each
              entry is somewhere we have eaten, drunk, surfed, or spent time.
              Nothing sponsored, nothing paid. Updated when something changes.
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <Reveal key={cat.title}>
                <a
                  href={`${base}/${cat.href}`}
                  className="flex h-full flex-col gap-3 border border-brown/10 p-6 transition-colors hover:border-brown/30"
                >
                  <h2 className="font-display text-xl text-brown">
                    {cat.title}
                  </h2>
                  <p className="text-sm leading-6 text-brown">
                    {cat.description}
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
