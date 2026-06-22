import type { Metadata } from "next";
import { type Locale, getTranslations } from "@/i18n/translations";
import OptimizedImage from "@/components/OptimizedImage";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import BookCTA from "@/components/BookCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Remote Work | Casa Amani Madeira | Arco da Calheta",
  description:
    "A private villa with dedicated workspaces, fibre Wi-Fi, and external monitor. Madeira's quiet alternative to coliving. Designed for stays of a week or longer.",
  alternates: {
    canonical: "/remote-work",
  },
  openGraph: {
    title: "Remote Work | Casa Amani Madeira | Arco da Calheta",
    description:
      "A private villa with dedicated workspaces, fibre Wi-Fi, and external monitor. Madeira's quiet alternative to coliving. Designed for stays of a week or longer.",
    images: [
      {
        url: "/images/guest-bedroom.jpg",
        width: 1200,
        height: 630,
        alt: "Guest bedroom workspace at Casa Amani with desk and external monitor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Remote Work | Casa Amani Madeira | Arco da Calheta",
    description:
      "A private villa with dedicated workspaces, fibre Wi-Fi, and external monitor. Madeira's quiet alternative to coliving. Designed for stays of a week or longer.",
    images: ["/images/guest-bedroom.jpg"],
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
        text: "Coliving spaces like Outsite (Ponta do Sol) or Homeoffice Madeira (Santo da Serra) are community-driven shared houses, with group meals, social calendars, and bunk or twin options. Casa Amani is private. The house is yours, the pool is yours, the kitchen is yours. It suits couples, families, and small groups who want a dedicated workspace and the calm of an unshared home, on a longer rhythm than a weekend.",
      },
    },
    {
      "@type": "Question",
      name: "What time zone is Madeira?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GMT/WET (same as London). UTC+0 in winter, UTC+1 in summer. This overlaps comfortably with UK, Western Europe, and the US East Coast morning, making it one of the easiest remote-work time zones in Southern Europe.",
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

  const setupItems = [
    t.remoteWork.setup.wifi,
    t.remoteWork.setup.desks,
    t.remoteWork.setup.monitor,
    t.remoteWork.setup.timezone,
    t.remoteWork.setup.quiet,
    t.remoteWork.setup.minimumStay,
  ];

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

      <main id="main">
        <Header menuLabel={t.header.menu} />

        <section className="bg-cream px-6 py-16 md:py-24 lg:py-32">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h1 className="mb-6 font-display text-3xl text-brown md:text-4xl lg:text-5xl">
                {t.remoteWork.title}
              </h1>
              <p className="mb-12 text-lg leading-8 text-brown/70 md:text-xl">
                {t.remoteWork.intro}
              </p>
            </Reveal>

            <Reveal>
              <div className="relative mb-16 h-[300px] overflow-hidden md:h-[400px] lg:h-[500px]">
                <OptimizedImage
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
                {t.remoteWork.setupTitle}
              </h2>
              <dl className="mb-16 grid grid-cols-1 gap-6 text-brown/80 md:grid-cols-2">
                {setupItems.map((item) => (
                  <div key={item.label}>
                    <dt className="mb-1 text-sm font-medium uppercase tracking-[3px] text-brown">
                      {item.label}
                    </dt>
                    <dd>{item.text}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal>
              <h2 className="mb-6 font-display text-2xl text-brown md:text-3xl">
                {t.remoteWork.colivingTitle}
              </h2>
              <p className="mb-4 leading-8 text-brown/70">
                {t.remoteWork.colivingP1}
              </p>
              <p className="mb-16 leading-8 text-brown/70">
                {t.remoteWork.colivingP2}
              </p>
            </Reveal>

            <Reveal>
              <h2 className="mb-6 font-display text-2xl text-brown md:text-3xl">
                {t.remoteWork.islandTitle}
              </h2>
              <p className="mb-4 leading-8 text-brown/70">
                {t.remoteWork.islandP1}
              </p>
              <p className="mb-16 leading-8 text-brown/70">
                {t.remoteWork.islandP2}
              </p>
            </Reveal>

            <Reveal>
              <div className="border-t border-brown/10 pt-8">
                <BookCTA placement="remote-work-cta" label={t.bookCta} />
              </div>
            </Reveal>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
