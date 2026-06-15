"use client";

import { usePathname } from "next/navigation";
import { locales, type Locale, getTranslations } from "@/i18n/translations";
import Reservation from "./Reservation";

export default function Footer() {
  const pathname = usePathname();
  const currentLocale = (locales.find((l) => pathname.startsWith(`/${l}`)) ||
    "en") as Locale;
  const base = `/${currentLocale}`;
  const t = getTranslations(currentLocale);

  return (
    <>
      <Reservation />
      <footer className="bg-warm px-6 py-12 text-cream/60 lg:px-[120px]">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="mb-2 font-display text-lg text-cream">casa amani</p>
            <p className="text-sm">Arco da Calheta, Madeira, Portugal</p>
            <p className="text-sm">AL 176882/AL</p>
          </div>

          <nav aria-label="Site pages" className="flex flex-col gap-2 text-sm">
            <a href={`${base}/house`} className="transition-colors hover:text-cream">{t.footer.theHouse}</a>
            <a href={`${base}/the-place`} className="transition-colors hover:text-cream">{t.footer.thePlace}</a>
            <a href={`${base}/the-island`} className="transition-colors hover:text-cream">{t.footer.theIsland}</a>
            <a href={`${base}/remote-work`} className="transition-colors hover:text-cream">{t.footer.remoteWork}</a>
            <a href={`${base}/experiences`} className="transition-colors hover:text-cream">{t.footer.experiences}</a>
            <a href={`${base}/faq`} className="transition-colors hover:text-cream">{t.footer.faq}</a>
          </nav>

          <nav aria-label="Contact and booking" className="flex flex-col gap-2 text-sm">
            <a
              href="https://www.airbnb.co.uk/rooms/1695506665949683620?utm_source=casa-amani.com&utm_medium=referral&utm_campaign=book&utm_content=footer"
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
          </nav>

          <div className="flex flex-col gap-2 text-sm">
            <a href={`${base}/privacy`} className="transition-colors hover:text-cream">{t.footer.privacy}</a>
          </div>
        </div>
      </footer>
    </>
  );
}
