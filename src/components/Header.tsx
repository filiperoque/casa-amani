"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback, useRef } from "react";
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
  { href: "/the-island", label: "The Island" },
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
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (!langOpen) return;
    const onClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [langOpen]);

  return (
    <>
      {/* Toggle button — fixed above everything so it animates in place */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className={`fixed left-8 top-4 z-[60] flex h-10 w-10 flex-col items-center justify-center gap-[7px] transition-opacity duration-300 hover:opacity-70 lg:left-[120px] ${
          open ? "" : "animate-fade-up"
        }`}
      >
        <span
          className="block h-[2px] w-6 bg-cream transition-all duration-300 ease-out"
          style={{
            transform: open
              ? "translateY(4.5px) rotate(45deg)"
              : "none",
          }}
        />
        <span
          className="block h-[2px] w-6 bg-cream transition-all duration-300 ease-out"
          style={{
            transform: open
              ? "translateY(-4.5px) rotate(-45deg)"
              : "none",
          }}
        />
      </button>

      <header className="animate-fade-up flex items-center justify-between px-8 py-4 lg:px-[120px]">
        {/* Spacer matching the fixed button */}
        <div className="h-10 w-10" />

        <div ref={langRef} className="relative">
          <button
            onClick={() => setLangOpen((v) => !v)}
            aria-expanded={langOpen}
            aria-label="Change language"
            className="flex items-center gap-1.5 text-lg font-medium text-cream transition-opacity duration-300 hover:opacity-70 lg:text-2xl"
          >
            {localeLabels[currentLocale]}
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
            >
              <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div
            className={`absolute right-0 top-full mt-2 flex min-w-[80px] flex-col overflow-hidden bg-warm shadow-lg transition-all duration-200 ${
              langOpen
                ? "pointer-events-auto translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-1 opacity-0"
            }`}
          >
            {locales.map((locale) => (
              <a
                key={locale}
                href={`/${locale}${subpage}`}
                onClick={() => {
                  localStorage.setItem("locale", locale);
                  setLangOpen(false);
                }}
                className={`px-4 py-2.5 text-center text-sm font-medium transition-colors ${
                  locale === currentLocale
                    ? "bg-cream/10 text-cream"
                    : "text-cream/60 hover:bg-cream/5 hover:text-cream"
                }`}
              >
                {localeLabels[locale]}
              </a>
            ))}
          </div>
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
        className={`fixed inset-y-0 left-0 z-50 flex w-[280px] flex-col bg-warm px-8 pt-18 transition-transform duration-250 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Main navigation"
      >
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
