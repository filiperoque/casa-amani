import { type Locale, getTranslations } from "@/i18n/translations";
import LandingScene from "@/components/LandingScene";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);

  return (
    <div id="main" className="bg-warm">
      <Header menuLabel={t.header.menu} overlay mode="hero" />
      <div className="relative flex h-svh min-h-svh items-center justify-center overflow-hidden bg-[#bb9669]">
        <LandingScene
          title={t.landing.title}
          subtitle={t.landing.subtitle}
          intro={t.landing.intro}
          cta={t.landing.cta}
          ctaHref="https://www.airbnb.co.uk/rooms/1695506665949683620"
        />
      </div>

      <Footer />
    </div>
  );
}
