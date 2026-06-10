"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { locales } from "@/i18n/translations";

export default function LocaleRedirect() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const currentLocale = locales.find((l) => pathname.startsWith(`/${l}`));
    if (currentLocale && currentLocale !== "en") {
      const rest = pathname.replace(`/${currentLocale}`, "");
      router.replace(`/en${rest}`);
    }
  }, [pathname, router]);

  return null;
}
