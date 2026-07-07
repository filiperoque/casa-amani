import type { Locale } from "@/i18n/translations";

/**
 * Per-page, per-locale metadata (title + meta description).
 * Same rules as translations.ts: all 5 locales must stay in sync,
 * PT is European Portuguese, brand voice (no exclamation marks,
 * no "stunning"/"luxurious", no em-dashes), place names untranslated.
 */

export type PageKey =
  | "home"
  | "house"
  | "calheta"
  | "remoteWork"
  | "experiences"
  | "faq"
  | "privacy"
  | "contact"
  | "subscribeConfirmed"
  | "guide"
  | "guideLand"
  | "guideSea"
  | "guideTable"
  | "guideCulture"
  | "guidePractical"
  | "guideSurf";

export interface PageMeta {
  title: string;
  description: string;
}

const en: Record<PageKey, PageMeta> = {
  home: {
    title: "Casa Amani Madeira | Made for slow stays on Madeira's quiet side",
    description:
      "Casa Amani Madeira is a two-bedroom contemporary villa in Arco da Calheta. Made for slow stays on Madeira's quiet side, by visitors, remote workers, and surfers on the west-coast breaks.",
  },
  house: {
    title: "The House | Casa Amani Madeira | Arco da Calheta",
    description:
      "A 219 m² split-level contemporary villa with 2 bedrooms, 3 bathrooms, sea view, workspaces, and a 7 m pool with optional heating. Sleeps up to 6 in Arco da Calheta, Madeira.",
  },
  calheta: {
    title: "Calheta | Casa Amani Madeira | West Coast",
    description:
      "Arco da Calheta sits on the south-west coast of Madeira, the quietest, sunniest stretch of the island. A village on a hill above the Atlantic, 30 minutes from Funchal.",
  },
  remoteWork: {
    title: "Remote Work | Casa Amani Madeira | Arco da Calheta",
    description:
      "A private villa with dedicated workspaces, fibre Wi-Fi, and external monitor. Madeira's quiet alternative to coliving. Designed for stays of a week or longer.",
  },
  experiences: {
    title: "Experiences | Casa Amani Madeira | Arco da Calheta",
    description:
      "Services arranged at Casa Amani Madeira: private chef, massage, yoga, golf, pre-arrival stocking, babysitting, and flowers. With notice, ahead of arrival or during the stay.",
  },
  faq: {
    title: "FAQ | Casa Amani Madeira | Arco da Calheta",
    description:
      "Direct answers about Casa Amani: location, remote work, the pool and its heating, capacity, rates, booking, and what every stay includes.",
  },
  privacy: {
    title: "Privacy | Casa Amani Madeira",
    description:
      "How Casa Amani Madeira handles your data. No cookies, no tracking across sites.",
  },
  contact: {
    title: "Contact | Casa Amani Madeira",
    description:
      "Questions before booking a stay at Casa Amani. Write to stay@casa-amani.com or call. Direct answers from the people behind the house.",
  },
  subscribeConfirmed: {
    title: "Confirmed | Casa Amani Madeira",
    description: "Your subscription is confirmed.",
  },
  guide: {
    title: "The Guide | Casa Amani Madeira | West Coast Guide",
    description:
      "A curated guide to the west coast of Madeira from Casa Amani. Land, sea, table, culture, practical. Every entry is somewhere we have been.",
  },
  guideLand: {
    title: "Land | Casa Amani Madeira | Walks, Levadas, Golf",
    description:
      "On foot and on wheels. Walks, levadas, viewpoints, mountain biking, golf, gardens. From Casa Amani in Arco da Calheta, Madeira.",
  },
  guideSea: {
    title: "Sea | Casa Amani Madeira | The Atlantic from in it",
    description:
      "Surf, boat trips, swimming, natural pools, and coastal activities on the west coast of Madeira. From Casa Amani in Arco da Calheta.",
  },
  guideTable: {
    title: "Table | Casa Amani Madeira | Where to Eat and Drink",
    description:
      "Restaurants, bars, poncha spots, and wine on the west coast of Madeira. Curated by the owners of Casa Amani.",
  },
  guideCulture: {
    title: "Culture | Casa Amani Madeira | Art, Music, Festivals",
    description:
      "Contemporary art, music nights, festivals, and local traditions in west Madeira. From Casa Amani in Arco da Calheta.",
  },
  guidePractical: {
    title: "Practical | Casa Amani Madeira | Getting Around",
    description:
      "Getting around, groceries, pharmacies, and day-to-day essentials on the west coast of Madeira. From Casa Amani in Arco da Calheta.",
  },
  guideSurf: {
    title:
      "Surfing West Madeira | A Guide from Casa Amani | Jardim do Mar, Paul do Mar",
    description:
      "Surf breaks within 15 minutes of Casa Amani: Jardim do Mar, Paul do Mar, Ponta Pequena. What each is good for, when to go, and what a surf week on Madeira's west coast looks like.",
  },
};

