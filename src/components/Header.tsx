"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback, useRef } from "react";
import { locales, type Locale, getTranslations } from "@/i18n/translations";

const NATURAL = "var(--ease-out-natural)";
const CALM = "var(--ease-in-out-calm)";

const localeLabels: Record<Locale, string> = {
  en: "English",
  pt: "Português",
  de: "Deutsch",
  fr: "Français",
  pl: "Polski",
};

const DEFAULT_IMAGE = "/images/landing-bg.jpg";

export default function Header({ menuLabel = "MENU", overlay = false, mode = "content" }: { menuLabel?: string; overlay?: boolean; mode?: "hero" | "house" | "content" }) {
  const pathname = usePathname();
  const currentLocale = (locales.find((l) => pathname.startsWith(`/${l}`)) ||
    "en") as Locale;
  const base = `/${currentLocale}`;
  const t = getTranslations(currentLocale);

  const primaryNav = [
    {
      href: "/house",
      label: t.footer.theHouse,
      image: "/images/living-space.jpg",
      text: t.nav.previews.house,
    },
    {
      href: "/the-guide",
      label: t.footer.theGuide,
      image: "/images/location.jpg",
      text: t.nav.previews.guide,
    },
  ];

  const secondaryNav = [
    {
      href: "/calheta",
      label: t.footer.calheta,
      image: "/images/location.jpg",
      text: t.nav.previews.calheta,
    },
    {
      href: "/remote-work",
      label: t.footer.remoteWork,
      image: "/images/guest-bedroom.jpg",
      text: t.nav.previews.remoteWork,
    },
    {
      href: "/experiences",
      label: t.footer.experiences,
      image: "/images/outdoor-dining.jpg",
      text: t.nav.previews.experiences,
    },
    {
      href: "/faq",
      label: t.footer.faq,
      image: null,
      text: null,
    },
    {
      href: "/contact",
      label: t.footer.contact,
      image: null,
      text: null,
    },
  ];

  const allNav = [...primaryNav, ...secondaryNav];
  const subpage = pathname.replace(base, "") || "";
  const isLanding = subpage === "" || subpage === "/";
  const hasHero = isLanding || subpage === "/house";

  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDark, setIsDark] = useState(hasHero);
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

  const showBrand = !open && mode === "content" && (scrollProgress > 0.3 || !hasHero);

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
    }, 300);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const scrollRange = Math.min(window.innerHeight * 0.45, 200);
      const progress = Math.min(window.scrollY / scrollRange, 1);
      setScrollProgress(progress);

      if (!isLanding) {
        const headerEl = document.querySelector("header");
        if (headerEl) headerEl.style.pointerEvents = "none";
        const el = document.elementFromPoint(window.innerWidth / 2, 70);
        if (headerEl) headerEl.style.pointerEvents = "";
        if (el) {
          let node: HTMLElement | null = el as HTMLElement;
          let dark = false;
          while (node && node !== document.body) {
            if (node.classList.contains("bg-warm")) { dark = true; break; }
            if (node.classList.contains("bg-cream")) { dark = false; break; }
            node = node.parentElement as HTMLElement | null;
          }
          setIsDark(dark);
        }
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
    document.documentElement.dataset.menuOpen = "true";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      document.documentElement.dataset.menuOpen = "false";
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
            : isLanding
              ? "transparent"
              : isDark
                ? `rgba(184, 149, 110, ${scrollProgress * 0.92})`
                : `rgba(242, 236, 226, ${scrollProgress * 0.95})`,
          backdropFilter: open || isLanding ? "none" : `blur(${scrollProgress * 12}px)`,
          WebkitBackdropFilter: open || isLanding ? "none" : `blur(${scrollProgress * 12}px)`,
          transition: `background-color var(--motion-tide) ${CALM}`,
        }}
      >
        {/* Hamburger / X (Drift for morph, Breath for hover) */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[7px] hover:scale-[1.02] hover:opacity-80 active:scale-[0.96]"
          style={{ transition: `opacity var(--motion-breath) ${CALM}` }}
        >
          <span
            className="block h-[2px] w-6"
            style={{
              backgroundColor: open || isDark ? "var(--color-cream)" : "var(--color-brown)",
              transform: open ? "translateY(4.5px) rotate(45deg)" : "none",
              transition: `transform var(--motion-drift) ${NATURAL}, background-color var(--motion-tide) ${CALM}`,
            }}
          />
          <span
            className="block h-[2px] w-6"
            style={{
              backgroundColor: open || isDark ? "var(--color-cream)" : "var(--color-brown)",
              transform: open ? "translateY(-4.5px) rotate(-45deg)" : "none",
              transition: `transform var(--motion-drift) ${NATURAL}, background-color var(--motion-tide) ${CALM}`,
            }}
          />
        </button>

        {/* Brand mark (Drift for entrance, Tide for hover/color) */}
        <a
          href={base || "/en"}
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[55%] font-display text-[26px] lg:text-[30px] ${
            showBrand ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          style={{
            color: isDark ? "var(--color-cream)" : "var(--color-brown)",
            transition: `opacity var(--motion-drift) ${NATURAL}, letter-spacing var(--motion-tide) ${CALM}, color var(--motion-tide) ${CALM}`,
          }}
          onMouseOver={(e) => { e.currentTarget.style.letterSpacing = "0.03em"; }}
          onMouseOut={(e) => { e.currentTarget.style.letterSpacing = "0em"; }}
          aria-label="Casa Amani Madeira, home"
        >
          casa amani
        </a>

        {/* Right side: language picker / STAY WITH US swap */}
        <div className="relative">
          {/* STAY WITH US CTA (visible when menu open) */}
          <a
            href="https://www.airbnb.co.uk/rooms/1695506665949683620?utm_source=casa-amani.com&utm_medium=referral&utm_campaign=book&utm_content=menu-header"
            target="_blank"
            rel="noopener noreferrer"
            className={`plausible-event-name=outbound-airbnb absolute right-0 top-1/2 -translate-y-1/2 whitespace-nowrap border border-cream/60 px-5 py-2.5 font-display text-xs tracking-[4.8px] text-cream/90 hover:scale-[1.02] hover:border-cream hover:bg-cream/10 active:scale-[0.96] ${
              open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
            }`}
            style={{ transition: `opacity var(--motion-drift) ${CALM}, border-color var(--motion-tide) ${CALM}, background-color var(--motion-tide) ${CALM}` }}
          >
            {t.landing.cta}
          </a>

          {/* Language picker (hidden when menu open) */}
          <div
            ref={langRef}
            className={`${open ? "pointer-events-none opacity-0" : "opacity-100"}`}
            style={{ transition: `opacity var(--motion-drift) ${CALM}` }}
          >
            <button
              onClick={() => setLangOpen((v) => !v)}
              aria-expanded={langOpen}
              aria-label="Change language"
              className="flex h-10 items-center gap-2 text-sm font-medium hover:scale-[1.02] hover:opacity-80 active:scale-[0.96] lg:text-base"
              style={{
                color: isDark ? "var(--color-cream)" : "var(--color-brown)",
                transition: `opacity var(--motion-breath) ${CALM}, color var(--motion-tide) ${CALM}`,
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
                  transition: `transform var(--motion-breath) ${CALM}`,
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
              style={{ transition: `opacity var(--motion-tide) ${NATURAL}, transform var(--motion-tide) ${NATURAL}` }}
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
                  style={{ transition: `color var(--motion-breath) ${CALM}, background-color var(--motion-breath) ${CALM}` }}
                >
                  {localeLabels[locale]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      {!overlay && <div className="h-14" />}

      {/* Full-screen menu overlay (Settle tier) */}
      <div
        className={`fixed inset-0 z-50 bg-warm ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        style={{ transition: `opacity var(--motion-settle) ${NATURAL}` }}
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
                    opacity: !open ? 0 : hoveredIndex !== null && hoveredIndex !== i ? 0.55 : 1,
                    transition: `opacity ${hoveredIndex !== null ? "var(--motion-tide)" : "var(--motion-drift)"} ${hoveredIndex !== null ? CALM : NATURAL}`,
                    transitionDelay: !open ? "0ms" : hoveredIndex !== null ? "0ms" : `${250 + i * 100}ms`,
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
                        opacity: !open ? 0 : hoveredIndex !== null && hoveredIndex !== idx ? 0.55 : 1,
                        transition: `opacity ${hoveredIndex !== null ? "var(--motion-tide)" : "var(--motion-drift)"} ${hoveredIndex !== null ? CALM : NATURAL}`,
                        transitionDelay: !open ? "0ms" : hoveredIndex !== null ? "0ms" : `${250 + idx * 100}ms`,
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
                    opacity: !open ? 0 : hoveredIndex !== null ? 0.55 : 1,
                    transition: `opacity ${hoveredIndex !== null ? "var(--motion-tide)" : "var(--motion-drift)"} ${hoveredIndex !== null ? CALM : NATURAL}`,
                    transitionDelay: !open ? "0ms" : hoveredIndex !== null ? "0ms" : `${250 + (primaryNav.length + secondaryNav.length) * 100}ms`,
                  }}
                >
                  Instagram
                </a>
              </div>
            </div>
          </nav>

          {/* Image preview (Drift tier) */}
          <div className="hidden lg:flex lg:w-[55%] lg:items-center lg:py-8">
            <div
              className={`relative h-full w-full overflow-hidden ${
                open
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-4 scale-[0.97] opacity-0"
              }`}
              style={{
                transition: `opacity var(--motion-drift) ${NATURAL}, transform var(--motion-drift) ${NATURAL}`,
                transitionDelay: open ? "600ms" : "0ms",
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
                    style={{ transition: `opacity var(--motion-drift) ${CALM}` }}
                    sizes="50vw"
                    loading="lazy"
                  />
                )
              )}
              <div
                className="absolute inset-x-0 bottom-0 p-8 pt-20"
                style={{
                  background: "linear-gradient(to top, rgba(122,95,64,0.7) 0%, transparent 100%)",
                  opacity: activeText ? 1 : 0,
                  transition: `opacity var(--motion-drift) ${CALM}`,
                }}
              >
                <p className="max-w-[32ch] font-display text-base leading-relaxed text-cream/90">
                  {activeText}
                </p>
                {hoveredIndex !== null && allNav[hoveredIndex]?.href && (
                  <a
                    href={`${base}${allNav[hoveredIndex].href}`}
                    className="mt-2 inline-block font-display text-sm text-cream/70 hover:text-cream"
                    style={{ transition: `color var(--motion-tide) ${CALM}` }}
                  >
                    {t.nav.discoverMore} &rarr;
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
