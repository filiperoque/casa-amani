import type { Metadata } from "next";
import { type Locale, getTranslations } from "@/i18n/translations";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
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
    path: "/contact",
    page: "contact",
    image: "/images/hero.jpg",
    imageAlt:
      "Interior of Casa Amani with ocean views across the Atlantic, Arco da Calheta, Madeira",
  });
}

const AIRBNB_URL =
  "https://www.airbnb.co.uk/rooms/1695506665949683620?utm_source=casa-amani.com&utm_medium=referral&utm_campaign=book&utm_content=contact-page";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);

  const breadcrumbs = breadcrumbJsonLd(locale as Locale, [
    { name: "Contact", path: "/contact" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <main id="main" className="bg-cream min-h-dvh">
        <Header menuLabel={t.header.menu} />

        <div className="mx-auto max-w-narrow px-6 py-16 md:py-24 lg:py-40">
          <Reveal>
            <h1 className="mb-4 font-display text-title-sm text-brown md:text-title lg:text-title-lg">
              {t.contact.title}
            </h1>
            <p className="mb-12 text-body text-brown md:text-intro">
              {t.contact.intro}
            </p>
          </Reveal>

          <Reveal>
            <dl className="flex flex-col gap-6 border-t border-brown/10 pt-8">
              <div className="flex flex-col gap-1">
                <dt className="text-sm uppercase tracking-wide text-brown">
                  {t.contact.emailLabel}
                </dt>
                <dd>
                  <a
                    href="mailto:stay@casa-amani.com"
                    className="plausible-event-name=email-click text-brown underline transition-colors hover:text-brown/70"
                  >
                    stay@casa-amani.com
                  </a>
                </dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="text-sm uppercase tracking-wide text-brown">
                  {t.contact.phoneLabel}
                </dt>
                <dd>
                  <a
                    href={`tel:${t.reservation.phone.replace(/\s/g, "")}`}
                    className="plausible-event-name=phone-click text-brown underline transition-colors hover:text-brown/70"
                  >
                    {t.reservation.phone}
                  </a>
                </dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="text-sm uppercase tracking-wide text-brown">
                  {t.contact.instagramLabel}
                </dt>
                <dd>
                  <a
                    href="https://www.instagram.com/casa.amani.calheta/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="plausible-event-name=outbound-instagram text-brown underline transition-colors hover:text-brown/70"
                  >
                    casa.amani.calheta
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal>
            <div className="mt-12 border-t border-brown/10 pt-8">
              <p className="mb-4 text-body text-brown">
                {t.contact.bookingNote}
              </p>
              <a
                href={AIRBNB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="plausible-event-name=outbound-airbnb text-brown underline transition-colors hover:text-brown/70"
              >
                {t.contact.availabilityCta} &rarr;
              </a>
            </div>
          </Reveal>
        </div>
        <Footer />
      </main>
    </>
  );
}
