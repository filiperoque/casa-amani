"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { landingBlurDataURL } from "./blur-placeholder";

interface LandingSceneProps {
  title: string;
  subtitle: string;
  cta: string;
  ctaHref?: string;
}

export default function LandingScene({
  title,
  subtitle,
  cta,
  ctaHref = "https://www.airbnb.co.uk/rooms/1695506665949683620",
}: LandingSceneProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (!imageLoaded) return;

    const t1 = requestAnimationFrame(() => setStage(1));
    const t2 = setTimeout(() => setStage(2), 400);
    const t3 = setTimeout(() => setStage(3), 700);
    return () => {
      cancelAnimationFrame(t1);
      clearTimeout(t2);
      clearTimeout(t3);
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
        className={`absolute inset-0 transition-opacity duration-[1.5s] ease-out ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 animate-ken-burns">
          <Image
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

      <div className="relative z-10 flex w-full flex-1 flex-col items-center justify-center gap-10 px-6 pb-16 pt-10 mix-blend-lighten md:px-[120px]">
        <div className="flex flex-col items-center gap-6 text-cream">
          <h1
            className="font-display text-5xl transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:text-7xl lg:text-[88px] lg:leading-[80px]"
            style={{
              opacity: stage >= 1 ? 1 : 0,
              transform: stage >= 1 ? "translateY(0)" : "translateY(20px)",
            }}
          >
            {title}
          </h1>
          <p
            className="text-center text-sm tracking-[5.76px] transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:text-lg lg:text-2xl"
            style={{
              opacity: stage >= 2 ? 0.8 : 0,
              transform: stage >= 2 ? "translateY(0)" : "translateY(16px)",
            }}
          >
            {subtitle}
          </p>
        </div>

        <a
          href={`${ctaHref}${ctaHref.includes("?") ? "&" : "?"}utm_source=casa-amani.com&utm_medium=referral&utm_campaign=book&utm_content=landing-hero`}
          target="_blank"
          rel="noopener noreferrer"
          className="plausible-event-name=outbound-airbnb border border-cream bg-cream/[0.08] px-3 py-2.5 text-center font-display text-xs tracking-[4.8px] text-cream transition-all duration-500 hover:bg-cream/20 hover:tracking-[5.5px] md:px-4 md:py-3 md:text-base lg:px-4 lg:py-3 lg:text-xl lg:leading-5"
          style={{
            opacity: stage >= 3 ? 1 : 0,
            transform: stage >= 3 ? "translateY(0)" : "translateY(12px)",
            transitionDuration: stage >= 3 ? "800ms" : "0ms",
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {cta}
        </a>
      </div>
    </>
  );
}
