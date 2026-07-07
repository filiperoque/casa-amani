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
    path: "/the-guide/culture",
    page: "guideCulture",
    image: "/images/location.jpg",
    imageAlt: "Aerial view of the coast at Arco da Calheta, Madeira",
    noindex: true,
  });
}

const sections = [
  {
    title: "MUDAS",
    href: null,
    description: "Museu de Arte Contemporanea da Madeira. Paulo David architecture, the exhibition schedule, the bookshop, the cafe terrace.",
  },
  {
    title: "music nights",
    href: null,
    description: "Tropical Beats at Saccharum, L Concerts at Estalagem da Ponta do Sol, Purple Fridays, Doca do Cavacas.",
  },
  {
    title: "festivals",
    href: null,
    description: "Flower Festival, Carnival, Wine Festival, and the local saints' days.",
  },
  {
    title: "whale and dolphin",
    href: null,
    description: "Resident populations of short-finned pilot whales and bottlenose dolphins. Ethical operators only.",
  },
];

export default async function CulturePage({
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

      <section className="bg-cream px-6 py-16 md:py-24 lg:px-[120px] lg:py-32">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h1 className="mb-6 font-display text-3xl text-brown md:text-4xl lg:text-5xl">
              culture
            </h1>
            <p className="mb-12 text-lg leading-8 text-brown/70 md:text-xl">
              Things that are not food, water, or walking. Paulo David's
              architecture at MUDAS on the ridge above Calheta. Music nights
              that run late in Funchal. The festivals that mark the seasons.
              The marine life that circles the island.
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {sections.map((s) => (
              <Reveal key={s.title}>
                {s.href ? (
                  <a
                    href={`${base}/${s.href}`}
                    className="flex h-full flex-col gap-3 border border-brown/10 p-6 transition-colors hover:border-brown/30"
                  >
                    <h2 className="font-display text-xl text-brown">{s.title}</h2>
                    <p className="text-sm leading-6 text-brown/60">{s.description}</p>
                  </a>
                ) : (
                  <div className="flex h-full flex-col gap-3 border border-brown/10 p-6 opacity-60">
                    <h2 className="font-display text-xl text-brown">{s.title}</h2>
                    <p className="text-sm leading-6 text-brown/60">{s.description}</p>
                    <span className="mt-auto text-xs uppercase tracking-[3px] text-brown/30">coming soon</span>
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
