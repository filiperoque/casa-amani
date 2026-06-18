"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { locales, type Locale, getTranslations } from "@/i18n/translations";

const CALM = "var(--ease-in-out-calm)";

export default function SubscribeBlock() {
  const pathname = usePathname();
  const currentLocale = (locales.find((l) => pathname.startsWith(`/${l}`)) ||
    "en") as Locale;
  const t = getTranslations(currentLocale);

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "default" | "submitting" | "success" | "already" | "error-invalid" | "error-generic"
  >("default");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error-invalid");
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, locale: currentLocale }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus(data.already ? "already" : "success");
        try {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (window as any).plausible?.("newsletter-signup", {
            props: { locale: currentLocale, source: "pre-footer" },
          });
        } catch { /* plausible not loaded */ }
      } else {
        setStatus(data.error === "invalid" ? "error-invalid" : "error-generic");
      }
    } catch {
      setStatus("error-generic");
    }
  }

  const isConfirmed = status === "success" || status === "already";

  return (
    <section className="bg-warm px-6 py-16 lg:px-[120px] lg:py-20">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-16">
        <div className="md:w-1/2">
          <h2 className="mb-4 font-display text-2xl text-cream lg:text-3xl">
            {t.subscribe.heading}
          </h2>
          <p className="leading-7 text-cream/70">
            {t.subscribe.bodyP1}
          </p>
          <p className="mt-4 text-xs text-cream/40">
            {t.subscribe.privacyLine}
          </p>
        </div>

        <div className="md:w-1/2">
          {isConfirmed ? (
            <div
              style={{ transition: `opacity var(--motion-drift) ${CALM}` }}
            >
              <h3 className="mb-2 font-display text-xl text-cream">
                {status === "success"
                  ? t.subscribe.confirmHeading
                  : t.subscribe.confirmHeading}
              </h3>
              <p className="leading-7 text-cream/70">
                {status === "success"
                  ? t.subscribe.confirmBody
                  : t.subscribe.confirmAlready}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status.startsWith("error")) setStatus("default");
                  }}
                  placeholder={t.subscribe.placeholder}
                  disabled={status === "submitting"}
                  required
                  className="flex-1 border border-cream/30 bg-transparent px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-cream/60 focus:outline-none"
                  style={{ transition: `border-color var(--motion-tide) ${CALM}` }}
                />
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="whitespace-nowrap border border-cream/60 px-5 py-3 font-display text-xs tracking-[3px] text-cream/90 hover:border-cream hover:bg-cream/10 hover:text-cream disabled:opacity-50"
                  style={{ transition: `all var(--motion-tide) ${CALM}` }}
                >
                  {status === "submitting"
                    ? t.subscribe.buttonSubmitting
                    : t.subscribe.buttonDefault}
                </button>
              </div>
              {status === "error-invalid" && (
                <p className="text-sm text-cream/60">{t.subscribe.errorInvalid}</p>
              )}
              {status === "error-generic" && (
                <p className="text-sm text-cream/60">{t.subscribe.errorGeneric}</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