const pt: Record<PageKey, PageMeta> = {
  home: {
    title: "Casa Amani Madeira | Feita para estadias longas no lado calmo da Madeira",
    description:
      "Moradia contemporânea de dois quartos em Arco da Calheta. Feita para estadias longas no lado calmo da Madeira: visitantes, trabalho remoto e surf na costa oeste.",
  },
  house: {
    title: "A Casa | Casa Amani Madeira | Arco da Calheta",
    description:
      "Moradia de 219 m² com 2 quartos, 3 casas de banho, vista mar, espaços de trabalho e piscina de 7 m com aquecimento opcional. Até 6 pessoas, em Arco da Calheta.",
  },
  calheta: {
    title: "Calheta | Casa Amani Madeira | Costa Oeste",
    description:
      "Arco da Calheta fica na costa sudoeste da Madeira, o troço mais calmo e soalheiro da ilha. Uma aldeia numa encosta sobre o Atlântico, a 30 minutos do Funchal.",
  },
  remoteWork: {
    title: "Trabalho Remoto | Casa Amani Madeira | Arco da Calheta",
    description:
      "Moradia privada com espaços de trabalho, Wi-Fi de fibra e monitor externo. A alternativa calma ao coliving na Madeira. Para estadias de uma semana ou mais.",
  },
  experiences: {
    title: "Experiências | Casa Amani Madeira | Arco da Calheta",
    description:
      "Serviços na Casa Amani Madeira: chef privado, massagem, yoga, golf, despensa à chegada, babysitting e flores. Com aviso prévio, antes ou durante a estadia.",
  },
  faq: {
    title: "FAQ | Casa Amani Madeira | Arco da Calheta",
    description:
      "Respostas diretas sobre a Casa Amani: localização, trabalho remoto, a piscina e o aquecimento, capacidade, preços, reservas e o que cada estadia inclui.",
  },
  privacy: {
    title: "Privacidade | Casa Amani Madeira",
    description:
      "Como a Casa Amani Madeira trata os seus dados. Sem cookies, sem rastreio entre sites.",
  },
  contact: {
    title: "Contacto | Casa Amani Madeira",
    description:
      "Dúvidas antes de reservar uma estadia na Casa Amani. Escreva para stay@casa-amani.com ou ligue. Respostas diretas de quem está por trás da casa.",
  },
  subscribeConfirmed: {
    title: "Confirmado | Casa Amani Madeira",
    description: "A sua subscrição está confirmada.",
  },
  guide: {
    title: "O Guia | Casa Amani Madeira | Guia da Costa Oeste",
    description:
      "Um guia selecionado da costa oeste da Madeira, feito na Casa Amani. Terra, mar, mesa, cultura, prático. Cada entrada é um lugar onde já estivemos.",
  },
  guideLand: {
    title: "Terra | Casa Amani Madeira | Caminhadas, Levadas, Golf",
    description:
      "A pé e sobre rodas. Caminhadas, levadas, miradouros, BTT, golf, jardins. A partir da Casa Amani em Arco da Calheta, Madeira.",
  },
  guideSea: {
    title: "Mar | Casa Amani Madeira | O Atlântico por dentro",
    description:
      "Surf, passeios de barco, natação, piscinas naturais e atividades costeiras na costa oeste da Madeira. A partir da Casa Amani em Arco da Calheta.",
  },
  guideTable: {
    title: "Mesa | Casa Amani Madeira | Onde Comer e Beber",
    description:
      "Restaurantes, bares, poncha e vinho na costa oeste da Madeira. Uma seleção dos donos da Casa Amani.",
  },
  guideCulture: {
    title: "Cultura | Casa Amani Madeira | Arte, Música, Festas",
    description:
      "Arte contemporânea, noites de música, festas e tradições locais no oeste da Madeira. A partir da Casa Amani em Arco da Calheta.",
  },
  guidePractical: {
    title: "Prático | Casa Amani Madeira | Deslocações",
    description:
      "Deslocações, compras, farmácias e o essencial do dia a dia na costa oeste da Madeira. A partir da Casa Amani em Arco da Calheta.",
  },
  guideSurf: {
    title:
      "Surf no Oeste da Madeira | Um Guia da Casa Amani | Jardim do Mar, Paul do Mar",
    description:
      "Ondas a 15 minutos da Casa Amani: Jardim do Mar, Paul do Mar, Ponta Pequena. Para que serve cada uma, quando ir e como é uma semana de surf na costa oeste.",
  },
};

