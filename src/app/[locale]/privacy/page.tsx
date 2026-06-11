import type { Metadata } from "next";
import { type Locale, getTranslations } from "@/i18n/translations";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy | Casa Amani Madeira",
  description: "How Casa Amani Madeira handles your data. No cookies, no tracking across sites.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default async function PrivacyPage({
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
      </div>

      <section className="bg-cream px-6 py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <h1 className="mb-8 font-display text-3xl text-brown md:text-4xl">
              {t.privacy.title}
            </h1>
            <div className="flex flex-col gap-6 leading-8 text-brown/70">
              <p>
                {t.privacy.p1}
              </p>
              <p>
                {t.privacy.p2}
              </p>
              <p>
                {t.privacy.p3}{" "}
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
