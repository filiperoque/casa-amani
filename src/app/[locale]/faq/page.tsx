import type { Metadata } from "next";
import type { ReactElement } from "react";
import { type Locale, getTranslations } from "@/i18n/translations";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({
    locale: locale as Locale,
    path: "/faq",
    page: "faq",
    image: "/images/living-space.jpg",
    imageAlt: "Open-plan living space at Casa Amani",
  });
}

const AIRBNB_UTM =
  "?utm_source=casa-amani.com&utm_medium=referral&utm_campaign=book&utm_content=faq-how-to-book";

/**
 * Grouping of t.faq.items by index. The items array has the same order in
 * every locale, so indices are stable across languages. New questions must
 * be appended to the items array and added to a group here.
 */
const FAQ_GROUPS: { labelKey: "house" | "location" | "booking" | "working"; indices: number[] }[] = [
  { labelKey: "house", indices: [3, 4, 7, 8, 12, 16] },
  { labelKey: "location", indices: [0, 1, 9, 10, 11, 17] },
  { labelKey: "booking", indices: [5, 6, 14, 15, 18, 19, 20, 21, 22, 23, 24] },
  { labelKey: "working", indices: [2, 13] },
];

/** Converts markdown links to plain "text (url)" for JSON-LD output. */
function plainAnswer(text: string): string {
  return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1 ($2)");
}

function renderAnswer(text: string) {
  const mdLinkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: (string | ReactElement)[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = mdLinkPattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const linkText = match[1];
    let href = match[2];
    const isAirbnb = href.includes("airbnb.co");
    if (isAirbnb) {
      href = href + AIRBNB_UTM;
    }
    parts.push(
      <a
        key={match.index}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-brown underline transition-colors hover:text-brown/70${isAirbnb ? " plausible-event-name=outbound-airbnb" : ""}`}
      >
        {linkText}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length === 1 && typeof parts[0] === "string" ? parts[0] : parts;
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: plainAnswer(item.answer),
      },
    })),
  };

  const breadcrumbs = breadcrumbJsonLd(locale as Locale, [
    { name: "FAQ", path: "/faq" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <main id="main" className="bg-cream min-h-dvh">
        <Header menuLabel={t.header.menu} />

        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24 lg:py-32">
          <Reveal>
            <h1 className="mb-4 font-display text-3xl text-brown md:text-4xl lg:text-5xl">
              {t.faq.title}
            </h1>
            <p className="mb-16 text-brown md:text-lg">
              {t.faq.subtitle}
            </p>
          </Reveal>

          {FAQ_GROUPS.map((group) => (
            <section key={group.labelKey} className="mb-12 last:mb-0">
              <Reveal>
                <h2 className="mb-2 font-display text-xl text-brown md:text-2xl">
                  {t.faq.groups[group.labelKey]}
                </h2>
              </Reveal>
              <div className="flex flex-col">
                {group.indices.map((i, pos) => {
                  const item = t.faq.items[i];
                  if (!item) return null;
                  return (
                    <Reveal key={i} delay={Math.min(pos * 40, 200)}>
                      <details className="group border-t border-brown/10 py-6 last:border-b">
                        <summary className="flex cursor-pointer items-start justify-between gap-4 text-brown transition-opacity hover:opacity-70 marker:content-none [&::-webkit-details-marker]:hidden">
                          <span className="text-base font-medium md:text-lg">
                            {item.question}
                          </span>
                          <span aria-hidden="true" className="mt-1 shrink-0 text-brown transition-transform duration-300 group-open:rotate-45">
                            +
                          </span>
                        </summary>
                        <p className="mt-4 leading-7 text-brown md:text-base">
                          {renderAnswer(item.answer)}
                        </p>
                      </details>
                    </Reveal>
                  );
                })}
              </div>
            </section>
          ))}

          <Reveal>
            <div className="mt-16 border-t border-brown/10 pt-8 text-sm text-brown">
              <p>
                {t.faq.contact}{" "}
                <a
                  href="mailto:stay@casa-amani.com"
                  className="plausible-event-name=email-click text-brown underline transition-colors hover:text-brown"
                >
                  stay@casa-amani.com
                </a>
                .
              </p>
            </div>
          </Reveal>
        </div>
        <Footer />
      </main>
    </>
  );
}
