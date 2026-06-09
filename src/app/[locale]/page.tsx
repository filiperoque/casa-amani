import { type Locale, getTranslations } from "@/i18n/translations";
import LandingScene from "@/components/LandingScene";

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);

  return (
    <div className="relative flex h-dvh items-center justify-center overflow-hidden bg-[#bb9669]">
      <LandingScene
        title={t.landing.title}
        subtitle={t.landing.subtitle}
        cta={t.landing.cta}
        ctaHref="https://www.airbnb.co.uk/rooms/1695506665949683620"
      />
    </div>
  );
}
