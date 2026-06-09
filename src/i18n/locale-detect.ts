import { locales, defaultLocale, type Locale } from "./translations";

const browserLangMap: Record<string, Locale> = {
  en: "en",
  pt: "pt",
  de: "de",
  fr: "fr",
  pl: "pl",
};

export function detectLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;

  const stored = localStorage.getItem("locale");
  if (stored && locales.includes(stored as Locale)) return stored as Locale;

  for (const lang of navigator.languages) {
    const prefix = lang.slice(0, 2).toLowerCase();
    if (browserLangMap[prefix]) return browserLangMap[prefix];
  }

  return defaultLocale;
}
