export const locales = ["en", "pt", "de", "fr", "pl"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

const translations = {
  en: {
    landing: {
      title: "casa amani",
      subtitle: "ARCO DA CALHETA, MADEIRA",
      cta: "STAY WITH US",
    },
    header: { menu: "MENU" },
    tagline: {
      heading: "your home, briefly.",
      subheading: "made to be lived in slowly, on Madeira’s sunny side.",
    },
    house: {
      title: "the house",
      features:
        "2 bedrooms · 3 bathrooms · 219 m² · atlantic-facing · heated pool",
      features2:
        "workspaces · fibre wifi · outdoor dining & barbecue · garage for 2 cars",
    },
    rooms: {
      mainBedroom: {
        title: "THE MAIN BEDROOM",
        description:
          "king bed facing the atlantic, with an en-suite bathroom and a desk behind the bed for early work or reading.",
      },
      guestBedroom: {
        title: "THE GUEST BEDROOM",
        description:
          "king bed just off the living space, with a built-in desk and monitor for both rest and remote work.",
      },
      familyBathroom: {
        title: "THE FAMILY BATHROOM",
        description:
          "microcement throughout, with a rain shower and built-in sound. warm, soft, and easy to use day to day.",
      },
      swimmingPool: {
        title: "THE SWIMMING POOL",
        description:
          "private pool set into the terrace, with seating and surrounding plants. used at different times of day.",
      },
      livingSpace: {
        title: "THE LIVING SPACE",
        description:
          "open-plan living with direct access to the terrace and pool, where most of the day moves between inside and out.",
      },
      kitchen: {
        title: "THE KITCHEN",
        description:
          "fully equipped kitchen set just off the living space, used daily from morning coffee to longer meals later on.",
      },
      lowerRoom: {
        title: "THE LOWER ROOM",
        description:
          "downstairs room with two single beds and its own bathroom, more private and comfortable, though without a window.",
      },
      outdoorDining: {
        title: "THE OUTDOOR DINING AREA",
        description:
          "outdoor table and gas barbecue set just beyond the living space. meals tend to move outside without much planning.",
      },
      garage: {
        title: "THE GARAGE",
        description:
          "private garage with space for two cars, directly connected to the house for straightforward arrival and departure.",
      },
    },
    location: {
      heading: "madeira. the pearl of the atlantic.",
      description:
        "The house sits on the hills of Arco da Calheta, on Madeira’s south-west coast. The Atlantic faces it directly. The village is 1 kilometre downhill; Funchal is thirty minutes by car; the airport about fifty.",
    },
  },
  pt: {
    landing: {
      title: "casa amani",
      subtitle: "ARCO DA CALHETA, MADEIRA",
      cta: "FIQUE CONNOSCO",
    },
    header: { menu: "MENU" },
    tagline: {
      heading: "a sua casa, por uns dias.",
      subheading:
        "feita para ser vivida devagar, no lado soalheiro da Madeira.",
    },
    house: {
      title: "a casa",
      features:
        "2 quartos · 3 casas de banho · 219 m² · virada para o Atlântico · piscina aquecida",
      features2:
        "espaços de trabalho · fibra óptica · refeições ao ar livre e churrasqueira · garagem para 2 carros",
    },
    rooms: {
      mainBedroom: {
        title: "O QUARTO PRINCIPAL",
        description:
          "cama king virada para o Atlântico, com casa de banho privativa e uma secretária atrás da cama para trabalhar ou ler.",
      },
      guestBedroom: {
        title: "O QUARTO DE HÓSPEDES",
        description:
          "cama king junto à sala, com secretária e monitor para descanso e trabalho remoto.",
      },
      familyBathroom: {
        title: "A CASA DE BANHO FAMILIAR",
        description:
          "microcimento em todo o espaço, com chuveiro de chuva e som integrado. quente, suave e fácil de usar no dia a dia.",
      },
      swimmingPool: {
        title: "A PISCINA",
        description:
          "piscina privada integrada no terraço, com assentos e plantas ao redor. usada a diferentes horas do dia.",
      },
      livingSpace: {
        title: "A SALA DE ESTAR",
        description:
          "sala de estar aberta com acesso direto ao terraço e à piscina, onde a maior parte do dia se passa entre interior e exterior.",
      },
      kitchen: {
        title: "A COZINHA",
        description:
          "cozinha totalmente equipada junto à sala, usada diariamente desde o café da manhã até refeições mais longas.",
      },
      lowerRoom: {
        title: "O QUARTO INFERIOR",
        description:
          "quarto no piso inferior com duas camas de solteiro e casa de banho própria, mais privado e confortável, embora sem janela.",
      },
      outdoorDining: {
        title: "A ZONA DE REFEIÇÕES EXTERIOR",
        description:
          "mesa exterior e churrasqueira a gás junto à sala. as refeições tendem a passar para fora sem grande planeamento.",
      },
      garage: {
        title: "A GARAGEM",
        description:
          "garagem privada com espaço para dois carros, ligada diretamente à casa para chegadas e partidas simples.",
      },
    },
    location: {
      heading: "madeira. a pérola do atlântico.",
      description:
        "A casa fica nas colinas de Arco da Calheta, na costa sudoeste da Madeira. O Atlântico fica mesmo em frente. A vila está a 1 quilómetro encosta abaixo; o Funchal a trinta minutos de carro; o aeroporto a cerca de cinquenta.",
    },
  },
  de: {
    landing: {
      title: "casa amani",
      subtitle: "ARCO DA CALHETA, MADEIRA",
      cta: "BEI UNS WOHNEN",
    },
    header: { menu: "MENÜ" },
    tagline: {
      heading: "Ihr Zuhause, auf Zeit.",
      subheading:
        "Gemacht, um langsam gelebt zu werden — auf Madeiras Sonnenseite.",
    },
    house: {
      title: "das Haus",
      features:
        "2 Schlafzimmer · 3 Badezimmer · 219 m² · Atlantikblick · beheizbarer Pool",
      features2:
        "Arbeitsplätze · Glasfaser-WLAN · Außenküche mit Grill · Garage für 2 Autos",
    },
    rooms: {
      mainBedroom: {
        title: "DAS HAUPTSCHLAFZIMMER",
        description:
          "Kingsize-Bett mit Atlantikblick, eigenem Bad und einem Schreibtisch hinter dem Bett zum Arbeiten oder Lesen.",
      },
      guestBedroom: {
        title: "DAS GÄSTEZIMMER",
        description:
          "Kingsize-Bett direkt neben dem Wohnbereich, mit Schreibtisch und Monitor für Ruhe und Remote-Arbeit.",
      },
      familyBathroom: {
        title: "DAS FAMILIENBAD",
        description:
          "Mikrozement durchgehend, mit Regendusche und integriertem Sound. Warm, weich und alltagstauglich.",
      },
      swimmingPool: {
        title: "DER POOL",
        description:
          "Privatpool in die Terrasse eingelassen, mit Sitzgelegenheiten und Pflanzen. Zu jeder Tageszeit genutzt.",
      },
      livingSpace: {
        title: "DER WOHNBEREICH",
        description:
          "Offener Wohnbereich mit direktem Zugang zu Terrasse und Pool — der Tag bewegt sich ganz natürlich zwischen drinnen und draußen.",
      },
      kitchen: {
        title: "DIE KÜCHE",
        description:
          "Voll ausgestattete Küche direkt neben dem Wohnbereich — täglich genutzt, vom Morgenkaffee bis zu längeren Mahlzeiten.",
      },
      lowerRoom: {
        title: "DAS UNTERE ZIMMER",
        description:
          "Zimmer im Untergeschoss mit zwei Einzelbetten und eigenem Bad — privater und ruhig, allerdings ohne Fenster.",
      },
      outdoorDining: {
        title: "DER AUSSENESSBEREICH",
        description:
          "Esstisch und Gasgrill direkt hinter dem Wohnbereich. Mahlzeiten verlagern sich ganz von selbst nach draußen.",
      },
      garage: {
        title: "DIE GARAGE",
        description:
          "Privatgarage für zwei Autos, direkt mit dem Haus verbunden — unkompliziertes Ankommen und Abreisen.",
      },
    },
    location: {
      heading: "Madeira. Die Perle des Atlantiks.",
      description:
        "Das Haus liegt auf den Hügeln von Arco da Calheta, an Madeiras Südwestküste. Der Atlantik liegt direkt davor. Das Dorf ist einen Kilometer bergab; Funchal dreißig Autominuten entfernt, der Flughafen etwa fünfzig.",
    },
  },
  fr: {
    landing: {
      title: "casa amani",
      subtitle: "ARCO DA CALHETA, MADEIRA",
      cta: "SÉJOURNEZ CHEZ NOUS",
    },
    header: { menu: "MENU" },
    tagline: {
      heading: "chez vous, le temps d’un séjour.",
      subheading:
        "faite pour être vécue lentement, du côté ensoleillé de Madère.",
    },
    house: {
      title: "la maison",
      features:
        "2 chambres · 3 salles de bain · 219 m² · face à l’Atlantique · piscine chauffée",
      features2:
        "espaces de travail · fibre optique · repas en plein air et barbecue · garage pour 2 voitures",
    },
    rooms: {
      mainBedroom: {
        title: "LA CHAMBRE PRINCIPALE",
        description:
          "lit king face à l’Atlantique, avec salle de bain privative et un bureau derrière le lit pour travailler ou lire.",
      },
      guestBedroom: {
        title: "LA CHAMBRE D’AMIS",
        description:
          "lit king à côté du séjour, avec bureau intégré et écran pour le repos et le télétravail.",
      },
      familyBathroom: {
        title: "LA SALLE DE BAIN FAMILIALE",
        description:
          "microciment intégral, avec douche pluie et son intégré. chaud, doux et facile à vivre au quotidien.",
      },
      swimmingPool: {
        title: "LA PISCINE",
        description:
          "piscine privée intégrée à la terrasse, avec assises et plantes. utilisée à différents moments de la journée.",
      },
      livingSpace: {
        title: "L’ESPACE DE VIE",
        description:
          "séjour ouvert avec accès direct à la terrasse et à la piscine, où la journée oscille entre intérieur et extérieur.",
      },
      kitchen: {
        title: "LA CUISINE",
        description:
          "cuisine entièrement équipée à côté du séjour, utilisée chaque jour du café du matin aux repas plus longs.",
      },
      lowerRoom: {
        title: "LA CHAMBRE DU BAS",
        description:
          "chambre en bas avec deux lits simples et sa propre salle de bain, plus intime et confortable, bien que sans fenêtre.",
      },
      outdoorDining: {
        title: "L’ESPACE REPAS EXTÉRIEUR",
        description:
          "table extérieure et barbecue à gaz juste au-delà du séjour. les repas se déplacent dehors sans trop y penser.",
      },
      garage: {
        title: "LE GARAGE",
        description:
          "garage privé pour deux voitures, directement relié à la maison pour des arrivées et départs simples.",
      },
    },
    location: {
      heading: "madère. la perle de l’atlantique.",
      description:
        "La maison se trouve sur les collines d’Arco da Calheta, sur la côte sud-ouest de Madère. L’Atlantique lui fait face. Le village est à 1 kilomètre en contrebas ; Funchal à trente minutes en voiture ; l’aéroport à cinquante environ.",
    },
  },
  pl: {
    landing: {
      title: "casa amani",
      subtitle: "ARCO DA CALHETA, MADEIRA",
      cta: "ZAMIESZKAJ Z NAMI",
    },
    header: { menu: "MENU" },
    tagline: {
      heading: "Twój dom, na chwilę.",
      subheading:
        "stworzona, by żyć w niej powoli, po słonecznej stronie Madery.",
    },
    house: {
      title: "dom",
      features:
        "2 sypialnie · 3 łazienki · 219 m² · widok na Atlantyk · podgrzewany basen",
      features2:
        "przestrzenie do pracy · światłowód · jadalnia na świeżym powietrzu i grill · garaż na 2 samochody",
    },
    rooms: {
      mainBedroom: {
        title: "GŁÓWNA SYPIALNIA",
        description:
          "łóżko king z widokiem na Atlantyk, z prywatną łazienką i biurkiem za łóżkiem do pracy lub czytania.",
      },
      guestBedroom: {
        title: "POKÓJ GOŚCINNY",
        description:
          "łóżko king przy salonie, z biurkiem i monitorem do odpoczynku i pracy zdalnej.",
      },
      familyBathroom: {
        title: "ŁAZIENKA RODZINNA",
        description:
          "mikrocementowe wykończenie, z prysznicem deszczowym i wbudowanym nagłośnieniem. ciepła, miękka i wygodna na co dzień.",
      },
      swimmingPool: {
        title: "BASEN",
        description:
          "prywatny basen wbudowany w taras, z siedziskami i roślinami. używany o różnych porach dnia.",
      },
      livingSpace: {
        title: "PRZESTRZEŃ DZIENNA",
        description:
          "otwarty salon z bezpośrednim wyjściem na taras i basen, gdzie dzień toczy się pomiędzy wnętrzem a zewnętrzem.",
      },
      kitchen: {
        title: "KUCHNIA",
        description:
          "w pełni wyposażona kuchnia przy salonie, używana codziennie od porannej kawy po dłuższe posiłki.",
      },
      lowerRoom: {
        title: "POKÓJ DOLNY",
        description:
          "pokój na dole z dwoma łóżkami pojedynczymi i własną łazienką, bardziej prywatny i wygodny, choć bez okna.",
      },
      outdoorDining: {
        title: "JADALNIA NA ŚWIEŻYM POWIETRZU",
        description:
          "stół na zewnątrz i grill gazowy tuż za salonem. posiłki przenoszą się na zewnątrz bez większego planowania.",
      },
      garage: {
        title: "GARAŻ",
        description:
          "prywatny garaż na dwa samochody, bezpośrednio połączony z domem dla wygodnego przyjazdu i odjazdu.",
      },
    },
    location: {
      heading: "madera. perła atlantyku.",
      description:
        "Dom stoi na wzgórzach Arco da Calheta, na południowo-zachodnim wybrzeżu Madery. Atlantyk jest tuż naprzeciwko. Wioska leży 1 kilometr w dół; Funchal to trzydzieści minut jazdy samochodem; lotnisko około pięćdziesięciu.",
    },
  },
} as const;

export type Translations = (typeof translations)[Locale];

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}