const de: Record<PageKey, PageMeta> = {
  home: {
    title: "Casa Amani Madeira | Für lange Aufenthalte auf Madeiras ruhiger Seite",
    description:
      "Moderne Villa mit zwei Schlafzimmern in Arco da Calheta. Für lange Aufenthalte auf Madeiras ruhiger Seite: Besucher, Remote-Arbeit und Surfer der Westküste.",
  },
  house: {
    title: "Das Haus | Casa Amani Madeira | Arco da Calheta",
    description:
      "219 m² Villa mit 2 Schlafzimmern, 3 Badezimmern, Meerblick, Arbeitsplätzen und 7-m-Pool mit optionaler Beheizung. Bis zu 6 Gäste, Arco da Calheta, Madeira.",
  },
  calheta: {
    title: "Calheta | Casa Amani Madeira | Westküste",
    description:
      "Arco da Calheta liegt an der Südwestküste Madeiras, dem ruhigsten und sonnigsten Abschnitt der Insel. Ein Dorf am Hang über dem Atlantik, 30 Minuten von Funchal.",
  },
  remoteWork: {
    title: "Remote-Arbeit | Casa Amani Madeira | Arco da Calheta",
    description:
      "Private Villa mit Arbeitsplätzen, Glasfaser-WLAN und externem Monitor. Madeiras ruhige Alternative zum Coliving. Für Aufenthalte ab einer Woche.",
  },
  experiences: {
    title: "Erlebnisse | Casa Amani Madeira | Arco da Calheta",
    description:
      "Privatkoch, Massage, Yoga, Golf, Einkauf vor Anreise, Kinderbetreuung und Blumen. Mit Vorlauf organisiert, vor der Anreise oder während des Aufenthalts.",
  },
  faq: {
    title: "FAQ | Casa Amani Madeira | Arco da Calheta",
    description:
      "Direkte Antworten zur Casa Amani: Lage, Remote-Arbeit, Pool und Beheizung, Kapazität, Preise, Buchung und was jeder Aufenthalt beinhaltet.",
  },
  privacy: {
    title: "Datenschutz | Casa Amani Madeira",
    description:
      "Wie die Casa Amani Madeira mit Ihren Daten umgeht. Keine Cookies, kein Tracking über andere Websites.",
  },
  contact: {
    title: "Kontakt | Casa Amani Madeira",
    description:
      "Fragen vor der Buchung in der Casa Amani. Schreiben Sie an stay@casa-amani.com oder rufen Sie an. Direkte Antworten von den Menschen hinter dem Haus.",
  },
  subscribeConfirmed: {
    title: "Bestätigt | Casa Amani Madeira",
    description: "Ihr Abonnement ist bestätigt.",
  },
  guide: {
    title: "Der Guide | Casa Amani Madeira | Westküsten-Guide",
    description:
      "Ein kuratierter Guide zur Westküste Madeiras, aus der Casa Amani. Land, Meer, Tafel, Kultur, Praktisches. Jeder Eintrag ist ein Ort, an dem wir selbst waren.",
  },
  guideLand: {
    title: "Land | Casa Amani Madeira | Wanderungen, Levadas, Golf",
    description:
      "Zu Fuß und auf Rädern. Wanderungen, Levadas, Aussichtspunkte, Mountainbiken, Golf, Gärten. Von der Casa Amani in Arco da Calheta, Madeira.",
  },
  guideSea: {
    title: "Meer | Casa Amani Madeira | Der Atlantik von innen",
    description:
      "Surfen, Bootstouren, Schwimmen, Naturpools und Küstenaktivitäten an der Westküste Madeiras. Von der Casa Amani in Arco da Calheta.",
  },
  guideTable: {
    title: "Tafel | Casa Amani Madeira | Essen und Trinken",
    description:
      "Restaurants, Bars, Poncha-Spots und Wein an der Westküste Madeiras. Ausgewählt von den Eigentümern der Casa Amani.",
  },
  guideCulture: {
    title: "Kultur | Casa Amani Madeira | Kunst, Musik, Feste",
    description:
      "Zeitgenössische Kunst, Musikabende, Feste und lokale Traditionen im Westen Madeiras. Von der Casa Amani in Arco da Calheta.",
  },
  guidePractical: {
    title: "Praktisches | Casa Amani Madeira | Unterwegs",
    description:
      "Fortbewegung, Einkaufen, Apotheken und das Alltägliche an der Westküste Madeiras. Von der Casa Amani in Arco da Calheta.",
  },
  guideSurf: {
    title:
      "Surfen in West-Madeira | Ein Guide der Casa Amani | Jardim do Mar, Paul do Mar",
    description:
      "Surfspots 15 Minuten von der Casa Amani: Jardim do Mar, Paul do Mar, Ponta Pequena. Wofür sich jeder eignet, wann man fährt und wie eine Surfwoche aussieht.",
  },
};

