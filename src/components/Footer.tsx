"use client";

import { usePathname } from "next/navigation";
import { locales, type Locale, getTranslations } from "@/i18n/translations";
import Reveal from "./Reveal";
import SubscribeBlock from "./SubscribeBlock";

const AIRBNB_URL =
  "https://www.airbnb.co.uk/rooms/1695506665949683620?utm_source=casa-amani.com&utm_medium=referral&utm_campaign=book&utm_content=footer";

export default function Footer({ subscribe = true }: { subscribe?: boolean }) {
  const pathname = usePathname();
  const currentLocale = (locales.find((l) => pathname.startsWith(`/${l}`)) ||
    "en") as Locale;
  const base = `/${currentLocale}`;
  const t = getTranslations(currentLocale);

  return (
    <>
      {subscribe && <SubscribeBlock />}
      <footer className="bg-warm px-gutter py-16 lg:px-gutter-lg lg:py-20">
        <div className="mx-auto w-full max-w-content">
        <Reveal>
        <div className="grid grid-cols-1 gap-10 text-base text-cream md:grid-cols-3 md:gap-8">
          {/* Column 1: Brand + location */}
          <div>
            <p className="mb-3 font-display text-2xl text-cream lg:text-3xl">casa amani</p>
            <p>Arco da Calheta, Madeira, Portugal</p>
            <p>AL 176882/AL</p>
          </div>

          {/* Column 2: Pages */}
          <nav aria-label="Site pages" className="flex flex-col gap-2 md:pt-[calc(1.875rem+0.75rem)]">
            <a href={`${base}/house`} className="transition-colors hover:text-cream">{t.footer.theHouse}</a>
            <a href={`${base}/calheta`} className="transition-colors hover:text-cream">{t.footer.calheta}</a>
            <a href={`${base}/the-guide`} className="transition-colors hover:text-cream">{t.footer.theGuide}</a>
            <a href={`${base}/remote-work`} className="transition-colors hover:text-cream">{t.footer.remoteWork}</a>
            <a href={`${base}/experiences`} className="transition-colors hover:text-cream">{t.footer.experiences}</a>
            <a href={`${base}/faq`} className="transition-colors hover:text-cream">{t.footer.faq}</a>
            <a href={`${base}/contact`} className="transition-colors hover:text-cream">{t.footer.contact}</a>
          </nav>

          {/* Column 3: Contact, booking, social */}
          <nav aria-label="Contact and booking" className="flex flex-col gap-2 md:pt-[calc(1.875rem+0.75rem)]">
            <a
              href={AIRBNB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="plausible-event-name=outbound-airbnb transition-colors hover:text-cream"
            >
              {t.reservation.availability} &rarr;
            </a>
            <a
              href="mailto:stay@casa-amani.com"
              className="plausible-event-name=email-click transition-colors hover:text-cream"
            >
              stay@casa-amani.com
            </a>
            <a
              href={`tel:${t.reservation.phone.replace(/\s/g, "")}`}
              className="plausible-event-name=phone-click transition-colors hover:text-cream"
            >
              {t.reservation.phone}
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
      <div className="mt-12 flex flex-col gap-2 border-t border-cream/20 pt-6 text-sm text-cream md:flex-row md:items-center md:justify-between lg:mt-16">
        <p>&copy; {new Date().getFullYear()} Casa Amani Madeira. All rights reserved.</p>
        <a href={`${base}/privacy`} className="transition-colors hover:text-cream">{t.footer.privacy}</a>
      </div>
      </div>
    </footer>
    </>
  );
}
