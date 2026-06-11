import type { Metadata } from "next";
import { type Locale, getTranslations } from "@/i18n/translations";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Tagline from "@/components/Tagline";
import HouseGallery from "@/components/HouseGallery";
import Location from "@/components/Location";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The House | Casa Amani Madeira | Arco da Calheta",
  description:
    "A 219 m² split-level contemporary villa with 2 bedrooms, 3 bathrooms, heated pool, sea view, and workspaces. Sleeps up to 6 in Arco da Calheta, Madeira.",
  alternates: {
    canonical: "/house",
  },
};

export default async function HousePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);

  return (
    <main id="main">
      <div className="bg-warm">
        <Header menuLabel={t.header.menu} />
        <Hero title={t.landing.title} subtitle={t.landing.subtitle} />
      </div>
      <Reveal>
        <Tagline
          heading={t.tagline.heading}
          subheading={t.tagline.subheading}
        />
      </Reveal>
      <HouseGallery t={t} />
      <Reveal>
        <Location
          heading={t.location.heading}
          description={t.location.description}
        />
      </Reveal>
      <Footer />
    </main>
  );
}
