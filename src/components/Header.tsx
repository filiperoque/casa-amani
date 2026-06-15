"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback, useRef } from "react";
import { locales, type Locale } from "@/i18n/translations";

const localeLabels: Record<Locale, string> = {
  en: "English",
  pt: "Português",
  de: "Deutsch",
  fr: "Français",
  pl: "Polski",
};

const primaryNav = [
  {
    href: "/house",
    label: "The House",
    image: "/images/living-space.jpg",
    text: "Two bedrooms, a heated pool, a kitchen used daily.",
  },
  {
    href: "/the-place",
    label: "The Place",
    image: "/images/location.jpg",
    text: "Arco da Calheta, the south-west coast of Madeira.",
  },
  {
    href: "/remote-work",
    label: "Remote Work",
    image: "/images/guest-bedroom.jpg",
    text: "Desks in both bedrooms, fibre internet, a quiet hillside village.",
  },
];

const secondaryNav = [
  {
    href: "/experiences",
    label: "Experiences",
    image: "/images/outdoor-dining.jpg",
    text: "Private chef, massage, yoga, and more. Arranged with notice.",
  },
  {
    href: "/faq",
    label: "FAQ",
    image: null,
    text: null,
  },
];

const allNav = [...primaryNav, ...secondaryNav];

const DEFAULT_IMAGE = "/images/landing-bg.jpg";

