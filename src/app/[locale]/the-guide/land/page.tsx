import type { Metadata } from "next";
import { type Locale, getTranslations } from "@/i18n/translations";
import { pageMetadata } from "@/lib/seo";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import Kicker from "@/components/Kicker";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({
    locale: locale as Locale,
    path: "/the-guide/land",
    page: "guideLand",
    image: "/images/location.jpg",
    imageAlt: "Aerial view of the coast at Arco da Calheta, Madeira",
    noindex: true,
  });
}

const sections = [
  {
    title: "walks and levadas",
    href: null,
    description: "PR routes through laurel forest, along irrigation channels, across the ridgeline. Advance booking required since January 2026.",
  },
  {
    title: "viewpoints",
    href: null,
    description: "The four cardinal views of the island. Sunrise and sunset honestly noted.",
  },
  {
    title: "mountain biking",
    href: null,
    description: "Descents from Paul da Serra, the Calheta BTT routes, Freeride Madeira.",
  },
  {
    title: "golf",
    href: null,
    description: "Palheiro, Santo da Serra, Porto Santo. Three eighteen-hole courses.",
  },
  {
    title: "gardens",
    href: null,
    description: "Quinta do Palheiro, Monte Palace, the Botanical Garden.",
  },
];

export default async function LandPage({
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

      <section className="bg-cream px-gutter py-16 md:py-24 lg:px-gutter-lg lg:py-40">
        <div className="mx-auto max-w-copy">
          <Reveal>
            <Breadcrumbs
              items={[
                { label: "the guide", href: `${base}/the-guide` },
                { label: "land" },
              ]}
            />
            <h1 className="mb-6 font-display text-title-sm text-brown md:text-title lg:text-title-lg">
              land
            </h1>
            <p className="mb-12 text-intro text-brown">
              On foot and on wheels. The levadas thread through laurel forest
              older than the island's settlement. The viewpoints face the
              Atlantic from altitude. The paths are maintained, the signage is
              clear, the air is cool above 800 metres.
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {sections.map((s, i) => (
              <Reveal key={s.title}>
                {s.href ? (
                  <a
                    href={`${base}/${s.href}`}
                    className="flex h-full flex-col gap-3 border border-brown/10 p-6 transition-colors hover:border-brown/30"
                  >
                    <Kicker>{String(i + 1).padStart(2, "0")}</Kicker>
                    <h2 className="font-display text-intro text-brown">{s.title}</h2>
                    <p className="text-body text-brown">{s.description}</p>
                  </a>
                ) : (
                  <div className="flex h-full flex-col gap-3 border border-brown/10 p-6">
                    <Kicker>{String(i + 1).padStart(2, "0")}</Kicker>
                    <h2 className="font-display text-intro text-brown">{s.title}</h2>
                    <p className="text-body text-brown">{s.description}</p>
                    <span className="mt-auto text-sm uppercase tracking-cta text-brown">coming soon</span>
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
