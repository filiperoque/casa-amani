import type { Metadata } from "next";
import { type Locale, getTranslations } from "@/i18n/translations";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Experiences | Casa Amani Madeira | Arco da Calheta",
  description:
    "Services arranged at Casa Amani Madeira: private chef, massage, yoga, golf, pre-arrival stocking, babysitting, and flowers. With notice, ahead of arrival or during the stay.",
  alternates: { canonical: "/experiences" },
  openGraph: {
    title: "Experiences | Casa Amani Madeira | Arco da Calheta",
    description:
      "Services arranged at Casa Amani Madeira: private chef, massage, yoga, golf, pre-arrival stocking, babysitting, and flowers. With notice, ahead of arrival or during the stay.",
    images: [
      {
        url: "/images/outdoor-dining.jpg",
        width: 1200,
        height: 630,
        alt: "Outdoor terrace dining at Casa Amani",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Experiences | Casa Amani Madeira | Arco da Calheta",
    description:
      "Services arranged at Casa Amani Madeira: private chef, massage, yoga, golf, pre-arrival stocking, babysitting, and flowers. With notice, ahead of arrival or during the stay.",
    images: ["/images/outdoor-dining.jpg"],
  },
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
      name: "Experiences",
      item: "https://casa-amani.com/experiences",
    },
  ],
};

function buildServiceJsonLd(items: readonly { title: string; description: string }[]) {
  return items.map((item) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: item.title,
    description: item.description,
    provider: {
      "@type": "VacationRental",
      "@id": "https://casa-amani.com/#vacation-rental",
      name: "Casa Amani",
      url: "https://casa-amani.com",
    },
    areaServed: {
      "@type": "Place",
      name: "Arco da Calheta, Madeira",
    },
  }));
}

export default async function ExperiencesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);
  const serviceJsonLd = buildServiceJsonLd(t.experiences.items);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {serviceJsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <main id="main">
        <Header menuLabel={t.header.menu} />

        <section className="bg-cream px-6 py-16 md:py-24 lg:py-32">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h1 className="mb-6 font-display text-3xl text-brown md:text-4xl lg:text-5xl">
                {t.experiences.title}
              </h1>
              <p className="mb-16 text-lg leading-8 text-brown/70 md:text-xl">
                {t.experiences.intro}
              </p>
            </Reveal>

            <div className="flex flex-col">
              {t.experiences.items.map((item, i) => (
                <Reveal key={i} delay={Math.min(i * 40, 200)}>
                  <div className="border-t border-brown/10 py-8 first:border-t-0 first:pt-0 last:border-b">
                    <h2 className="mb-2 font-display text-xl text-brown md:text-2xl">
                      {item.title}
                    </h2>
                    <p className="leading-7 text-brown/70">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <Reveal>
          <section className="bg-cream px-6 py-12 lg:px-[120px]">
            <div className="mx-auto max-w-3xl flex flex-wrap gap-x-8 gap-y-2 text-sm text-brown/60">
              <a href={`/${locale}/house`} className="transition-colors hover:text-brown">The house</a>
              <a href={`/${locale}/the-guide/table`} className="transition-colors hover:text-brown">Where to eat</a>
              <a href={`/${locale}/the-guide/sea`} className="transition-colors hover:text-brown">Sea activities</a>
              <a href={`/${locale}/faq`} className="transition-colors hover:text-brown">FAQ</a>
            </div>
          </section>
        </Reveal>
        <Footer />
      </main>
    </>
  );
}
