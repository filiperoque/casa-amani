"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { detectLocale } from "@/i18n/locale-detect";

export default function RootRedirect() {
  const router = useRouter();

  useEffect(() => {
    const locale = detectLocale();
    router.replace(`/${locale}`);
  }, [router]);

  return (
    <div className="flex h-dvh items-center justify-center bg-[#bb9669]" />
  );
}
