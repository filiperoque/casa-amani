import type { Metadata } from "next";
import { type Locale, getTranslations } from "@/i18n/translations";
import { pageMetadata, breadcrumbJsonLd, SITE_URL } from "@/lib/seo";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({
    locale: locale as Locale,
    path: "/experiences",
    page: "experiences",
    image: "/images/outdoor-dining.jpg",
    imageAlt: "Outdoor terrace dining at Casa Amani",
  });
}

function buildServiceJsonLd(items: readonly { title: string; description: string }[]) {
  return items.map((item) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: item.title,
    description: item.description,
    provider: {
      "@type": "VacationRental",
      "@id": `${SITE_URL}/#vacation-rental`,
      name: "Casa Amani",
      url: SITE_URL,
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
  const breadcrumbs = breadcrumbJsonLd(locale as Locale, [
    { name: "Experiences", path: "/experiences" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
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

        <section className="bg-cream px-6 py-16 md:py-24 lg:py-40">
          <div className="mx-auto max-w-copy">
            <Reveal>
              <h1 className="mb-6 font-display text-title-sm text-brown md:text-title lg:text-title-lg">
                {t.experiences.title}
              </h1>
              <p className="mb-16 text-intro text-brown">
                {t.experiences.intro}
              </p>
            </Reveal>

            <div className="flex flex-col">
              {t.experiences.items.map((item, i) => (
                <Reveal key={i} delay={Math.min(i * 40, 200)}>
                  <div className="border-t border-brown/10 py-8 first:border-t-0 first:pt-0 last:border-b">
                    <h2 className="mb-2 font-display text-intro text-brown md:text-title-sm">
                      {item.title}
                    </h2>
                    <p className="text-body text-brown">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <Reveal>
          <section className="bg-cream px-gutter py-12 lg:px-gutter-lg">
            <div className="mx-auto max-w-copy flex flex-wrap gap-x-8 gap-y-2 text-sm text-brown">
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
