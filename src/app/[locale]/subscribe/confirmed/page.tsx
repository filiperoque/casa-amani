import type { Metadata } from "next";
import { type Locale, getTranslations } from "@/i18n/translations";
import { pageMetadata } from "@/lib/seo";
import Header from "@/components/Header";
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
    path: "/subscribe/confirmed",
    page: "subscribeConfirmed",
    image: "/images/hero.jpg",
    imageAlt: "Interior of Casa Amani with ocean views across the Atlantic, Arco da Calheta, Madeira",
    noindex: true,
  });
}

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
            <p className="text-lg leading-8 text-brown">
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
