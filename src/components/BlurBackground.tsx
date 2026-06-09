"use client";

import Image from "next/image";
import { useState } from "react";
import { landingBlurDataURL } from "./blur-placeholder";

export default function BlurBackground() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Tiny blur placeholder — inlined as base64, renders on first paint */}
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

      {/* Full image — fades in over the blur once loaded, then Ken Burns */}
      <div
        className={`absolute inset-0 transition-opacity duration-[1.5s] ease-out ${
          loaded ? "opacity-100" : "opacity-0"
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
            onLoad={() => setLoaded(true)}
          />
        </div>
      </div>
    </>
  );
}
