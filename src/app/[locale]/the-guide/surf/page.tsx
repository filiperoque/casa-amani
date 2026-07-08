import type { Metadata } from "next";
import { type Locale, getTranslations } from "@/i18n/translations";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import BookCTA from "@/components/BookCTA";
import Footer from "@/components/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({
    locale: locale as Locale,
    path: "/the-guide/surf",
    page: "guideSurf",
    image: "/images/swimming-pool.jpg",
    imageAlt: "Swimming pool at Casa Amani overlooking the Atlantic",
  });
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you surf in Madeira?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Madeira's west coast has several recognised surf breaks, including Jardim do Mar, Paul do Mar, and Ponta Pequena. The island receives consistent Atlantic swells year-round. Winter brings the biggest waves (overhead to double-overhead); summer is smaller and better suited to intermediates and beginners.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best time of year to surf in Madeira?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "October to March for experienced surfers seeking larger swells. April to September for intermediate surfers and those learning. The water temperature ranges from 18 to 24 degrees Celsius, and a 3/2mm wetsuit is standard year-round.",
      },
    },
    {
      "@type": "Question",
      name: "How far is Casa Amani from the surf breaks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jardim do Mar is 8 km (10 minutes by car). Paul do Mar is 12 km (15 minutes). Ponta Pequena is approximately 15 minutes. All three are on the west coast, the same stretch of coastline where Casa Amani sits.",
      },
    },
    {
      "@type": "Question",
      name: "Is Madeira good for beginner surfers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In summer, yes. The west coast breaks are gentler between May and September, and local surf schools offer lessons for all levels. In winter the swells are powerful and better suited to experienced surfers. Porto da Cruz on the north coast has a more sheltered beach break that works for beginners year-round.",
      },
    },
  ],
};

