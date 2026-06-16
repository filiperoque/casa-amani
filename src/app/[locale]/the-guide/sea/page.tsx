import type { Metadata } from "next";
import { type Locale, getTranslations } from "@/i18n/translations";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sea | Casa Amani Madeira | Surf, Boats, Swimming",
  description:
    "Everything on or in the water around Madeira's west coast. Surf breaks, boat charters, swimming spots, diving. From Casa Amani in Arco da Calheta.",
  alternates: { canonical: "/the-guide/sea" },
};

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

      <section className="bg-cream px-6 py-16 md:py-24 lg:px-[120px] lg:py-32">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h1 className="mb-6 font-display text-3xl text-brown md:text-4xl lg:text-5xl">
              sea
            </h1>
            <p className="mb-12 text-lg leading-8 text-brown/70 md:text-xl">
              Everything on or in the water. The west coast of Madeira faces the
              open Atlantic with consistent swells, warm water year-round, and
              three recognised surf breaks within fifteen minutes of the house.
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
