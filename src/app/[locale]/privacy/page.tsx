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
    path: "/privacy",
    page: "privacy",
    image: "/images/hero.jpg",
    imageAlt: "Interior of Casa Amani with ocean views across the Atlantic, Arco da Calheta, Madeira",
  });
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);

  return (
    <main id="main">
      <Header menuLabel={t.header.menu} />

      <section className="bg-cream px-6 py-16 md:py-24 lg:py-40">
        <div className="mx-auto max-w-narrow">
          <Reveal>
            <h1 className="mb-8 font-display text-title-sm text-brown md:text-title lg:text-title-lg">
              {t.privacy.title}
            </h1>
            <div className="flex flex-col gap-6 text-prose text-brown">
              <p>
                {t.privacy.p1}
              </p>
              <p>
                {t.privacy.p2}
              </p>
              <p>
                {t.privacy.p3}
              </p>
              <p>
                {t.privacy.p4}{" "}
                <a
                  href="mailto:stay@casa-amani.com"
                  className="plausible-event-name=email-click text-brown underline"
                >
                  stay@casa-amani.com
                </a>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}
