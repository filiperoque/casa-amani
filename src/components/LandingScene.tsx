"use client";

import OptimizedImage from "@/components/OptimizedImage";
import { useEffect, useState } from "react";
import { landingBlurDataURL } from "./blur-placeholder";

interface LandingSceneProps {
  title: string;
  subtitle: string;
  intro: string;
  cta: string;
  ctaHref?: string;
}

export default function LandingScene({
  title,
  subtitle,
  intro,
  cta,
  ctaHref = "https://www.airbnb.co.uk/rooms/1695506665949683620",
}: LandingSceneProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (!imageLoaded) return;

    const t1 = requestAnimationFrame(() => setStage(1));
    const t2 = setTimeout(() => setStage(2), 400);
    const t3 = setTimeout(() => setStage(3), 1000);
    const t4 = setTimeout(() => setStage(4), 1400);
    return () => {
      cancelAnimationFrame(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [imageLoaded]);

  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${landingBlurDataURL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(20px)",
          transform: "scale(1.1)",
        }}
      />

      <div
        className={`absolute inset-0 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ transition: `opacity var(--motion-settle) var(--ease-out-natural)` }}
      >
        <div className="absolute inset-0 animate-ken-burns">
          <OptimizedImage
            src="/images/landing-bg.jpg"
            alt="Close-up of handcrafted wood and textile details at Casa Amani"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      </div>

      <div className="relative z-10 flex w-full flex-1 flex-col items-center justify-center gap-8 px-6 pb-16 pt-10 mix-blend-lighten md:gap-10 md:px-[120px]">
        <div className="flex flex-col items-center gap-6 text-cream">
          <h1
            className="font-display text-5xl md:text-7xl lg:text-[88px] lg:leading-[80px]"
            style={{
              opacity: stage >= 1 ? 1 : 0,
              transform: stage >= 1 ? "translateY(0)" : "translateY(20px)",
              transition: `opacity var(--motion-settle) var(--ease-out-natural), transform var(--motion-settle) var(--ease-out-natural)`,
            }}
          >
            {title}
          </h1>
          <p
            className="text-center text-sm tracking-[5.76px] md:text-lg lg:text-2xl"
            style={{
              opacity: stage >= 2 ? 0.8 : 0,
              transform: stage >= 2 ? "translateY(0)" : "translateY(16px)",
              transition: `opacity var(--motion-settle) var(--ease-out-natural), transform var(--motion-settle) var(--ease-out-natural)`,
            }}
          >
            {subtitle}
          </p>
        </div>

        <p
          className="mx-auto max-w-[600px] text-center text-sm leading-[1.65] text-cream/80 md:text-base md:leading-[1.7]"
          style={{
            opacity: stage >= 3 ? 1 : 0,
            transform: stage >= 3 ? "translateY(0)" : "translateY(14px)",
            transition: `opacity var(--motion-drift) var(--ease-out-natural), transform var(--motion-drift) var(--ease-out-natural)`,
          }}
        >
          {intro}
        </p>

        <a
          href={`${ctaHref}${ctaHref.includes("?") ? "&" : "?"}utm_source=casa-amani.com&utm_medium=referral&utm_campaign=book&utm_content=landing-hero`}
          target="_blank"
          rel="noopener noreferrer"
          className="plausible-event-name=outbound-airbnb border border-cream bg-cream/[0.08] px-3 py-2.5 text-center font-display text-xs tracking-[4.8px] text-cream md:px-4 md:py-3 md:text-base lg:px-4 lg:py-3 lg:text-xl lg:leading-5"
          style={{
            opacity: stage >= 4 ? 1 : 0,
            transform: stage >= 4 ? "translateY(0)" : "translateY(12px)",
            transition: stage >= 4
              ? `opacity var(--motion-drift) var(--ease-out-natural), transform var(--motion-drift) var(--ease-out-natural), background-color var(--motion-tide) var(--ease-in-out-calm), letter-spacing var(--motion-tide) var(--ease-in-out-calm)`
              : "none",
          }}
          onMouseOver={(e) => { e.currentTarget.style.backgroundColor = "rgba(242,236,226,0.2)"; e.currentTarget.style.letterSpacing = "5.5px"; }}
          onMouseOut={(e) => { e.currentTarget.style.backgroundColor = "rgba(242,236,226,0.08)"; e.currentTarget.style.letterSpacing = "4.8px"; }}
        >
          {cta}
        </a>
      </div>
    </>
  );
}
