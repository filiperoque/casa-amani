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
    path: "/the-guide/practical",
    page: "guidePractical",
    image: "/images/living-space.jpg",
    imageAlt: "Open-plan living space at Casa Amani",
    noindex: true,
  });
}

const sections = [
  {
    title: "getting around",
    href: null,
    description: "Local taxis, Uber and Bolt coverage, car hire. A car is recommended for most things.",
  },
  {
    title: "babysitting",
    href: null,
    description: "Vetted operators with English, Portuguese, and German speakers.",
  },
  {
    title: "health and pharmacy",
    href: null,
    description: "The Calheta health centre, the 24-hour pharmacy in Funchal, after-hours protocol.",
  },
  {
    title: "safety on walks",
    href: null,
    description: "The nine rules, the Prociv Madeira app, what to carry.",
  },
  {
    title: "emergency contacts",
    href: null,
    description: "112 national, Civil Protection, Sea Rescue, Calheta Police, hospitals.",
  },
  {
    title: "apps",
    href: null,
    description: "AllTrails, Komoot, Bolt, Prociv Madeira, the official tourism app.",
  },
];

export default async function PracticalPage({
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
              practical
            </h1>
            <p className="mb-12 text-intro text-brown">
              The household management of the trip. How to get around, who to
              call, what to download. The things that make the difference
              between a smooth stay and a stressful one.
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
