import type { Metadata } from "next";
import { type Locale, getTranslations } from "@/i18n/translations";
import { pageMetadata } from "@/lib/seo";
import Header from "@/components/Header";
import HouseHeroWordmark from "@/components/HouseHeroWordmark";
import OptimizedImage from "@/components/OptimizedImage";
import Tagline from "@/components/Tagline";
import HouseGallery from "@/components/HouseGallery";
import Location from "@/components/Location";
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
    path: "/house",
    page: "house",
    image: "/images/hero.jpg",
    imageAlt: "Interior of Casa Amani with ocean view through floor-to-ceiling windows",
  });
}

export default async function HousePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);

  return (
    <>
      <div className="bg-warm">
        <Header menuLabel={t.header.menu} mode="house" />
      </div>

      <main id="main" className="bg-warm">
        <h1 className="sr-only">{t.house.title}</h1>

        {/* Hero block fills the viewport: wordmark + subtitle + image */}
        <div className="flex min-h-[calc(100svh-3.5rem)] flex-col pb-6">
          <HouseHeroWordmark text={t.landing.title} homeHref={`/${locale}`} />

          <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center gap-6 px-6 pt-4 lg:pt-6">
            <p className="animate-fade-up animate-delay-1 text-center text-sm tracking-[5.76px] text-cream md:text-lg lg:text-2xl">
              {t.landing.subtitle}
            </p>
            <div className="animate-fade-up animate-delay-2 relative mt-2 min-h-[320px] w-full flex-1 overflow-hidden">
              <OptimizedImage
                src="/images/hero.jpg"
                alt="Interior view of Casa Amani with ocean views"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>
          </div>
        </div>

        <Reveal>
          <Tagline
            heading={t.tagline.heading}
            subheading={t.tagline.subheading}
          />
        </Reveal>
        <HouseGallery t={t} />

        {/* STAYS INCLUDE and AMENITIES hidden until designed properly.
            Content lives in t.staysInclude / t.amenities (all 5 locales)
            and remains in JSON-LD + llms.txt for search and AI surfaces. */}

        <Reveal>
          <Location
            heading={t.location.heading}
            description={t.location.description}
          />
        </Reveal>
        {/* Related-links strip hidden pending design. Its job: contextual
            internal links from the highest-traffic page into remote-work,
            experiences, guide, and calheta, for both visitors and crawl
            equity. Reintroduce styled, or fold into the footer nav. */}
        <Footer />
      </main>
    </>
  );
}
