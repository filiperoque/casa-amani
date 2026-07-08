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
    <section className="border-b border-cream/20 bg-warm px-6 py-10 lg:px-[120px]">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-12">
        <div className="md:w-2/5">
          <h2 className="mb-2 font-display text-xl text-cream">
            {t.subscribe.heading}
          </h2>
          <p className="text-base leading-7 text-cream">
            {t.subscribe.bodyP1}
          </p>
        </div>

        <div className="md:w-3/5">
          {isConfirmed ? (
            <p
              className="text-base leading-7 text-cream"
              style={{ transition: `opacity var(--motion-drift) ${CALM}` }}
            >
              <span className="font-display">{t.subscribe.confirmHeading}.</span>{" "}
              {status === "success"
                ? t.subscribe.confirmBody
                : t.subscribe.confirmAlready}
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex flex-col gap-3 sm:flex-row">
                <label htmlFor="subscribe-email" className="sr-only">
                  {t.subscribe.placeholder}
                </label>
                <input
                  id="subscribe-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status.startsWith("error")) setStatus("default");
                  }}
                  placeholder={t.subscribe.placeholder}
                  disabled={status === "submitting"}
                  required
                  className="flex-1 border border-cream/70 bg-transparent px-4 py-3 text-base text-cream placeholder:text-cream/70 focus:border-cream focus:outline-none"
                  style={{ transition: `border-color var(--motion-tide) ${CALM}` }}
                />
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="whitespace-nowrap border border-cream px-6 py-3 font-display text-sm uppercase tracking-[4px] text-cream hover:scale-[1.02] hover:bg-cream/10 active:scale-[0.96] disabled:opacity-50"
                  style={{ transition: `background-color var(--motion-tide) ${CALM}, border-color var(--motion-tide) ${CALM}, transform 150ms ${CALM}` }}
                >
                  {status === "submitting"
                    ? t.subscribe.buttonSubmitting
                    : t.subscribe.buttonDefault}
                </button>
              </div>
              {status === "error-invalid" && (
                <p role="alert" className="text-base text-cream">{t.subscribe.errorInvalid}</p>
              )}
              {status === "error-generic" && (
                <p role="alert" className="text-base text-cream">{t.subscribe.errorGeneric}</p>
              )}
              <p className="text-sm text-cream">{t.subscribe.privacyLine}</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
