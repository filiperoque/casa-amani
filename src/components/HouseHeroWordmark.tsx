"use client";

import { useEffect, useRef, useState } from "react";

const STICKY_TOP_PX = 14;

export default function HouseHeroWordmark({ text }: { text: string }) {
  const wordmarkRef = useRef<HTMLHeadingElement>(null);
  const headerAnchorRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setMenuOpen(document.documentElement.dataset.menuOpen === "true");
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-menu-open"],
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const wordmark = wordmarkRef.current;
    const headerAnchor = headerAnchorRef.current;
    if (!wordmark || !headerAnchor) return;

    let scaleRatio = 1;
    let threshold = 1;

    const measure = () => {
      wordmark.style.transform = "scale(1)";
      const heroRect = wordmark.getBoundingClientRect();
      const heroHeight = heroRect.height;
      const heroTopAbsolute = heroRect.top + window.scrollY;

      const headerRect = headerAnchor.getBoundingClientRect();
      const headerHeight = headerRect.height;

      scaleRatio = headerHeight / heroHeight;
      threshold = heroTopAbsolute - STICKY_TOP_PX;
      if (threshold < 1) threshold = 1;
    };

    measure();

    let ticking = false;

    const update = () => {
      const scrollY = window.scrollY;
      const progress = Math.min(Math.max(scrollY / threshold, 0), 1);
      const scale = 1 + (scaleRatio - 1) * progress;
      wordmark.style.transform = `scale(${scale})`;

      const probe = document.elementFromPoint(window.innerWidth / 2, 70);
      if (probe) {
        let node: HTMLElement | null = probe as HTMLElement;
        let dark = true;
        while (node && node !== document.body) {
          if (node.classList.contains("bg-cream")) { dark = false; break; }
          if (node.classList.contains("bg-warm")) { dark = true; break; }
          node = node.parentElement as HTMLElement | null;
        }
        wordmark.style.color = dark ? "var(--color-cream)" : "var(--color-brown)";
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    const onResize = () => {
      wordmark.style.transition = "transform 200ms var(--ease-in-out-calm)";
      measure();
      update();
      setTimeout(() => {
        wordmark.style.transition = "";
      }, 250);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);
    window.visualViewport?.addEventListener("resize", onResize);
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      window.visualViewport?.removeEventListener("resize", onResize);
    };
  }, [reducedMotion]);

  if (reducedMotion) {
    return (
      <h1 className="animate-fade-up text-center font-display text-5xl text-cream md:text-7xl lg:text-[88px] lg:leading-[80px]">
        {text}
      </h1>
    );
  }

  return (
    <>
      <h1
        ref={wordmarkRef}
        className="pointer-events-none z-[61] text-center font-display text-5xl md:text-7xl lg:text-[88px] lg:leading-[80px]"
        style={{
          position: "sticky",
          top: `${STICKY_TOP_PX}px`,
          transformOrigin: "center top",
          willChange: "transform",
          color: "var(--color-cream)",
          opacity: menuOpen ? 0 : 1,
          visibility: menuOpen ? "hidden" : "visible",
          transition: "opacity var(--motion-tide) var(--ease-in-out-calm), color var(--motion-tide) var(--ease-in-out-calm)",
          margin: 0,
        }}
      >
        {text}
      </h1>

      <div
        ref={headerAnchorRef}
        aria-hidden="true"
        className="pointer-events-none invisible absolute font-display text-[26px] lg:text-[30px]"
        style={{ lineHeight: 1 }}
      >
        {text}
      </div>
    </>
  );
}