export default function Header({ menuLabel = "MENU", overlay = false }: { menuLabel?: string; overlay?: boolean }) {
  const pathname = usePathname();
  const currentLocale = (locales.find((l) => pathname.startsWith(`/${l}`)) ||
    "en") as Locale;
  const base = `/${currentLocale}`;
  const subpage = pathname.replace(base, "") || "";
  const hasHero = subpage === "" || subpage === "/" || subpage === "/house";
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentNavIndex = allNav.findIndex((n) => subpage === n.href);
  const defaultImage =
    currentNavIndex !== -1 && allNav[currentNavIndex].image
      ? allNav[currentNavIndex].image!
      : DEFAULT_IMAGE;

  const activeImage =
    hoveredIndex !== null && allNav[hoveredIndex]?.image
      ? allNav[hoveredIndex].image!
      : defaultImage;
  const activeText =
    hoveredIndex !== null ? allNav[hoveredIndex]?.text : null;

  const close = useCallback(() => {
    setOpen(false);
    setHoveredIndex(null);
  }, []);

  const handleHoverEnter = useCallback((index: number) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setHoveredIndex(index);
  }, []);

  const handleHoverLeave = useCallback(() => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredIndex(null);
    }, 150);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const threshold = Math.min(window.innerHeight * 0.45, 200);
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  const showBrand = scrolled || !hasHero;

  return (
    <>
      {/* Fixed header bar */}
      <header
        className={`fixed inset-x-0 top-0 z-[60] flex h-14 items-center justify-between px-6 transition-[background-color,backdrop-filter] duration-300 lg:px-[120px] ${
          scrolled && !open
            ? "bg-warm/90 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        {/* Hamburger / X */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[7px] transition-opacity duration-300 hover:opacity-70"
        >
          <span
            className="block h-[2px] w-6 bg-cream transition-all duration-300 ease-out"
            style={{
              transform: open ? "translateY(4.5px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block h-[2px] w-6 bg-cream transition-all duration-300 ease-out"
            style={{
              transform: open ? "translateY(-4.5px) rotate(-45deg)" : "none",
            }}
          />
        </button>

        {/* Brand mark, absolutely centred */}
        <a
          href={base || "/en"}
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[26px] text-cream transition-[opacity,letter-spacing] duration-500 hover:tracking-[0.03em] lg:text-[30px] ${
            showBrand ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-label="Casa Amani Madeira, home"
        >
          casa amani
        </a>

        {/* Language picker */}
        <div ref={langRef} className="relative">
          <button
            onClick={() => setLangOpen((v) => !v)}
            aria-expanded={langOpen}
            aria-label="Change language"
            className="flex h-10 items-center gap-2 text-sm font-medium text-cream transition-opacity duration-300 hover:opacity-70 lg:text-base"
          >
            {localeLabels[currentLocale]}
            <svg
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none"
              className={`transition-transform duration-200 ease-out ${langOpen ? "rotate-180" : ""}`}
            >
              <path
                d="M2 2L8 8L14 2"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div
            className={`absolute right-0 top-full mt-2 flex min-w-[160px] flex-col rounded bg-cream shadow-lg transition-all duration-200 ${
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
                className={`px-5 py-3 text-sm transition-colors ${
                  locale === currentLocale
                    ? "font-medium text-brown"
                    : "text-brown/50 hover:bg-brown/5 hover:text-brown"
                }`}
              >
                {localeLabels[locale]}
              </a>
            ))}
          </div>
        </div>
      </header>

      {!overlay && <div className="h-14" />}

      {/* Full-screen menu overlay */}
      <div
        className={`fixed inset-0 z-50 bg-warm transition-opacity duration-[350ms] ease-out ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
      >
        <div className="flex h-full px-6 py-14 lg:px-[120px]">
          <nav
            className="flex w-full flex-col justify-center lg:w-[45%]"
            aria-label="Main navigation"
          >
            <div className="flex flex-col">
              {primaryNav.map(({ href, label }, i) => (
                <a
                  key={href}
                  href={`${base}${href}`}
                  onMouseEnter={() => handleHoverEnter(i)}
                  onMouseLeave={handleHoverLeave}
                  className={`font-display text-[32px] leading-none transition-opacity duration-200 lg:text-[48px] ${
                    subpage === href
                      ? "text-cream"
                      : "text-cream/60 hover:text-cream"
                  }`}
                  style={{ paddingTop: "0.6em", paddingBottom: "0.6em" }}
                >
                  {label}
                </a>
              ))}

              <div className="mt-4 flex flex-col lg:mt-6">
                {secondaryNav.map(({ href, label }, i) => (
                  <a
                    key={href}
                    href={`${base}${href}`}
                    onMouseEnter={() => handleHoverEnter(primaryNav.length + i)}
                    onMouseLeave={handleHoverLeave}
                    className={`font-display text-xl leading-none transition-opacity duration-200 lg:text-2xl ${
                      subpage === href
                        ? "text-cream"
                        : "text-cream/60 hover:text-cream"
                    }`}
                    style={{ paddingTop: "0.55em", paddingBottom: "0.55em" }}
                  >
                    {label}
                  </a>
                ))}
                <a
                  href="https://www.airbnb.co.uk/rooms/1695506665949683620?utm_source=casa-amani.com&utm_medium=referral&utm_campaign=book&utm_content=menu"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => handleHoverLeave()}
                  className="plausible-event-name=outbound-airbnb mt-4 inline-block border border-cream/60 px-4 py-2.5 text-center font-display text-xs tracking-[4.8px] text-cream/80 transition-all duration-300 hover:border-cream hover:bg-cream/10 hover:text-cream lg:mt-6"
                >
                  STAY WITH US
                </a>
              </div>
            </div>
          </nav>

          <div className="hidden lg:flex lg:w-[55%] lg:items-center lg:py-8">
            <div
              className={`relative h-full w-full overflow-hidden transition-all duration-500 ease-out ${
                open
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-4 scale-[0.97] opacity-0"
              }`}
              style={{ transitionDelay: open ? "150ms" : "0ms" }}
            >
              {[...new Set([DEFAULT_IMAGE, ...allNav.filter((n) => n.image).map((n) => n.image!)])].map(
                (src) => (
                  <Image
                    key={src}
                    src={src}
                    alt=""
                    fill
                    className={`object-cover transition-opacity duration-[300ms] ease-out ${
                      src === activeImage ? "opacity-100" : "opacity-0"
                    }`}
                    sizes="50vw"
                    priority={src === DEFAULT_IMAGE}
                  />
                )
              )}
              {activeText && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-warm/80 to-transparent p-8 pt-16">
                  <p className="text-base leading-relaxed text-cream/80">
                    {activeText}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
