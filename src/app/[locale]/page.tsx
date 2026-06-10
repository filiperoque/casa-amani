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
                Made for slow stays on Madeira&apos;s quiet side
              </h2>
            </Reveal>

            <Reveal>
              <p className="mb-8 leading-8 text-brown/80 md:text-lg">
                Casa Amani Madeira is a two-bedroom contemporary rental villa in Arco da Calheta, on the south-west coast of Madeira, Portugal. The house sits split-level above a private heated pool with a front-facing sea view, and is designed for slow stays — equally suited to travellers visiting Madeira, to remote-mobile workers using the island as a base, and to surfers based on the island&apos;s west-coast breaks. It sleeps up to six and is available for stays of one week or longer. Registered Alojamento Local 176882/AL.
              </p>
            </Reveal>

            <Reveal>
              <p className="leading-8 text-brown/70 md:text-lg">
                Casa Amani is built for one couple — two with friends or family. It is not a venue for large groups or events. Every choice in the house, from the size of the kitchen to the depth of the pool, is calibrated for slow stays of a week or more. If you are travelling four or more for a noisy long weekend, this is not your house. If you are travelling for a quiet seven, ten, or thirty nights, it is.
              </p>
            </Reveal>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