const fr: Record<PageKey, PageMeta> = {
  home: {
    title: "Casa Amani Madeira | Pour les longs séjours, du côté calme de Madère",
    description:
      "Villa contemporaine de deux chambres à Arco da Calheta. Pour les longs séjours du côté calme de Madère : visiteurs, télétravail et surf sur la côte ouest.",
  },
  house: {
    title: "La Maison | Casa Amani Madeira | Arco da Calheta",
    description:
      "Villa contemporaine de 219 m² avec 2 chambres, 3 salles de bain, vue mer, espaces de travail et piscine de 7 m avec chauffage en option. Jusqu'à 6 personnes.",
  },
  calheta: {
    title: "Calheta | Casa Amani Madeira | Côte Ouest",
    description:
      "Arco da Calheta, sur la côte sud-ouest de Madère, le tronçon le plus calme et ensoleillé de l'île. Un village au-dessus de l'Atlantique, à 30 minutes de Funchal.",
  },
  remoteWork: {
    title: "Télétravail | Casa Amani Madeira | Arco da Calheta",
    description:
      "Villa privée avec espaces de travail dédiés, Wi-Fi fibre et écran externe. L'alternative calme au coliving à Madère. Pour des séjours d'une semaine ou plus.",
  },
  experiences: {
    title: "Expériences | Casa Amani Madeira | Arco da Calheta",
    description:
      "Chef privé, massage, yoga, golf, courses avant l'arrivée, baby-sitting et fleurs. Organisés sur demande, avant l'arrivée ou pendant le séjour.",
  },
  faq: {
    title: "FAQ | Casa Amani Madeira | Arco da Calheta",
    description:
      "Réponses directes sur la Casa Amani : localisation, télétravail, la piscine et son chauffage, capacité, tarifs, réservation et ce que chaque séjour comprend.",
  },
  privacy: {
    title: "Confidentialité | Casa Amani Madeira",
    description:
      "Comment la Casa Amani Madeira traite vos données. Pas de cookies, pas de suivi entre les sites.",
  },
  contact: {
    title: "Contact | Casa Amani Madeira",
    description:
      "Des questions avant de réserver un séjour à la Casa Amani. Écrivez à stay@casa-amani.com ou appelez. Des réponses directes des personnes derrière la maison.",
  },
  subscribeConfirmed: {
    title: "Confirmé | Casa Amani Madeira",
    description: "Votre inscription est confirmée.",
  },
  guide: {
    title: "Le Guide | Casa Amani Madeira | Guide de la Côte Ouest",
    description:
      "Un guide sélectif de la côte ouest de Madère, depuis la Casa Amani. Terre, mer, table, culture, pratique. Chaque adresse est un lieu où nous sommes allés.",
  },
  guideLand: {
    title: "Terre | Casa Amani Madeira | Marches, Levadas, Golf",
    description:
      "À pied et sur roues. Marches, levadas, points de vue, VTT, golf, jardins. Depuis la Casa Amani à Arco da Calheta, Madère.",
  },
  guideSea: {
    title: "Mer | Casa Amani Madeira | L'Atlantique de l'intérieur",
    description:
      "Surf, sorties en bateau, baignade, piscines naturelles et activités côtières sur la côte ouest de Madère. Depuis la Casa Amani à Arco da Calheta.",
  },
  guideTable: {
    title: "Table | Casa Amani Madeira | Où Manger et Boire",
    description:
      "Restaurants, bars, poncha et vin sur la côte ouest de Madère. Sélectionnés par les propriétaires de la Casa Amani.",
  },
  guideCulture: {
    title: "Culture | Casa Amani Madeira | Art, Musique, Fêtes",
    description:
      "Art contemporain, soirées musicales, fêtes et traditions locales dans l'ouest de Madère. Depuis la Casa Amani à Arco da Calheta.",
  },
  guidePractical: {
    title: "Pratique | Casa Amani Madeira | Se Déplacer",
    description:
      "Se déplacer, faire ses courses, pharmacies et l'essentiel du quotidien sur la côte ouest de Madère. Depuis la Casa Amani à Arco da Calheta.",
  },
  guideSurf: {
    title:
      "Surfer l'Ouest de Madère | Un Guide de la Casa Amani | Jardim do Mar, Paul do Mar",
    description:
      "Spots à 15 minutes de la Casa Amani : Jardim do Mar, Paul do Mar, Ponta Pequena. Ce que vaut chaque spot, quand y aller et à quoi ressemble une semaine de surf.",
  },
};

