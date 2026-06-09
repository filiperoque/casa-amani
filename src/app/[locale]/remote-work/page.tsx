import type { Metadata } from "next";
import { type Locale, getTranslations } from "@/i18n/translations";
import Image from "next/image";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Remote work from Madeira — Casa Amani | Arco da Calheta",
  description:
    "A private villa with dedicated workspaces, fibre Wi-Fi, and external monitor — Madeira's quiet alternative to coliving. Designed for stays of a week or longer.",
  alternates: {
    canonical: "/remote-work",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Casa Amani", item: "https://casa-amani.com" },
    { "@type": "ListItem", position: 2, name: "Remote Work", item: "https://casa-amani.com/remote-work" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Casa Amani suitable for remote work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Both bedrooms have a desk, and the guest bedroom has an external monitor. Free fibre Wi-Fi runs throughout the villa and terrace. Stays of one week or longer are encouraged. The GMT/WET time zone overlaps with the UK, most of Europe, and the US East Coast morning.",
      },
    },
    {
      "@type": "Question",
      name: "How is Casa Amani different from coliving in Madeira?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Coliving spaces like Outsite (Ponta do Sol) or Homeoffice Madeira (Santo da Serra) are community-driven shared houses. Casa Amani is a private villa — your own home for the duration of your stay. No shared rooms, no social calendar, no strangers. It suits couples, families, or small groups who want privacy and focus alongside the social life of the island.",
      },
    },
    {
      "@type": "Question",
      name: "What time zone is Madeira?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GMT/WET (same as London). UTC+0 in winter, UTC+1 in summer. This overlaps comfortably with UK, Western Europe, and the US East Coast morning — making it one of the easiest remote-work time zones in Southern Europe.",
      },
    },
  ],
};

export default async function RemoteWorkPage({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main>
        <div className="bg-warm">
          <Header menuLabel={t.header.menu} />
        </div>

        <section className="bg-cream px-6 py-16 md:py-24 lg:py-32">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h1 className="mb-6 font-display text-3xl text-brown md:text-4xl lg:text-5xl">
                work from Madeira&apos;s quiet side
              </h1>
              <p className="mb-12 text-lg leading-8 text-brown/70 md:text-xl">
                Casa Amani is a private villa with dedicated workspaces, fibre
                Wi-Fi, and an external monitor — on the south-west coast of
                Madeira, where the sun is most consistent and the crowds are
                not. Designed for stays of a week or longer, equally suited to
                focused solo work and working couples.
              </p>
            </Reveal>

            <Reveal>
              <div className="relative mb-16 h-[300px] overflow-hidden md:h-[400px] lg:h-[500px]">
                <Image
                  src="/images/guest-bedroom.jpg"
                  alt="Guest bedroom workspace at Casa Amani with desk, external monitor, and natural light"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
            </Reveal>

            <Reveal>
              <h2 className="mb-6 font-display text-2xl text-brown md:text-3xl">
                the setup
              </h2>
              <dl className="mb-16 grid grid-cols-1 gap-6 text-brown/80 md:grid-cols-2">
                <div>
                  <dt className="mb-1 text-sm font-medium uppercase tracking-[3px] text-brown">
                    Wi-Fi
                  </dt>
                  <dd>
                    Fibre broadband. Fast enough for video calls, large uploads,
                    and streaming simultaneously.
                  </dd>
                </div>
                <div>
                  <dt className="mb-1 text-sm font-medium uppercase tracking-[3px] text-brown">
                    Desks
                  </dt>
                  <dd>
                    Dedicated desk in both bedrooms. The main bedroom desk faces
                    the Atlantic.
                  </dd>
                </div>
                <div>
                  <dt className="mb-1 text-sm font-medium uppercase tracking-[3px] text-brown">
                    Monitor
                  </dt>
                  <dd>
                    External monitor in the guest bedroom, ready to connect to
                    your laptop.
                  </dd>
                </div>
                <div>
                  <dt className="mb-1 text-sm font-medium uppercase tracking-[3px] text-brown">
                    Time zone
                  </dt>
                  <dd>
                    GMT/WET (same as London). Overlaps with most of Europe and
                    the US East Coast morning.
                  </dd>
                </div>
                <div>
                  <dt className="mb-1 text-sm font-medium uppercase tracking-[3px] text-brown">
                    Quiet
                  </dt>
                  <dd>
                    Arco da Calheta is a hillside village. No traffic noise, no
                    bar noise, no hotel corridors.
                  </dd>
                </div>
                <div>
                  <dt className="mb-1 text-sm font-medium uppercase tracking-[3px] text-brown">
                    Minimum stay
                  </dt>
                  <dd>
                    Seven nights. Most remote workers stay two to four weeks.
                  </dd>
                </div>
              </dl>
            </Reveal>

            <Reveal>
              <h2 className="mb-6 font-display text-2xl text-brown md:text-3xl">
                not coliving
              </h2>
              <p className="mb-4 leading-8 text-brown/70">
                You may also be considering Outsite (Ponta do Sol) or Homeoffice
                Madeira (Santo da Serra). They&apos;re community-driven shared
                houses — group meals, social calendars, bunk or twin options.
                Good if you&apos;re a solo traveller building a network.
              </p>
              <p className="mb-16 leading-8 text-brown/70">
                Casa Amani is the private alternative. Your own house, your own
                pool, your own schedule. No strangers in the kitchen at
                breakfast. It suits couples, families, and small groups who want
                the focus of a dedicated space without the friction of shared
                living.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="mb-6 font-display text-2xl text-brown md:text-3xl">
                the island for remote work
              </h2>
              <p className="mb-4 leading-8 text-brown/70">
                Madeira is a recognised digital nomad destination. The Digital
                Nomad Village in Ponta do Sol (30 minutes east) runs a coworking
                space and community programme. Funchal has several coworking
                spaces if you want a change of scene. Portugal&apos;s D8 visa
                makes stays longer than 90 days straightforward for non-EU
                nationals.
              </p>
              <p className="mb-16 leading-8 text-brown/70">
                The climate helps. The south-west coast averages 17–24°C
                year-round, with more sunshine hours than Funchal. You work in
                the morning, swim after lunch, walk the levadas before dinner.
                The rhythm settles quickly.
              </p>
            </Reveal>

            <Reveal>
              <div className="border-t border-brown/10 pt-8">
                <a
                  href="https://www.airbnb.co.uk/rooms/1695506665949683620"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-brown bg-brown/[0.06] px-6 py-3 font-display text-sm uppercase tracking-[4px] text-brown transition-colors hover:bg-brown/15"
                >
                  Book a stay
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
