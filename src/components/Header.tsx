"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback, useRef } from "react";
import { locales, type Locale } from "@/i18n/translations";

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

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
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDark, setIsDark] = useState(true);
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

  const showBrand = scrollProgress > 0.3 || !hasHero;

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
    }, 80);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const scrollRange = Math.min(window.innerHeight * 0.45, 200);
      const progress = Math.min(window.scrollY / scrollRange, 1);
      setScrollProgress(progress);

      const headerEl = document.querySelector("header");
      if (headerEl) headerEl.style.pointerEvents = "none";
      const el = document.elementFromPoint(window.innerWidth / 2, 60);
      if (headerEl) headerEl.style.pointerEvents = "";
      if (el) {
        let node: HTMLElement | null = el as HTMLElement;
        let dark = true;
        while (node && node !== document.body) {
          if (node.classList.contains("bg-cream")) { dark = false; break; }
          if (node.classList.contains("bg-warm")) { dark = true; break; }
          node = node.parentElement as HTMLElement | null;
        }
        setIsDark(dark);
      }
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

  return (
    <>
      {/* Fixed header bar */}
      <header
        className="fixed inset-x-0 top-0 z-[60] flex h-14 items-center justify-between px-6 lg:px-[120px]"
        style={{
          backgroundColor: open
            ? "var(--color-warm)"
            : isDark
              ? `rgba(184, 149, 110, ${scrollProgress * 0.92})`
              : `rgba(242, 236, 226, ${scrollProgress * 0.95})`,
          backdropFilter: open ? "none" : `blur(${scrollProgress * 12}px)`,
          WebkitBackdropFilter: open ? "none" : `blur(${scrollProgress * 12}px)`,
          transition: `background-color 600ms ${EASE}`,
        }}
      >
        {/* Hamburger / X */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[7px] hover:opacity-70"
          style={{ transition: `opacity 400ms ${EASE}` }}
        >
          <span
            className="block h-[2px] w-6"
            style={{
              backgroundColor: open || isDark ? "var(--color-cream)" : "var(--color-brown)",
              transform: open ? "translateY(4.5px) rotate(45deg)" : "none",
              transition: `transform 500ms ${EASE}, background-color 600ms ${EASE}`,
            }}
          />
          <span
            className="block h-[2px] w-6"
            style={{
              backgroundColor: open || isDark ? "var(--color-cream)" : "var(--color-brown)",
              transform: open ? "translateY(-4.5px) rotate(-45deg)" : "none",
              transition: `transform 500ms ${EASE}, background-color 600ms ${EASE}`,
            }}
          />
        </button>

        {/* Brand mark */}
        <a
          href={base || "/en"}
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[55%] font-display text-[26px] hover:tracking-[0.03em] lg:text-[30px] ${
            showBrand ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          style={{
            color: isDark ? "var(--color-cream)" : "var(--color-brown)",
            transition: `opacity 500ms ${EASE}, letter-spacing 600ms ${EASE}, color 600ms ${EASE}`,
          }}
          aria-label="Casa Amani Madeira, home"
        >
          casa amani
        </a>

        {/* Language picker / Stay CTA share the same right-side slot */}
        <div className="relative">
          <a
            href="https://www.airbnb.co.uk/rooms/1695506665949683620?utm_source=casa-amani.com&utm_medium=referral&utm_campaign=book&utm_content=menu-header"
            target="_blank"
            rel="noopener noreferrer"
            className={`plausible-event-name=outbound-airbnb absolute right-0 top-1/2 -translate-y-1/2 whitespace-nowrap border px-5 py-2.5 font-display text-xs tracking-[4.8px] ${
              isDark
                ? "border-cream/60 text-cream/90 hover:border-cream hover:bg-cream/10 hover:text-cream"
                : "border-brown/40 text-brown/80 hover:border-brown hover:bg-brown/5 hover:text-brown"
            } ${
              open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
            }`}
            style={{ transition: `opacity 500ms ${EASE}, border-color 400ms ${EASE}, background-color 400ms ${EASE}, color 400ms ${EASE}` }}
          >
            STAY WITH US
          </a>
          <div
            ref={langRef}
            className={`${open ? "pointer-events-none opacity-0" : "opacity-100"}`}
            style={{ transition: `opacity 500ms ${EASE}` }}
          >
          <button
            onClick={() => setLangOpen((v) => !v)}
            aria-expanded={langOpen}
            aria-label="Change language"
            className="flex h-10 items-center gap-2 text-sm font-medium hover:opacity-70 lg:text-base"
            style={{
              color: isDark ? "var(--color-cream)" : "var(--color-brown)",
              transition: `opacity 400ms ${EASE}, color 600ms ${EASE}`,
            }}
          >
            {localeLabels[currentLocale]}
            <svg
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none"
              style={{
                transform: langOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: `transform 400ms ${EASE}`,
              }}
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
            className={`absolute right-0 top-full mt-2 flex min-w-[160px] flex-col rounded bg-warm shadow-lg ${
              langOpen
                ? "pointer-events-auto translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-2 opacity-0"
            }`}
            style={{ transition: `opacity 400ms ${EASE}, transform 400ms ${EASE}` }}
          >
            {locales.map((locale) => (
              <a
                key={locale}
                href={`/${locale}${subpage}`}
                onClick={() => {
                  localStorage.setItem("locale", locale);
                  setLangOpen(false);
                }}
                className={`px-5 py-3 text-sm ${
                  locale === currentLocale
                    ? "font-medium text-cream"
                    : "text-cream/50 hover:bg-cream/10 hover:text-cream"
                }`}
                style={{ transition: `color 400ms ${EASE}, background-color 400ms ${EASE}` }}
              >
                {localeLabels[locale]}
              </a>
            ))}
          </div>
        </div>
        </div>
      </header>

      {!overlay && <div className="h-14" />}

      {/* Full-screen menu overlay */}
      <div
        className={`fixed inset-0 z-50 bg-warm ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        style={{ transition: `opacity 500ms ${EASE}` }}
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
                  className="font-display text-[32px] leading-none text-cream lg:text-[48px]"
                  style={{
                    paddingTop: "0.6em",
                    paddingBottom: "0.6em",
                    opacity: !open ? 0 : hoveredIndex !== null && hoveredIndex !== i ? 0.35 : 1,
                    transition: open
                      ? `opacity 250ms ${EASE}`
                      : `opacity 600ms ${EASE}`,
                    transitionDelay: !open ? "0ms" : hoveredIndex !== null ? "0ms" : `${200 + i * 80}ms`,
                  }}
                >
                  {label}
                </a>
              ))}

              <div className="mt-4 flex flex-col lg:mt-6">
                {secondaryNav.map(({ href, label }, i) => {
                  const idx = primaryNav.length + i;
                  return (
                    <a
                      key={href}
                      href={`${base}${href}`}
                      onMouseEnter={() => handleHoverEnter(idx)}
                      onMouseLeave={handleHoverLeave}
                      className="font-display text-xl leading-none text-cream/70 lg:text-2xl"
                      style={{
                        paddingTop: "0.55em",
                        paddingBottom: "0.55em",
                        opacity: !open ? 0 : hoveredIndex !== null && hoveredIndex !== idx ? 0.3 : 1,
                        transition: open
                          ? `opacity 250ms ${EASE}`
                          : `opacity 600ms ${EASE}`,
                        transitionDelay: !open ? "0ms" : hoveredIndex !== null ? "0ms" : `${200 + idx * 80}ms`,
                      }}
                    >
                      {label}
                    </a>
                  );
                })}
                <a
                  href="https://www.instagram.com/casa.amani.calheta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => handleHoverLeave()}
                  className="plausible-event-name=outbound-instagram font-display text-xl leading-none text-cream/70 lg:text-2xl"
                  style={{
                    paddingTop: "0.55em",
                    paddingBottom: "0.55em",
                    opacity: !open ? 0 : hoveredIndex !== null ? 0.3 : 1,
                    transition: open
                      ? `opacity 250ms ${EASE}`
                      : `opacity 600ms ${EASE}`,
                    transitionDelay: !open ? "0ms" : hoveredIndex !== null ? "0ms" : `${200 + (primaryNav.length + secondaryNav.length) * 80}ms`,
                  }}
                >
                  Instagram
                </a>
              </div>
            </div>
          </nav>

          <div className="hidden lg:flex lg:w-[55%] lg:items-center lg:py-8">
            <div
              className={`relative h-full w-full overflow-hidden ${
                open
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-4 scale-[0.97] opacity-0"
              }`}
              style={{
                transition: `opacity 700ms ${EASE}, transform 700ms ${EASE}`,
                transitionDelay: open ? "500ms" : "0ms",
              }}
            >
              {[...new Set([DEFAULT_IMAGE, ...allNav.filter((n) => n.image).map((n) => n.image!)])].map(
                (src) => (
                  <Image
                    key={src}
                    src={src}
                    alt=""
                    fill
                    className={`object-cover ${
                      src === activeImage ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ transition: `opacity 500ms ${EASE}` }}
                    sizes="50vw"
                    priority={src === DEFAULT_IMAGE}
                  />
                )
              )}
              {activeText && (
                <div
                  className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-warm/80 to-transparent p-8 pt-16"
                  style={{ transition: `opacity 500ms ${EASE}` }}
                >
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
