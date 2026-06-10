"use client";

import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/translations";

export default function Footer() {
  const pathname = usePathname();
  const currentLocale = (locales.find((l) => pathname.startsWith(`/${l}`)) ||
    "en") as Locale;
  const base = `/${currentLocale}`;

  return (
    <footer className="bg-warm px-6 py-12 text-cream/60 md:px-16 lg:px-[120px]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="mb-2 font-display text-lg text-cream">casa amani — Arco da Calheta, Madeira</p>
          <p className="text-sm">Portugal</p>
          <p className="text-sm">AL 176882/AL</p>
        </div>

        <nav aria-label="Site pages" className="flex flex-col gap-2 text-sm">
          <a href={`${base}/house`} className="transition-colors hover:text-cream">The House</a>
          <a href={`${base}/the-place`} className="transition-colors hover:text-cream">The Place</a>
          <a href={`${base}/remote-work`} className="transition-colors hover:text-cream">Remote Work</a>
          <a href={`${base}/faq`} className="transition-colors hover:text-cream">FAQ</a>
        </nav>

        <nav aria-label="Contact and booking" className="flex flex-col gap-2 text-sm">
          <a
            href="https://www.airbnb.co.uk/rooms/1695506665949683620?utm_source=casa-amani.com&utm_medium=referral&utm_campaign=book&utm_content=footer"
            target="_blank"
            rel="noopener noreferrer"
            className="plausible-event-name=outbound-airbnb transition-colors hover:text-cream"
          >
            Book on Airbnb
          </a>
          <a
            href="mailto:stay@casa-amani.com"
            className="plausible-event-name=email-click transition-colors hover:text-cream"
          >
            stay@casa-amani.com
          </a>
        </nav>

        <div className="flex flex-col gap-2 text-sm">
          <a href={`${base}/privacy`} className="transition-colors hover:text-cream">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
