"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function LandingEntrance() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const t1 = requestAnimationFrame(() => setStage(1));
    const t2 = setTimeout(() => setStage(2), 400);
    const t3 = setTimeout(() => setStage(3), 700);
    return () => {
      cancelAnimationFrame(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <div className="relative z-10 flex w-full flex-1 flex-col items-center justify-center gap-10 px-6 pb-16 pt-10 mix-blend-lighten md:px-[120px]">
      <div className="flex flex-col items-center gap-6 text-cream">
        <h1
          className="font-display text-5xl transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:text-7xl lg:text-[88px] lg:leading-[80px]"
          style={{
            opacity: stage >= 1 ? 1 : 0,
            transform: stage >= 1 ? "translateY(0)" : "translateY(20px)",
          }}
        >
          casa amani
        </h1>
        <p
          className="text-center text-sm tracking-[5.76px] opacity-70 transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:text-lg lg:text-2xl"
          style={{
            opacity: stage >= 2 ? 0.7 : 0,
            transform: stage >= 2 ? "translateY(0)" : "translateY(16px)",
          }}
        >
          ARCO DA CALHETA, MADEIRA
        </p>
      </div>

      <Link
        href="/house"
        className="border border-cream bg-cream/[0.08] px-6 py-4 text-center font-display text-sm tracking-[5.76px] text-cream transition-all duration-500 hover:bg-cream/20 hover:tracking-[7px] md:text-lg lg:text-2xl"
        style={{
          opacity: stage >= 3 ? 1 : 0,
          transform: stage >= 3 ? "translateY(0)" : "translateY(12px)",
          transitionDuration: stage >= 3 ? "800ms" : "0ms",
          transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        STAY WITH US
      </Link>
    </div>
  );
}
