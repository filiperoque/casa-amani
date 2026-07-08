"use client";

import { usePathname } from "next/navigation";
import { locales, type Locale, getTranslations } from "@/i18n/translations";
import Reveal from "./Reveal";

const AIRBNB_URL =
  "https://www.airbnb.co.uk/rooms/1695506665949683620?utm_source=casa-amani.com&utm_medium=referral&utm_campaign=book&utm_content=reservation-block";

export default function Reservation() {
  const pathname = usePathname();
  const currentLocale = (locales.find((l) => pathname.startsWith(`/${l}`)) ||
    "en") as Locale;
  const t = getTranslations(currentLocale);

  return (
    <section className="bg-warm px-6 py-12 md:py-16 lg:px-[120px]">
      <div className="mx-auto w-full max-w-6xl">
      <Reveal>
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <h2 className="font-display text-2xl text-cream md:text-3xl lg:text-4xl">
            {t.reservation.title}
          </h2>

          <div className="flex flex-col gap-4 text-cream">
            <a
              href={`mailto:${t.reservation.email}`}
              className="plausible-event-name=email-click text-sm transition-colors hover:text-cream lg:text-base"
            >
              {t.reservation.email}
            </a>
            <a
              href={`tel:${t.reservation.phone.replace(/\s/g, "")}`}
              className="plausible-event-name=phone-click text-sm transition-colors hover:text-cream lg:text-base"
            >
              {t.reservation.phone}
            </a>
            <a
              href={AIRBNB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="plausible-event-name=outbound-airbnb text-sm transition-colors hover:text-cream lg:text-base"
            >
              {t.reservation.availability} &rarr;
            </a>
          </div>
        </div>
      </Reveal>
      </div>
    </section>
  );
}
