"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const CALM = "var(--ease-in-out-calm)";

interface GalleryStripProps {
  children: React.ReactNode;
  previousLabel: string;
  nextLabel: string;
}

/**
 * Full-bleed horizontal scroll strip. The first card aligns with the
 * content column (strip-edge utility); overflow peeks toward the
 * viewport edge with a gradient fade and arrow affordances that appear
 * only when there is somewhere to scroll.
 */
export default function GalleryStrip({
  children,
  previousLabel,
  nextLabel,
}: GalleryStripProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const update = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    update();
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollByCards = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    el.scrollBy({
      left: dir * Math.round(el.clientWidth * 0.7),
      behavior: reduced ? "auto" : "smooth",
    });
  };

  const fadeBase =
    "pointer-events-none absolute inset-y-0 w-16 md:w-24 from-cream to-transparent";
  const arrowBase =
    "absolute top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-brown bg-cream text-brown hover:scale-[1.02] active:scale-[0.96]";

  return (
    <div className="relative">
      <div ref={scrollerRef} className="no-scrollbar strip-edge overflow-x-auto">
        <div className="flex gap-6 pb-6 lg:gap-12">{children}</div>
      </div>

      <div
        aria-hidden="true"
        className={`${fadeBase} left-0 bg-gradient-to-r ${canPrev ? "opacity-100" : "opacity-0"}`}
        style={{ transition: `opacity var(--motion-tide) ${CALM}` }}
      />
      <div
        aria-hidden="true"
        className={`${fadeBase} right-0 bg-gradient-to-l ${canNext ? "opacity-100" : "opacity-0"}`}
        style={{ transition: `opacity var(--motion-tide) ${CALM}` }}
      />

      <button
        type="button"
        aria-label={previousLabel}
        onClick={() => scrollByCards(-1)}
        className={`${arrowBase} left-4 lg:left-8 ${canPrev ? "opacity-100" : "pointer-events-none opacity-0"}`}
        style={{ transition: `opacity var(--motion-tide) ${CALM}, transform 150ms ${CALM}` }}
      >
        <span aria-hidden="true">&larr;</span>
      </button>
      <button
        type="button"
        aria-label={nextLabel}
        onClick={() => scrollByCards(1)}
        className={`${arrowBase} right-4 lg:right-8 ${canNext ? "opacity-100" : "pointer-events-none opacity-0"}`}
        style={{ transition: `opacity var(--motion-tide) ${CALM}, transform 150ms ${CALM}` }}
      >
        <span aria-hidden="true">&rarr;</span>
      </button>
    </div>
  );
}
