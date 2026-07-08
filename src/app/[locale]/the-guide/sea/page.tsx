import type { Metadata } from "next";
import { type Locale, getTranslations } from "@/i18n/translations";
import { pageMetadata } from "@/lib/seo";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import Kicker from "@/components/Kicker";
import Footer from "@/components/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({
    locale: locale as Locale,
    path: "/the-guide/sea",
    page: "guideSea",
    image: "/images/swimming-pool.jpg",
    imageAlt: "Swimming pool at Casa Amani overlooking the Atlantic",
    noindex: true,
  });
}

const sections = [
  {
    title: "surf",
    href: "the-guide/surf",
    description: "Jardim do Mar, Paul do Mar, Ponta Pequena. The west coast breaks, ten minutes from the house.",
  },
  {
    title: "boats",
    href: null,
    description: "Private charters from Calheta and Funchal marinas. Coming soon.",
  },
  {
    title: "swimming",
    href: null,
    description: "Calheta beach, Porto Moniz natural pools, Seixal, the rock pools at Doca do Cavacas.",
  },
  {
    title: "diving and snorkelling",
    href: null,
    description: "Garajau marine reserve. Volcanic underwater landscapes, grouper, rays.",
  },
];

export default async function SeaPage({
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
            <h1 className="mb-6 font-display text-title-sm text-brown md:text-title lg:text-title-lg">
              sea
            </h1>
            <p className="mb-12 text-intro text-brown">
              Everything on or in the water. The west coast of Madeira faces the
              open Atlantic with consistent swells, warm water year-round, and
              three recognised surf breaks within fifteen minutes of the house.
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
                    <p className="text-prose text-brown">{s.description}</p>
                  </a>
                ) : (
                  <div className="flex h-full flex-col gap-3 border border-brown/10 p-6 opacity-60">
                    <Kicker>{String(i + 1).padStart(2, "0")}</Kicker>
                    <h2 className="font-display text-intro text-brown">{s.title}</h2>
                    <p className="text-prose text-brown">{s.description}</p>
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
