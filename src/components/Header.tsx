"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { locales, type Locale } from "@/i18n/translations";

const localeLabels: Record<Locale, string> = {
  en: "EN",
  pt: "PT",
  de: "DE",
  fr: "FR",
  pl: "PL",
};

const navItems = [
  { href: "/house", label: "The House" },
  { href: "/the-place", label: "The Place" },
  { href: "/remote-work", label: "Remote Work" },
  { href: "/faq", label: "FAQ" },
];

export default function Header({ menuLabel = "MENU" }: { menuLabel?: string }) {
  const pathname = usePathname();
  const currentLocale = (locales.find((l) => pathname.startsWith(`/${l}`)) ||
    "en") as Locale;
  const base = `/${currentLocale}`;
  const subpage = pathname.replace(base, "") || "";

  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  useEffect(() => {
    close();
  }, [pathname, close]);

  return (
    <>
      <header className="animate-fade-up flex items-center justify-between px-8 py-4 lg:px-[120px]">
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="font-body text-2xl font-medium tracking-wide text-cream transition-opacity duration-300 hover:opacity-70 lg:text-[32px]"
        >
          {menuLabel}
        </button>
        <div className="flex gap-1 text-lg font-medium lg:text-2xl" aria-label="Change language">
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

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-250 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={close}
        aria-hidden="true"
      />

      {/* Drawer */}
      <nav
        className={`fixed inset-y-0 left-0 z-50 flex w-[280px] flex-col bg-warm px-8 py-4 transition-transform duration-250 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Main navigation"
      >
        <button
          onClick={close}
          aria-label="Close menu"
          className="mb-12 self-start font-body text-2xl font-medium tracking-wide text-cream transition-opacity duration-300 hover:opacity-70 lg:text-[32px]"
        >
          {menuLabel}
        </button>

        <div className="flex flex-col gap-6">
          {navItems.map(({ href, label }) => (
            <a
              key={href}
              href={`${base}${href}`}
              className={`font-display text-2xl transition-opacity duration-300 ${
                subpage === href ? "text-cream" : "text-cream/60 hover:text-cream"
              }`}
            >
              {label}
            </a>
          ))}
          <a
            href="https://www.airbnb.co.uk/rooms/1695506665949683620?utm_source=casa-amani.com&utm_medium=referral&utm_campaign=book&utm_content=menu"
            target="_blank"
            rel="noopener noreferrer"
            className="plausible-event-name=outbound-airbnb font-display text-2xl text-cream/60 transition-opacity duration-300 hover:text-cream"
          >
            Stay with us
          </a>
        </div>
      </nav>
    </>
  );
}
