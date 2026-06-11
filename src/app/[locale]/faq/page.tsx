import type { Metadata } from "next";
import type { ReactElement } from "react";
import { type Locale, getTranslations } from "@/i18n/translations";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FAQ | Casa Amani Madeira | Arco da Calheta",
  description:
    "Common questions about Casa Amani: location, remote work, pool, capacity, booking, and more. Direct answers about this contemporary villa in Arco da Calheta, Madeira.",
  alternates: {
    canonical: "/faq",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Casa Amani",
      item: "https://casa-amani.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "FAQ",
      item: "https://casa-amani.com/faq",
    },
  ],
};

const AIRBNB_UTM =
  "?utm_source=casa-amani.com&utm_medium=referral&utm_campaign=book&utm_content=faq-how-to-book";

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
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main id="main" className="bg-cream min-h-dvh">
        <div className="bg-warm">
          <Header menuLabel={t.header.menu} />
        </div>

        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24 lg:py-32">
          <Reveal>
            <h1 className="mb-4 font-display text-3xl text-brown md:text-4xl lg:text-5xl">
              {t.faq.title}
            </h1>
            <p className="mb-16 text-brown/60 md:text-lg">
              {t.faq.subtitle}
            </p>
          </Reveal>

          <div className="flex flex-col">
            {t.faq.items.map((item, i) => (
              <Reveal key={i} delay={Math.min(i * 40, 200)}>
                <details className="group border-t border-brown/10 py-6 last:border-b">
                  <summary className="flex cursor-pointer items-start justify-between gap-4 text-brown marker:content-none [&::-webkit-details-marker]:hidden">
                    <span className="text-base font-medium md:text-lg">
                      {item.question}
                    </span>
                    <span className="mt-1 shrink-0 text-brown/40 transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 leading-7 text-brown/70 md:text-base">
                    {renderAnswer(item.answer)}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16 border-t border-brown/10 pt-8 text-sm text-brown/50">
              <p>
                {t.faq.contact}{" "}
                <a
                  href="mailto:stay@casa-amani.com"
                  className="plausible-event-name=email-click text-brown/70 underline transition-colors hover:text-brown"
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
