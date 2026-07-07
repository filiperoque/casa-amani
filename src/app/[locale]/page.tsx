import type { Metadata } from "next";
import { type Locale, getTranslations } from "@/i18n/translations";
import { pageMetadata, SITE_URL } from "@/lib/seo";
import LandingScene from "@/components/LandingScene";
import Header from "@/components/Header";
import OptimizedImage from "@/components/OptimizedImage";
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
    path: "",
    page: "home",
    image: "/images/hero.jpg",
    imageAlt: "Interior of Casa Amani with ocean views across the Atlantic, Arco da Calheta, Madeira",
  });
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: "Casa Amani Madeira",
  alternateName: "Casa Amani",
  inLanguage: ["en", "pt", "de", "fr", "pl"],
  publisher: { "@id": `${SITE_URL}/#vacation-rental` },
};

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);

  return (
    <main id="main" className="min-h-screen bg-warm">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Header menuLabel={t.header.menu} overlay mode="hero" />
      <div className="hero-full relative flex items-center justify-center overflow-hidden bg-[#bb9669]">
        <LandingScene
          title={t.landing.title}
          subtitle={t.landing.subtitle}
          intro={t.landing.intro}
          cta={t.landing.cta}
          ctaHref="https://www.airbnb.co.uk/rooms/1695506665949683620"
        />
      </div>

      {/* the house, briefly */}
      <Reveal>
        <section className="bg-cream px-6 py-16 md:py-24 lg:px-[120px]">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 font-display text-2xl text-brown md:text-3xl">
              {t.home.briefTitle}
            </h2>
            <p className="mb-8 leading-8 text-brown/70 md:text-lg">
              {t.home.briefBody}
            </p>
            <ul className="mb-10 flex flex-wrap gap-x-3 gap-y-3">
              {t.home.facts.map((fact) => (
                <li
                  key={fact}
                  className="border border-brown/20 px-4 py-2 text-sm text-brown/70"
                >
                  {fact}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              <a
                href={`/${locale}/house`}
                className="text-brown underline transition-colors hover:text-brown/70"
              >
                {t.home.houseLink} &rarr;
              </a>
              <span className="text-sm text-brown/50">{t.home.bookingNote}</span>
            </div>
          </div>
        </section>
      </Reveal>

      {/* photo strip into the house */}
      <section className="bg-cream px-6 pb-16 md:pb-24 lg:px-[120px]">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { src: "/images/living-space.jpg", alt: "Open-plan living space at Casa Amani with terrace access" },
            { src: "/images/swimming-pool.jpg", alt: "The 7-metre pool at Casa Amani overlooking the Atlantic" },
            { src: "/images/guest-bedroom.jpg", alt: "Guest bedroom at Casa Amani with built-in desk and monitor" },
          ].map((img) => (
            <a
              key={img.src}
              href={`/${locale}/house`}
              className="relative block aspect-[4/3] overflow-hidden"
            >
              <OptimizedImage
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </a>
          ))}
        </div>
      </section>

      {/* the quiet side */}
      <Reveal>
        <section className="bg-warm px-6 py-16 md:py-24 lg:px-[120px]">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 font-display text-2xl text-cream md:text-3xl">
              {t.home.quietTitle}
            </h2>
            <p className="mb-8 leading-8 text-cream/90 md:text-lg">
              {t.home.quietBody}
            </p>
            <dl className="mb-10 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-4">
              {t.home.distances.map(([place, dist]) => (
                <div key={place} className="flex flex-col gap-1">
                  <dt className="text-sm text-cream/80">{place}</dt>
                  <dd className="font-display text-lg text-cream">{dist}</dd>
                </div>
              ))}
            </dl>
            <a
              href={`/${locale}/calheta`}
              className="text-cream underline transition-colors hover:text-cream/80"
            >
              {t.home.calhetaLink} &rarr;
            </a>
          </div>
        </section>
      </Reveal>

      <Footer />
    </main>
  );
}
