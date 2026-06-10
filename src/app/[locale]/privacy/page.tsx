import type { Metadata } from "next";
import { type Locale, getTranslations } from "@/i18n/translations";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy — Casa Amani",
  description: "How Casa Amani handles your data. No cookies, no tracking across sites.",
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
    <main>
      <div className="bg-warm">
        <Header menuLabel={t.header.menu} />
      </div>

      <section className="bg-cream px-6 py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <h1 className="mb-8 font-display text-3xl text-brown md:text-4xl">
              privacy
            </h1>
            <div className="flex flex-col gap-6 leading-8 text-brown/70">
              <p>
                We use{" "}
                <a
                  href="https://plausible.io/data-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brown underline"
                >
                  Plausible Analytics
                </a>
                , a privacy-respecting tool that helps us understand how this
                site is used. Plausible does not use cookies, does not store
                personal data, and does not track you across other sites.
                Aggregated usage statistics are stored in the European Union.
              </p>
              <p>
                If you sign up for our email list, we keep your email address
                until you ask us to remove it. We use it only to email you when
                we open for direct bookings or have something useful to share.
                We do not sell, share, or rent your email to anyone.
              </p>
              <p>
                To request removal of your email or to ask questions, write to{" "}
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
