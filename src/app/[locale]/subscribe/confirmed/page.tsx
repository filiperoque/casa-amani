import type { Metadata } from "next";
import { type Locale, getTranslations } from "@/i18n/translations";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Confirmed | Casa Amani Madeira",
  description: "Your subscription is confirmed. Your guide is on its way.",
  robots: { index: false, follow: false },
};

export default async function SubscribeConfirmedPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);

  return (
    <main id="main">
      <Header menuLabel={t.header.menu} />

      <section className="bg-cream px-6 py-24 md:py-32 lg:px-[120px] lg:py-40">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h1 className="mb-6 font-display text-3xl text-brown md:text-4xl lg:text-5xl">
              {t.subscribe.confirmedHeading}
            </h1>
            <p className="text-lg leading-8 text-brown/70">
              {t.subscribe.confirmedBody}
            </p>
          </Reveal>
        </div>
      </section>

      <Footer />

      <script
        dangerouslySetInnerHTML={{
          __html: `if(window.plausible)plausible("newsletter-confirmed")`,
        }}
      />
    </main>
  );
}
