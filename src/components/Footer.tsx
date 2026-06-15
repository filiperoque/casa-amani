"use client";

import { usePathname } from "next/navigation";
import { locales, type Locale, getTranslations } from "@/i18n/translations";
import Reveal from "./Reveal";

const AIRBNB_URL =
  "https://www.airbnb.co.uk/rooms/1695506665949683620?utm_source=casa-amani.com&utm_medium=referral&utm_campaign=book&utm_content=footer";

export default function Footer() {
  const pathname = usePathname();
  const currentLocale = (locales.find((l) => pathname.startsWith(`/${l}`)) ||
    "en") as Locale;
  const base = `/${currentLocale}`;
  const t = getTranslations(currentLocale);

  return (
    <footer className="bg-warm px-6 py-16 lg:px-[120px] lg:py-20">
      {/* Reservation */}
      <Reveal>
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-start md:justify-between lg:mb-20">
          <h2 className="font-display text-2xl text-cream md:text-3xl lg:text-4xl">
            {t.reservation.title}
          </h2>
          <div className="flex flex-col gap-3 text-sm text-cream/80 lg:text-base">
            <a
              href={`mailto:${t.reservation.email}`}
              className="plausible-event-name=email-click transition-colors hover:text-cream"
            >
              {t.reservation.email}
            </a>
            <a
              href={`tel:${t.reservation.phone.replace(/\s/g, "")}`}
              className="plausible-event-name=phone-click transition-colors hover:text-cream"
            >
              {t.reservation.phone}
            </a>
            <a
              href={AIRBNB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="plausible-event-name=outbound-airbnb transition-colors hover:text-cream"
            >
              {t.reservation.availability} &rarr;
            </a>
          </div>
        </div>
      </Reveal>

      {/* Divider */}
      <div className="mb-12 border-t border-cream/15 lg:mb-16" />

      {/* Footer grid */}
      <Reveal>
        <div className="grid grid-cols-1 gap-10 text-sm text-cream/70 md:grid-cols-3 md:gap-8">
          <div>
            <p className="mb-3 font-display text-lg text-cream">casa amani</p>
            <p>Arco da Calheta, Madeira, Portugal</p>
            <p>AL 176882/AL</p>
          </div>

          <nav aria-label="Site pages" className="flex flex-col gap-2 md:pt-[calc(1.125rem+0.75rem)]">
            <a href={`${base}/house`} className="transition-colors hover:text-cream">{t.footer.theHouse}</a>
            <a href={`${base}/the-place`} className="transition-colors hover:text-cream">{t.footer.thePlace}</a>
            <a href={`${base}/the-island`} className="transition-colors hover:text-cream">{t.footer.theIsland}</a>
            <a href={`${base}/remote-work`} className="transition-colors hover:text-cream">{t.footer.remoteWork}</a>
            <a href={`${base}/experiences`} className="transition-colors hover:text-cream">{t.footer.experiences}</a>
            <a href={`${base}/faq`} className="transition-colors hover:text-cream">{t.footer.faq}</a>
          </nav>

          <nav aria-label="Contact and social" className="flex flex-col gap-2 md:pt-[calc(1.125rem+0.75rem)]">
            <a
              href={AIRBNB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="plausible-event-name=outbound-airbnb transition-colors hover:text-cream"
            >
              {t.footer.bookOnAirbnb}
            </a>
            <a
              href="mailto:stay@casa-amani.com"
              className="plausible-event-name=email-click transition-colors hover:text-cream"
            >
              stay@casa-amani.com
            </a>
            <a
              href="https://www.instagram.com/casa.amani.calheta/"
              target="_blank"
              rel="noopener noreferrer"
              className="plausible-event-name=outbound-instagram transition-colors hover:text-cream"
            >
              Instagram
            </a>
          </nav>
        </div>
      </Reveal>

      {/* Bottom bar */}
      <div className="mt-12 flex flex-col gap-2 border-t border-cream/15 pt-6 text-xs text-cream/50 md:flex-row md:items-center md:justify-between lg:mt-16">
        <p>&copy; {new Date().getFullYear()} Casa Amani Madeira. All rights reserved.</p>
        <a href={`${base}/privacy`} className="transition-colors hover:text-cream/80">{t.footer.privacy}</a>
      </div>
    </footer>
  );
}
