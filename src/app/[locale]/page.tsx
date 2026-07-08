import type { Metadata } from "next";
import { type Locale, getTranslations } from "@/i18n/translations";
import { pageMetadata, SITE_URL } from "@/lib/seo";
import LandingScene from "@/components/LandingScene";
import Header from "@/components/Header";
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

      <Footer subscribe={false} />
    </main>
  );
}
