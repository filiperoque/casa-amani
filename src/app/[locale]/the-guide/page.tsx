import type { Metadata } from "next";
import { type Locale, getTranslations } from "@/i18n/translations";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Guide | Casa Amani Madeira | West Coast Guide",
  description:
    "A curated guide to the west coast of Madeira from Casa Amani: restaurants, bars, surf, and more in Calheta, Paul do Mar, and Ponta do Sol.",
  alternates: { canonical: "/the-guide" },
};

const categories = [
  {
    title: "restaurants",
    href: "the-guide/restaurants",
    description:
      "Grilled fish in Paul do Mar, espetada in Calheta, tasting menus in the vineyard terraces.",
  },
  {
    title: "bars",
    href: "the-guide/bars",
    description:
      "Sunset drinks, tiki cocktails, and the places the west coast goes after dark.",
  },
  {
    title: "surf",
    href: "the-guide/surf",
    description:
      "Jardim do Mar, Paul do Mar, Ponta Pequena. The west coast breaks, ten minutes away.",
  },
];

export default async function TheIslandPage({
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

      <section className="bg-cream px-6 py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h1 className="mb-6 font-display text-3xl text-brown md:text-4xl lg:text-5xl">
              the guide
            </h1>
            <p className="mb-12 text-lg leading-8 text-brown/70 md:text-xl">
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
                  <p className="text-sm leading-6 text-brown/60">
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
