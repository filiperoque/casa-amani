import type { Metadata } from "next";
import { type Locale, getTranslations } from "@/i18n/translations";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import BookCTA from "@/components/BookCTA";
import Footer from "@/components/Footer";
import {
  westCoastBars,
  ponchaSpots,
  eventBars,
  type Bar,
} from "@/content/bars";

export const metadata: Metadata = {
  title:
    "Bars and Nightlife Near Casa Amani | West Madeira After Dark",
  description:
    "Sunset drinks, tiki cocktails, poncha bars, and the places the west coast of Madeira goes after dark. Curated by the owners of Casa Amani.",
  alternates: { canonical: "/the-guide/bars" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Casa Amani",
      item: "https://casa-amani.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "The Guide",
      item: "https://casa-amani.com/the-guide",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Bars",
      item: "https://casa-amani.com/the-guide/bars",
    },
  ],
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Bars and nightlife near Casa Amani Madeira",
  description:
    "Curated bars, poncha spots, and evening venues on the west coast of Madeira, near Arco da Calheta.",
  url: "https://casa-amani.com/the-guide/bars",
  isPartOf: {
    "@type": "WebSite",
    name: "Casa Amani Madeira",
    url: "https://casa-amani.com",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is poncha?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Poncha is Madeira's traditional drink, made from sugar cane rum (aguardente de cana), lemon or other citrus, and honey. Every village has its own version. Poncha do Emanuel in Arco da Calheta, a few minutes from Casa Amani, makes a rosemary-infused poncha that is worth the visit.",
      },
    },
    {
      "@type": "Question",
      name: "Is there nightlife on the west coast of Madeira?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The west coast is quieter than Funchal, but it has its own rhythm. Paul do Mar has sunset bars (Maktub, Bar da Pedra), Estreito da Calheta has Pukiki Tiki Bar, and Calhau Beach Club at Saccharum runs DJ afternoons and Fire Pit dinners in summer. For bigger nights, Doca do Cavacas in Funchal is 45 minutes by car.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I watch the sunset near Calheta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Paul do Mar is the go-to: Maktub and Bar da Pedra sit right on the seafront, facing west. Sunspot Cafe in Ponta do Sol is another good option. Both are within 15 minutes of Casa Amani.",
      },
    },
  ],
};

function BarCard({ bar }: { bar: Bar }) {
  return (
    <div className="border-t border-brown/10 py-8 first:border-t-0 first:pt-0">
      <div className="mb-2 flex items-baseline gap-3">
        <h3 className="font-display text-xl text-brown md:text-2xl">
          {bar.name}
        </h3>
        <span className="text-sm text-brown/50">{bar.location}</span>
      </div>
      <p className="leading-7 text-brown/70">{bar.editorial}</p>
    </div>
  );
}

export default async function BarsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main id="main">
        <Header menuLabel={t.header.menu} />

        <section className="bg-cream px-6 py-16 md:py-24 lg:py-32">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h1 className="mb-6 font-display text-3xl text-brown md:text-4xl lg:text-5xl">
                where to drink
              </h1>
              <p className="mb-12 text-lg leading-8 text-brown/70 md:text-xl">
                The west coast is not Funchal. The evenings are slower, the
                options fewer, the quality higher when you find the right ones.
                Sunset bars on the seafront, tiki cocktails above Calheta, and
                the island's traditional drink in a plain room with locals.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="mb-8 font-display text-2xl text-brown md:text-3xl">
                sunset and evening
              </h2>
              <div className="mb-16">
                {westCoastBars.map((b) => (
                  <BarCard key={b.name} bar={b} />
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h2 className="mb-8 font-display text-2xl text-brown md:text-3xl">
                poncha
              </h2>
              <p className="mb-8 leading-7 text-brown/70">
                Poncha is Madeira's drink: sugar cane rum, lemon or other
                citrus, honey. Every village has its own version; every poncha
                bar has its own opinion. Worth treating as its own category
                because the experience is distinctly Madeiran.
              </p>
              <div className="mb-16">
                {ponchaSpots.map((b) => (
                  <BarCard key={b.name} bar={b} />
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h2 className="mb-8 font-display text-2xl text-brown md:text-3xl">
                events and community
              </h2>
              <div className="mb-16">
                {eventBars.map((b) => (
                  <BarCard key={b.name} bar={b} />
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h2 className="mb-6 font-display text-2xl text-brown md:text-3xl">
                common questions
              </h2>
              <div className="mb-16 flex flex-col">
                {faqJsonLd.mainEntity.map((item, i) => (
                  <details
                    key={i}
                    className="group border-t border-brown/10 py-6 last:border-b"
                  >
                    <summary className="flex cursor-pointer items-start justify-between gap-4 text-brown marker:content-none [&::-webkit-details-marker]:hidden">
                      <span className="text-base font-medium md:text-lg">
                        {item.name}
                      </span>
                      <span className="mt-1 shrink-0 text-brown/40 transition-transform duration-300 group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 leading-7 text-brown/70 md:text-base">
                      {item.acceptedAnswer.text}
                    </p>
                  </details>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <div className="border-t border-brown/10 pt-8">
                <BookCTA placement="bars-cta" label={t.bookCta} />
              </div>
            </Reveal>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
