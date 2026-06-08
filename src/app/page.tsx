import Image from "next/image";
import LandingEntrance from "@/components/LandingEntrance";

export default function LandingPage() {
  return (
    <div className="relative flex h-dvh items-center justify-center overflow-hidden bg-[#bb9669]">
      <div className="absolute inset-0 animate-ken-burns">
        <Image
          src="/images/landing-bg.jpg"
          alt="Close-up of handcrafted wood and textile details at Casa Amani"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      <LandingEntrance />
    </div>
  );
}
