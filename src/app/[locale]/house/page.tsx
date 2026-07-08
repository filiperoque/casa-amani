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

        {/* Hero fills the viewport: wordmark + subtitle + image, with the
            image flexing to the remaining height inside the content column. */}
        <div className="flex min-h-[calc(100svh-3.5rem)] flex-col pb-6">
          <HouseHeroWordmark text={t.landing.title} homeHref={`/${locale}`} />

          <div className="flex flex-1 px-gutter pt-4 lg:px-gutter-lg lg:pt-6">
            <div className="mx-auto flex w-full max-w-content flex-1 flex-col items-center gap-6">
              <p className="animate-fade-up animate-delay-1 text-center text-sm tracking-label text-cream md:text-intro lg:text-title-sm">
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
