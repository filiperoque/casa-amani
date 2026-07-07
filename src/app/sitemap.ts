import type { MetadataRoute } from "next";
import { locales } from "@/i18n/translations";
import { SITE_URL, localeUrl } from "@/lib/seo";

/**
 * Build-time sitemap generated from the route list below.
 * Every indexable page appears once per locale with hreflang alternates.
 * Pages marked noindex (guide shells, subscribe confirmation) are excluded.
 */

interface Route {
  path: string; // without locale prefix; "" = locale home
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}

const routes: Route[] = [
  { path: "", priority: 1.0, changeFrequency: "monthly" },
  { path: "/house", priority: 0.9, changeFrequency: "monthly" },
  { path: "/calheta", priority: 0.8, changeFrequency: "monthly" },
  { path: "/remote-work", priority: 0.8, changeFrequency: "monthly" },
  { path: "/experiences", priority: 0.7, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  { path: "/the-guide", priority: 0.7, changeFrequency: "monthly" },
  { path: "/the-guide/table", priority: 0.7, changeFrequency: "monthly" },
  { path: "/the-guide/surf", priority: 0.7, changeFrequency: "monthly" },
  // land, sea, culture, practical are noindex until their content ships.
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
];

const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((route) =>
    locales.map((locale) => ({
      url: localeUrl(locale, route.path),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: locale === "en" ? route.priority : Math.max(route.priority - 0.1, 0.1),
      alternates: {
        languages: {
          ...Object.fromEntries(
            locales.map((l) => [l, localeUrl(l, route.path)])
          ),
          "x-default": `${SITE_URL}/en${route.path}`,
        },
      },
    }))
  );
}
