"use client";

import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/translations";

const localeLabels: Record<Locale, string> = {
  en: "EN",
  pt: "PT",
  de: "DE",
  fr: "FR",
  pl: "PL",
};

export default function Header({ menuLabel = "MENU" }: { menuLabel?: string }) {
  const pathname = usePathname();
  const currentLocale = (locales.find((l) => pathname.startsWith(`/${l}`)) ||
    "en") as Locale;

  const subpage = pathname.replace(`/${currentLocale}`, "") || "";

  return (
    <header className="animate-fade-up flex items-center justify-between px-8 py-4 lg:px-[120px]">
      <button className="font-body text-2xl font-medium tracking-wide text-cream transition-opacity duration-300 hover:opacity-70 lg:text-[32px]">
        {menuLabel}
      </button>
      <div className="flex gap-1 text-lg font-medium lg:text-2xl">
        {locales.map((locale, i) => (
          <span key={locale}>
            {i > 0 && <span className="text-cream/40"> / </span>}
            <a
              href={`/${locale}${subpage}`}
              className={`transition-opacity duration-300 ${
                locale === currentLocale
                  ? "text-cream"
                  : "text-cream/50 hover:text-cream/80"
              }`}
              onClick={() => localStorage.setItem("locale", locale)}
            >
              {localeLabels[locale]}
            </a>
          </span>
        ))}
      </div>
    </header>
  );
}
