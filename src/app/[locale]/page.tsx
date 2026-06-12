import { type Locale, getTranslations } from "@/i18n/translations";
import LandingScene from "@/components/LandingScene";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);

  return (
    <>
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/landing-bg.jpg"
          fetchPriority="high"
        />
      </head>
      <div id="main">
        <div className="relative flex h-dvh items-center justify-center overflow-hidden bg-[#bb9669]">
          <LandingScene
            title={t.landing.title}
            subtitle={t.landing.subtitle}
            cta={t.landing.cta}
            ctaHref="https://www.airbnb.co.uk/rooms/1695506665949683620"
          />
        </div>

        <section className="bg-cream px-6 py-16 md:py-24 lg:py-32">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h2 className="mb-8 font-display text-2xl text-brown md:text-3xl lg:text-4xl">
                {t.landing.introHeading}
              </h2>
            </Reveal>

            <Reveal>
              <p className="text-lg leading-8 text-brown/80 md:text-xl">
                {t.landing.introP1} {t.landing.introP2}
              </p>
            </Reveal>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
