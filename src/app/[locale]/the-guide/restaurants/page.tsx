import type { Metadata } from "next";
import { type Locale, getTranslations } from "@/i18n/translations";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import BookCTA from "@/components/BookCTA";
import Footer from "@/components/Footer";
import {
  westCoastRestaurants,
  furtherRestaurants,
  type Restaurant,
} from "@/content/restaurants";

export const metadata: Metadata = {
  title:
    "Where to Eat Near Casa Amani | Restaurants in Calheta, Madeira",
  description:
    "Restaurants we send guests to, from grilled fish in Paul do Mar to tasting menus in Estreito da Calheta. Curated by the owners of Casa Amani Madeira.",
  alternates: { canonical: "/the-guide/restaurants" },
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
      name: "The Guide",
      item: "https://casa-amani.com/the-guide",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Restaurants",
      item: "https://casa-amani.com/the-guide/restaurants",
    },
  ],
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Restaurants near Casa Amani Madeira",
  description:
    "Curated restaurants on the west coast of Madeira, within 20 minutes of Casa Amani in Arco da Calheta.",
  url: "https://casa-amani.com/the-guide/restaurants",
  isPartOf: {
    "@type": "WebSite",
    name: "Casa Amani Madeira",
    url: "https://casa-amani.com",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are there restaurants within walking distance of Casa Amani?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The nearest bar (Monteiros) and restaurant (Melton's Kitchen) are about 1 km from the house. Most of the restaurants on this list are a short drive away. A car is recommended.",
      },
    },
    {
      "@type": "Question",
      name: "Where is the best seafood near Calheta, Madeira?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Saboramar in Paul do Mar is our top pick for grilled fish, straight off the morning boats. Restaurante Moreia in Madalena do Mar is the best for arroz de marisco. Both are within 15 minutes of Casa Amani.",
      },
    },
    {
      "@type": "Question",
      name: "Is there fine dining near Arco da Calheta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Razao by Octavio Freitas at Socalco Nature Estate in Estreito da Calheta offers a farm-to-table tasting menu. It is a 10-minute drive from Casa Amani. Reserve well ahead.",
      },
    },
    {
      "@type": "Question",
      name: "Do we need to book restaurants in advance in Madeira?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For casual spots like Sunspot Cafe or Golden Calheta, walk-ins are usually fine outside peak summer. For Saboramar, Razao, Vila do Peixe, and Vila da Carne, reservations are recommended, especially for dinner and on weekends.",
      },
    },
  ],
};

function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  return (
    <div className="border-t border-brown/10 py-8 first:border-t-0 first:pt-0">
      <div className="mb-2 flex items-baseline gap-3">
        <h3 className="font-display text-xl text-brown md:text-2xl">
          {restaurant.name}
        </h3>
        <span className="text-sm text-brown/50">{restaurant.location}</span>
      </div>
      <p className="leading-7 text-brown/70">{restaurant.editorial}</p>
    </div>
  );
}

export default async function RestaurantsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main id="main">
        <Header menuLabel={t.header.menu} />

        <section className="bg-cream px-6 py-16 md:py-24 lg:py-32">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h1 className="mb-6 font-display text-3xl text-brown md:text-4xl lg:text-5xl">
                where to eat
              </h1>
              <p className="mb-12 text-lg leading-8 text-brown/70 md:text-xl">
                Restaurants we return to and send guests to, from grilled fish
                on the seafront in Paul do Mar to tasting menus in the vineyard
                terraces above Calheta. All within twenty minutes of Casa Amani
                unless noted. A car is needed for most.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="mb-8 font-display text-2xl text-brown md:text-3xl">
                the west coast
              </h2>
              <div className="mb-16">
                {westCoastRestaurants.map((r) => (
                  <RestaurantCard key={r.name} restaurant={r} />
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h2 className="mb-8 font-display text-2xl text-brown md:text-3xl">
                worth the drive
              </h2>
              <div className="mb-16">
                {furtherRestaurants.map((r) => (
                  <RestaurantCard key={r.name} restaurant={r} />
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h2 className="mb-6 font-display text-2xl text-brown md:text-3xl">
                common questions
              </h2>
              <div className="mb-16 flex flex-col">
                {faqJsonLd.mainEntity.map((item, i) => (
                  <details
                    key={i}
                    className="group border-t border-brown/10 py-6 last:border-b"
                  >
                    <summary className="flex cursor-pointer items-start justify-between gap-4 text-brown marker:content-none [&::-webkit-details-marker]:hidden">
                      <span className="text-base font-medium md:text-lg">
                        {item.name}
                      </span>
                      <span className="mt-1 shrink-0 text-brown/40 transition-transform duration-300 group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 leading-7 text-brown/70 md:text-base">
                      {item.acceptedAnswer.text}
                    </p>
                  </details>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <div className="border-t border-brown/10 pt-8">
                <BookCTA placement="restaurants-cta" label={t.bookCta} />
              </div>
            </Reveal>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