export default async function SurfPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);
  const breadcrumbs = breadcrumbJsonLd(locale as Locale, [
    { name: "The Guide", path: "/the-guide" },
    { name: "Surf", path: "/the-guide/surf" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
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
                surfing west Madeira
              </h1>
              <p className="mb-12 text-lg leading-8 text-brown md:text-xl">
                The west coast of Madeira is a serious surf destination that
                most visitors to the island never discover. Three recognised
                breaks sit within fifteen minutes of Casa Amani, picking up
                consistent Atlantic swells year-round. No boutique accommodation
                on this stretch has claimed these waves. This is a guide to what
                we know.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="mb-6 font-display text-2xl text-brown md:text-3xl">
                why the west coast
              </h2>
              <p className="mb-4 leading-8 text-brown">
                Madeira sits in the mid-Atlantic, exposed to the same swell
                systems that light up the Canaries and the Portuguese mainland.
                The island's central mountain range, rising above 1,800 metres,
                splits the weather cleanly: the north coast takes the wind and
                rain; the south and west coasts sit in the lee, warmer, drier,
                and more consistent.
              </p>
              <p className="mb-4 leading-8 text-brown">
                The west coast, from Calheta to Porto Moniz, faces the open
                Atlantic with no landmass between it and the Caribbean. North-west
                and west swells arrive with less refraction than on the south coast,
                producing cleaner waves at the exposed points and reefs. In winter,
                the swells are substantial: overhead to double-overhead is routine
                from November to February, with occasional larger days. In summer,
                the waves drop to waist-to-shoulder height, gentler and more
                forgiving.
              </p>
              <p className="mb-12 leading-8 text-brown">
                Water temperature ranges from 18°C in February to 24°C in
                September. A 3/2mm wetsuit is standard year-round. The air is
                warm even when the water is cool. After a session you dry off in
                minutes.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="mb-6 font-display text-2xl text-brown md:text-3xl">
                three breaks within fifteen minutes
              </h2>

              <h3 className="mb-3 font-display text-lg text-brown md:text-xl">
                Jardim do Mar
              </h3>
              <p className="mb-2 text-sm text-brown">
                8 km / 10 minutes from Casa Amani
              </p>
              <p className="mb-8 leading-8 text-brown">
                The most famous wave on the island. A right-hand point break
                that peels along the rocky coastline of the village, producing
                long, walling rides when the swell is right. Best on
                north-west swells in the 4-to-8-foot range, with light
                easterly winds. Jardim do Mar hosted the WQS event in the
                early 2000s before the construction of a coastal wall altered
                the break. It still works, and on the right day it still
                delivers one of the best waves in the Macaronesia region.
                Intermediate to advanced. Rocky entry and exit; booties
                recommended.
              </p>

              <h3 className="mb-3 font-display text-lg text-brown md:text-xl">
                Paul do Mar
              </h3>
              <p className="mb-2 text-sm text-brown">
                12 km / 15 minutes from Casa Amani
              </p>
              <p className="mb-8 leading-8 text-brown">
                A powerful right-hander that breaks along the boulder-strewn
                coastline below the village. Heavier than Jardim do Mar, with
                a faster, more hollow section on bigger swells. This is
                where the experienced surfers on the island go when the swell
                pushes overhead. Winter is the primary season. The take-off zone
                is exposed and the paddle out is demanding when it's on. Not
                for beginners. After the session, Saboramar is a five-minute
                walk along the seafront for grilled fish and a cold beer.
              </p>

              <h3 className="mb-3 font-display text-lg text-brown md:text-xl">
                Ponta Pequena
              </h3>
              <p className="mb-2 text-sm text-brown">
                Approximately 15 minutes from Casa Amani
              </p>
              <p className="mb-12 leading-8 text-brown">
                A left-hand reef break that picks up swell from a slightly
                different angle than the other two. Less crowded, less
                documented, and often overlooked by visitors chasing the
                name-brand breaks. Works on west and south-west swells, which
                means it can fire when Jardim do Mar and Paul do Mar are
                flat or blown out. When it connects, the rides are long and
                the line-up is empty. Worth checking the forecast for
                south-west energy.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="mb-6 font-display text-2xl text-brown md:text-3xl">
                surf schools and board hire
              </h2>
              <p className="mb-12 leading-8 text-brown">
                Several operators run lessons and guided sessions from Paul do
                Mar and Jardim do Mar during the season. Boards, wetsuits, and
                transport to the breaks are typically included. We are
                confirming our recommended operators and will list them here
                shortly. In the meantime, ask us when you book and we will
                point you to whoever is running sessions that week.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="mb-6 font-display text-2xl text-brown md:text-3xl">
                a surf week at Casa Amani
              </h2>
              <p className="mb-4 leading-8 text-brown">
                The rhythm tends to settle by day two. You check the forecast
                over coffee, drive ten minutes to whichever break is working,
                surf for two or three hours, then come back to the house. The
                heated pool takes the edge off tired muscles. Lunch on the
                terrace. An afternoon of rest or remote work. By late afternoon
                you're in Paul do Mar for dinner at Saboramar, watching the sun
                set over the same water you surfed that morning.
              </p>
              <p className="mb-4 leading-8 text-brown">
                The house works for this. The garage fits two cars and a rack of
                boards. The outdoor shower rinses off salt and sand before you
                step inside. The Wi-Fi means you can work between sessions
                without losing a day. The minimum stay is seven nights, which
                is exactly the right length: enough days to catch different
                swell directions, enough downtime to recover, enough evenings
                to find the places that aren't in the guidebooks.
              </p>
              <p className="mb-12 leading-8 text-brown">
                Most surfers who stay here come back. The west coast is not
                Bali, not the Algarve, not the Canaries. It is quieter, less
                developed, and less crowded in the water. The waves are
                consistent, the setting is beautiful, and the drive home is
                ten minutes.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="mb-6 font-display text-2xl text-brown md:text-3xl">
                other water sports
              </h2>
              <p className="mb-4 leading-8 text-brown">
                <strong className="font-medium text-brown">
                  Stand-up paddleboard.
                </strong>{" "}
                Calheta beach and marina offer calm, sheltered water for SUP,
                particularly in the morning before the wind picks up. Boards can
                be hired at the marina. The water is clear and the views back
                toward the mountains are worth the early start.
              </p>
              <p className="mb-4 leading-8 text-brown">
                <strong className="font-medium text-brown">
                  Snorkelling and diving.
                </strong>{" "}
                The Garajau nature reserve, east of Funchal, is the primary
                dive and snorkel destination on the island. Volcanic
                underwater landscapes, grouper, rays, and occasional
                sightings of monk seals. Several operators run day trips
                from Funchal. The south-west coast has its own quieter spots
                for snorkelling from the rocks.
              </p>
              <p className="mb-4 leading-8 text-brown">
                <strong className="font-medium text-brown">Kayak.</strong>{" "}
                Guided kayak tours run along the south-west cliff line,
                launching from Calheta or Ribeira Brava. The coastline is
                dramatic from water level: sea caves, volcanic rock formations,
                and views of the terraced hillsides that you cannot get from the
                road.
              </p>
              <p className="mb-12 leading-8 text-brown">
                <strong className="font-medium text-brown">Sailing.</strong>{" "}
                Yacht charters and sailing trips operate from Funchal and
                Calheta marinas, ranging from sunset cruises to full-day trips
                along the coast. Whale and dolphin watching is the headline
                draw; the waters around Madeira are home to resident
                populations of short-finned pilot whales and bottlenose
                dolphins.
              </p>
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
                    <summary className="flex cursor-pointer items-start justify-between gap-4 text-brown transition-opacity hover:opacity-70 marker:content-none [&::-webkit-details-marker]:hidden">
                      <span className="text-base font-medium md:text-lg">
                        {item.name}
                      </span>
                      <span className="mt-1 shrink-0 text-brown transition-transform duration-300 group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 leading-7 text-brown md:text-base">
                      {item.acceptedAnswer.text}
                    </p>
                  </details>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <div className="border-t border-brown/10 pt-8">
                <BookCTA placement="surf-cta" label={t.bookCta} />
              </div>
            </Reveal>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
