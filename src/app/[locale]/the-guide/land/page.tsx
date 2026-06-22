import type { Metadata } from "next";
import { type Locale, getTranslations } from "@/i18n/translations";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Land | Casa Amani Madeira | Walks, Levadas, Golf",
  description:
    "On foot and on wheels. Walks, levadas, viewpoints, mountain biking, golf, gardens. From Casa Amani in Arco da Calheta, Madeira.",
  alternates: { canonical: "/the-guide/land" },
  openGraph: {
    title: "Land | Casa Amani Madeira | Walks, Levadas, Golf",
    description:
      "On foot and on wheels. Walks, levadas, viewpoints, mountain biking, golf, gardens. From Casa Amani in Arco da Calheta, Madeira.",
    images: [
      {
        url: "/images/location.jpg",
        width: 1200,
        height: 630,
        alt: "Aerial view of the coast at Arco da Calheta, Madeira",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Land | Casa Amani Madeira | Walks, Levadas, Golf",
    description:
      "On foot and on wheels. Walks, levadas, viewpoints, mountain biking, golf, gardens. From Casa Amani in Arco da Calheta, Madeira.",
    images: ["/images/location.jpg"],
  },
};

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

      <section className="bg-cream px-6 py-16 md:py-24 lg:px-[120px] lg:py-32">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h1 className="mb-6 font-display text-3xl text-brown md:text-4xl lg:text-5xl">
              land
            </h1>
            <p className="mb-12 text-lg leading-8 text-brown/70 md:text-xl">
              On foot and on wheels. The levadas thread through laurel forest
              older than the island's settlement. The viewpoints face the
              Atlantic from altitude. The paths are maintained, the signage is
              clear, the air is cool above 800 metres.
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
