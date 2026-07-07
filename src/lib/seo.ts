import type { Metadata } from "next";
import { locales, type Locale } from "@/i18n/translations";
import { getPageMeta, type PageKey } from "@/i18n/meta";

/**
 * Canonical host for the site. All canonicals, hreflang alternates,
 * sitemap entries, and structured-data URLs must use this origin.
 */
export const SITE_URL = "https://www.casa-amani.com";
export const SITE_NAME = "Casa Amani Madeira";

export const ogLocales: Record<Locale, string> = {
  en: "en_GB",
  pt: "pt_PT",
  de: "de_DE",
  fr: "fr_FR",
  pl: "pl_PL",
};

/** Absolute URL for a locale-prefixed path. `path` starts with "/" or is "" for the locale home. */
export function localeUrl(locale: string, path = ""): string {
  return `${SITE_URL}/${locale}${path}`;
}

interface PageMetadataArgs {
  locale: Locale;
  /** Path without locale prefix, e.g. "/house". "" for the homepage. */
  path: string;
  page: PageKey;
  /** OG image path under /public, e.g. "/images/hero.jpg". */
  image: string;
  imageAlt: string;
  noindex?: boolean;
}

/**
 * Builds per-locale metadata: localized title/description, self-referencing
 * canonical on the canonical host, hreflang alternates for all locales,
 * and complete OpenGraph/Twitter tags.
 */
export function pageMetadata({
  locale,
  path,
  page,
  image,
  imageAlt,
  noindex = false,
}: PageMetadataArgs): Metadata {
  const { title, description } = getPageMeta(locale, page);
  const canonical = localeUrl(locale, path);

  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = localeUrl(l, path);
  }
  languages["x-default"] = localeUrl("en", path);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type: "website",
      locale: ogLocales[locale],
      alternateLocale: locales
        .filter((l) => l !== locale)
        .map((l) => ogLocales[l]),
      images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: noindex
      ? { index: false, follow: true }
      : { index: true, follow: true },
  };
}

/** Locale-aware BreadcrumbList JSON-LD with canonical-host URLs. */
export function breadcrumbJsonLd(
  locale: Locale,
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Casa Amani",
        item: localeUrl(locale),
      },
      ...items.map((it, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: it.name,
        item: localeUrl(locale, it.path),
      })),
    ],
  };
}
