import BlurBackground from "@/components/BlurBackground";
import LandingEntrance from "@/components/LandingEntrance";

export default function LandingPage() {
  return (
    <div className="relative flex h-dvh items-center justify-center overflow-hidden bg-[#bb9669]">
      <BlurBackground />
      <LandingEntrance />
    </div>
  );
}