const pl: Record<PageKey, PageMeta> = {
  home: {
    title: "Casa Amani Madeira | Na długie pobyty po cichej stronie Madery",
    description:
      "Casa Amani Madeira to współczesna willa z dwiema sypialniami w Arco da Calheta. Na długie pobyty po cichej stronie Madery: goście, praca zdalna i surfing.",
  },
  house: {
    title: "Dom | Casa Amani Madeira | Arco da Calheta",
    description:
      "Współczesna willa 219 m² z 2 sypialniami, 3 łazienkami, widokiem na morze, miejscami do pracy i basenem 7 m z opcjonalnym podgrzewaniem. Do 6 osób.",
  },
  calheta: {
    title: "Calheta | Casa Amani Madeira | Zachodnie Wybrzeże",
    description:
      "Arco da Calheta leży na południowo-zachodnim wybrzeżu Madery, najspokojniejszym i najsłoneczniejszym odcinku wyspy. Wioska nad Atlantykiem, 30 minut od Funchal.",
  },
  remoteWork: {
    title: "Praca Zdalna | Casa Amani Madeira | Arco da Calheta",
    description:
      "Prywatna willa z miejscami do pracy, światłowodowym Wi-Fi i zewnętrznym monitorem. Cicha alternatywa dla colivingu na Maderze. Na pobyty od tygodnia wzwyż.",
  },
  experiences: {
    title: "Usługi | Casa Amani Madeira | Arco da Calheta",
    description:
      "Usługi w Casa Amani Madeira: prywatny szef kuchni, masaż, yoga, golf, zakupy przed przyjazdem, opieka nad dziećmi i kwiaty. Organizowane z wyprzedzeniem.",
  },
  faq: {
    title: "FAQ | Casa Amani Madeira | Arco da Calheta",
    description:
      "Bezpośrednie odpowiedzi o Casa Amani: lokalizacja, praca zdalna, basen i jego ogrzewanie, liczba osób, ceny, rezerwacja i co obejmuje każdy pobyt.",
  },
  privacy: {
    title: "Prywatność | Casa Amani Madeira",
    description:
      "Jak Casa Amani Madeira przetwarza Twoje dane. Bez plików cookie, bez śledzenia między stronami.",
  },
  contact: {
    title: "Kontakt | Casa Amani Madeira",
    description:
      "Pytania przed rezerwacją pobytu w Casa Amani. Napisz na stay@casa-amani.com lub zadzwoń. Bezpośrednie odpowiedzi od ludzi stojących za domem.",
  },
  subscribeConfirmed: {
    title: "Potwierdzone | Casa Amani Madeira",
    description: "Twoja subskrypcja jest potwierdzona.",
  },
  guide: {
    title: "Przewodnik | Casa Amani Madeira | Przewodnik po Zachodnim Wybrzeżu",
    description:
      "Wyselekcjonowany przewodnik po zachodnim wybrzeżu Madery, z Casa Amani. Ląd, morze, stół, kultura, praktyczne. Każde miejsce sami odwiedziliśmy.",
  },
  guideLand: {
    title: "Ląd | Casa Amani Madeira | Spacery, Lewady, Golf",
    description:
      "Pieszo i na kołach. Spacery, lewady, punkty widokowe, kolarstwo górskie, golf, ogrody. Z Casa Amani w Arco da Calheta, Madera.",
  },
  guideSea: {
    title: "Morze | Casa Amani Madeira | Atlantyk od środka",
    description:
      "Surfing, rejsy łodzią, pływanie, naturalne baseny i aktywności przybrzeżne na zachodnim wybrzeżu Madery. Z Casa Amani w Arco da Calheta.",
  },
  guideTable: {
    title: "Stół | Casa Amani Madeira | Gdzie Jeść i Pić",
    description:
      "Restauracje, bary, poncha i wino na zachodnim wybrzeżu Madery. Wybrane przez właścicieli Casa Amani.",
  },
  guideCulture: {
    title: "Kultura | Casa Amani Madeira | Sztuka, Muzyka, Festiwale",
    description:
      "Sztuka współczesna, wieczory muzyczne, festiwale i lokalne tradycje w zachodniej Maderze. Z Casa Amani w Arco da Calheta.",
  },
  guidePractical: {
    title: "Praktyczne | Casa Amani Madeira | Poruszanie się",
    description:
      "Poruszanie się, zakupy, apteki i codzienne sprawy na zachodnim wybrzeżu Madery. Z Casa Amani w Arco da Calheta.",
  },
  guideSurf: {
    title:
      "Surfing w Zachodniej Maderze | Przewodnik Casa Amani | Jardim do Mar, Paul do Mar",
    description:
      "Miejsca do surfowania 15 minut od Casa Amani: Jardim do Mar, Paul do Mar, Ponta Pequena. Do czego nadaje się każde, kiedy jechać i jak wygląda tydzień surfingu.",
  },
};

const meta: Record<Locale, Record<PageKey, PageMeta>> = {
  en,
  pt,
  de,
  fr,
  pl,
};

export function getPageMeta(locale: Locale, page: PageKey): PageMeta {
  return meta[locale][page];
}

export default meta;
