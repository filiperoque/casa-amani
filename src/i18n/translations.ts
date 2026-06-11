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
      subheading: "made to be lived in slowly, on Madeira's sunny side.",
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
        title: "THE HEATED POOL",
        description:
          "private heated pool set into the terrace, with seating and surrounding plants. used at different times of day.",
      },
      livingSpace: {
        title: "THE LIVING SPACE",
        description:
          "open-plan living with direct access to the terrace and heated pool, where most of the day moves between inside and out.",
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
        "The house sits on the hills of Arco da Calheta, on Madeira's south-west coast. The Atlantic faces it directly. The village is 1 kilometre downhill; Funchal is thirty minutes by car; the airport about fifty.",
    },
    bookCta: "Book a stay",
    faq: {
      title: "frequently asked questions",
      subtitle:
        "Direct answers about Casa Amani: the house, the location, and what to expect.",
      contact: "Can't find what you need?",
      items: [
        {
          question: "Where exactly is Casa Amani?",
          answer:
            "Casa Amani is in Arco da Calheta, a village on the south-west coast of Madeira island, Portugal. It's about 50 minutes by car (48 km) from Madeira International Airport (FNC), and Calheta beach and marina are 6 km away, roughly a five-minute drive.",
        },
        {
          question: "How far is the airport?",
          answer:
            "Madeira International Airport (FNC) is 48 km from the house, approximately 50 minutes by car. Funchal is about 30 minutes.",
        },
        {
          question: "Is Casa Amani suitable for remote work?",
          answer:
            "Yes. Both bedrooms have a desk, and the guest bedroom has an external monitor that can be connected to a laptop. Free Wi-Fi runs throughout the villa and terrace, and stays of one week or longer are encouraged. Madeira is a recognised digital nomad destination, with the Digital Nomad Village in nearby Ponta do Sol.",
        },
        {
          question: "Is there a pool?",
          answer:
            "Yes. A private 7-metre pool set into the terrace, with the option of heating (available at extra cost). It faces the Atlantic.",
        },
        {
          question: "How many people does Casa Amani sleep?",
          answer:
            "Up to six. The two bedrooms each have a king-size bed (the guest bedroom king can be split into two single mattresses), and two single beds can be set up on the lower level for a fifth and sixth guest.",
        },
        {
          question: "Are pets allowed?",
          answer: "No. Casa Amani does not accept pets.",
        },
        {
          question: "What's the minimum stay?",
          answer:
            "Seven nights. The house is designed for slow stays, weeks rather than weekends.",
        },
        {
          question: "Is there parking?",
          answer:
            "Yes. A private garage with space for two cars, directly connected to the house.",
        },
        {
          question: "What's the Wi-Fi like?",
          answer:
            "Fibre broadband throughout the villa and terrace. Fast enough for video calls, large uploads, and streaming simultaneously.",
        },
        {
          question: "Are there restaurants within walking distance?",
          answer:
            "The nearest bar (Monteiros) and restaurant (Melton's Kitchen) are about 1 km from the house. Calheta's marina restaurants are a 5-minute drive. A car is recommended for most dining.",
        },
        {
          question: "Do I need a car?",
          answer:
            "Yes, for most things. Arco da Calheta is a hillside village; the nearest shops, restaurants, and beaches are a short drive away. Car hire on the island is straightforward and affordable.",
        },
        {
          question: "What's the climate like in winter?",
          answer:
            "Mild. Daytime temperatures on the south-west coast typically range from 17 to 22°C in winter, with more sunshine hours than Funchal. Madeira doesn't have a cold season in the way Northern Europe does. It has a quieter season.",
        },
        {
          question: "Is the house family-friendly?",
          answer:
            "Yes. A cot and high chair are available on request. The pool is unfenced, so children should be supervised. The lower room with two single beds works well for older children or teenagers.",
        },
        {
          question: "Can I work from the house full-time?",
          answer:
            "Yes. That's what it's built for. Dedicated desks in both bedrooms, an external monitor in the guest bedroom, fibre Wi-Fi, and a time zone (GMT/WET) that overlaps comfortably with the UK, most of Europe, and the US East Coast morning.",
        },
        {
          question: "How do I book?",
          answer:
            "We currently take bookings exclusively through [Airbnb](https://www.airbnb.co.uk/rooms/1695506665949683620). You can check availability and reserve there directly, or tap any 'Stay with us' button on this site. Casa Amani is also listed on Booking.com, VRBO, OurMadeira, and Casai through our property manager, but for a consistent experience we direct guests to the Airbnb listing from this site.",
        },
        {
          question: "Is breakfast included?",
          answer:
            "No. Casa Amani is self-catering. The kitchen is fully equipped with an induction hob, oven, dishwasher, and espresso machine. A private chef can be arranged on request.",
        },
        {
          question: "Is there air conditioning and heating?",
          answer:
            "Air conditioning throughout the house, and the same units can be set to heat when needed. There is no separate central heating system, but the south-west coast's mild climate rarely calls for one.",
        },
        {
          question: "What's the nearest supermarket?",
          answer:
            "There is a small local shop in Arco da Calheta. For a full supermarket, Pingo Doce in Calheta is about 5 minutes by car.",
        },
        {
          question: "Are towels and linens provided?",
          answer:
            "Yes. All bed linen, bath towels, and pool towels are provided and changed weekly.",
        },
        {
          question: "What are the check-in and check-out times?",
          answer:
            "Check-in is from 16:00. Check-out is by 11:00. Early check-in or late check-out may be possible depending on availability. Ask when you book.",
        },
      ],
    },
    remoteWork: {
      title: "work from Madeira's quiet side",
      intro:
        "Casa Amani is a private villa with dedicated workspaces, fibre Wi-Fi, and an external monitor, set on the south-west coast of Madeira where the sun is most consistent. Designed for stays of a week or longer, equally suited to focused solo work and working couples.",
      setupTitle: "the setup",
      setup: {
        wifi: {
          label: "Wi-Fi",
          text: "Fibre broadband. Fast enough for video calls, large uploads, and streaming simultaneously.",
        },
        desks: {
          label: "Desks",
          text: "Dedicated desk in both bedrooms. The main bedroom desk faces the Atlantic.",
        },
        monitor: {
          label: "Monitor",
          text: "External monitor in the guest bedroom, ready to connect to your laptop.",
        },
        timezone: {
          label: "Time zone",
          text: "GMT/WET (same as London). Overlaps with most of Europe and the US East Coast morning.",
        },
        quiet: {
          label: "Quiet",
          text: "Arco da Calheta is a hillside village. The kind of quiet that takes a few days to notice and longer to leave.",
        },
        minimumStay: {
          label: "Minimum stay",
          text: "Seven nights. Most remote workers stay two to four weeks.",
        },
      },
      colivingTitle: "private, not shared",
      colivingP1:
        "You may also be considering Outsite (Ponta do Sol) or Homeoffice Madeira (Santo da Serra). They're community-driven shared houses, with group meals, social calendars, and bunk or twin options. Good if you're a solo traveller building a network.",
      colivingP2:
        "Casa Amani is private. The house is yours, the pool is yours, the kitchen is yours. It suits couples, families, and small groups who want a dedicated workspace and the calm of an unshared home, on a longer rhythm than a weekend.",
      islandTitle: "the island for remote work",
      islandP1:
        "Madeira is a recognised digital nomad destination. The Digital Nomad Village in Ponta do Sol (30 minutes east) runs a coworking space and community programme. Funchal has several coworking spaces if you want a change of scene. Portugal's D8 visa makes stays longer than 90 days straightforward for non-EU nationals.",
      islandP2:
        "The climate helps. The south-west coast averages 17 to 24°C year-round, with more sunshine hours than Funchal. You work in the morning, swim after lunch, walk the levadas before dinner. The rhythm settles quickly.",
    },
    thePlace: {
      title: "Arco da Calheta, Madeira",
      intro:
        "Arco da Calheta is a parish in Calheta municipality, on the south-west coast of Madeira island, Portugal. It sits on a hillside above the Atlantic, facing south, the quietest and sunniest stretch of an island that already has one of Europe's mildest climates. The village is small. The light is consistent. The pace is slow by design, not by accident.",
      distancesTitle: "distances",
      distances: [
        ["Calheta beach & marina", "6 km / 5 min"],
        ["Nearest bar & restaurant", "1 km"],
        ["Funchal", "30 min by car"],
        ["Madeira Airport (FNC)", "48 km / 50 min"],
        ["Jardim do Mar (surf)", "8 km / 10 min"],
        ["Paul do Mar", "12 km / 15 min"],
        ["Ponta do Sol", "15 km / 20 min"],
        ["Pico do Arieiro", "55 km / 75 min"],
      ],
      westCoastTitle: "the west coast",
      westCoastP1:
        "Most visitors to Madeira stay in Funchal or along the south-east coast. The west side, from Ribeira Brava to Porto Moniz, is where the island opens up. Fewer hotels, fewer tour buses, longer views. The south-west coast in particular gets more sun hours than anywhere else on the island, sheltered from the north-east trade winds by the central mountain range.",
      westCoastP2:
        "Calheta municipality is the heart of this stretch. Its marina has one of the island's only sand beaches (imported, but pleasant). The village of Jardim do Mar, ten minutes downhill, is a recognised surf break. Paul do Mar, further along the coast, is quieter still. Inland, the levadas (Madeira's network of irrigation channels) thread through laurel forest that's been here since before the island was settled.",
      climateTitle: "the climate",
      climateP1:
        "Madeira's south-west coast is mild year-round. Summer averages 22 to 26°C; winter rarely drops below 16°C. Rain falls mostly on the north side and in the mountains; the south-west is the dry side. The sea temperature ranges from 18°C in winter to 24°C in summer, warm enough for swimming most of the year.",
      climateP2:
        "There is no bad season. The island is greenest in winter, busiest in August, and at its most balanced in April and October. Warm without the crowds, flowering everywhere, the levadas at their fullest.",
      gettingHereTitle: "getting here",
      gettingHereP1:
        "Madeira International Airport (FNC) has direct flights year-round from London, Frankfurt, Amsterdam, Paris, Lisbon, Porto, Warsaw, and a dozen other European cities. Low-cost carriers (easyJet, Ryanair, Wizz Air) and full-service airlines (TAP, British Airways, Condor) both serve the island.",
      gettingHereP2:
        "From the airport, Arco da Calheta is about 50 minutes west along the VR1 motorway. A hire car is recommended. The west side is best explored at your own pace, and the roads are good.",
    },
    privacy: {
      title: "privacy",
      p1: "We use Plausible Analytics, a privacy-respecting tool that helps us understand how this site is used. Plausible does not use cookies, does not store personal data, and does not track you across other sites. Aggregated usage statistics are stored in the European Union.",
      p2: "If you sign up for our email list, we keep your email address until you ask us to remove it. We use it only to email you when we open for direct bookings or have something useful to share. We do not sell, share, or rent your email to anyone.",
      p3: "To request removal of your email or to ask questions, write to",
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
          "cama king virada para o Atlântico, com casa de banho privativa e secretária atrás da cama para trabalhar cedo ou ler.",
      },
      guestBedroom: {
        title: "O QUARTO DE HÓSPEDES",
        description:
          "cama king junto à sala, com secretária e monitor para descanso ou trabalho remoto.",
      },
      familyBathroom: {
        title: "A CASA DE BANHO",
        description:
          "microcimento do chão ao teto, chuveiro de chuva e som ambiente. quente, suave, fácil no dia a dia.",
      },
      swimmingPool: {
        title: "A PISCINA",
        description:
          "piscina privada integrada no terraço, com lugares sentados e plantas à volta. usa-se a horas diferentes do dia.",
      },
      livingSpace: {
        title: "A SALA",
        description:
          "sala aberta com acesso direto ao terraço e à piscina. o dia vai-se passando entre dentro e fora.",
      },
      kitchen: {
        title: "A COZINHA",
        description:
          "cozinha totalmente equipada junto à sala, usada diariamente desde o café da manhã até refeições mais longas.",
      },
      lowerRoom: {
        title: "O QUARTO DE BAIXO",
        description:
          "quarto no piso inferior com duas camas de solteiro e casa de banho própria. mais reservado, embora sem janela.",
      },
      outdoorDining: {
        title: "A ZONA DE REFEIÇÕES",
        description:
          "mesa e churrasqueira a gás junto à sala. as refeições acabam por passar para fora sem se dar por isso.",
      },
      garage: {
        title: "A GARAGEM",
        description:
          "garagem com espaço para dois carros, ligada à casa. chegar e partir sem complicações.",
      },
    },
    location: {
      heading: "madeira. a pérola do atlântico.",
      description:
        "A casa fica nas colinas de Arco da Calheta, na costa sudoeste da Madeira. O Atlântico fica mesmo em frente. A aldeia está a 1 quilómetro encosta abaixo; o Funchal a trinta minutos de carro; o aeroporto a uns cinquenta.",
    },
    bookCta: "Reservar estadia",
    faq: {
      title: "perguntas frequentes",
      subtitle:
        "Respostas diretas sobre a Casa Amani: a casa, a zona e o que esperar.",
      contact: "Não encontra o que procura?",
      items: [
        {
          question: "Onde fica a Casa Amani?",
          answer:
            "Em Arco da Calheta, uma freguesia na costa sudoeste da Madeira. Fica a cerca de 50 minutos de carro (48 km) do aeroporto, e a praia e marina da Calheta estão a 6 km, cinco minutos de carro.",
        },
        {
          question: "A que distância fica o aeroporto?",
          answer:
            "O aeroporto da Madeira fica a 48 km, cerca de 50 minutos de carro. O Funchal fica a 30 minutos.",
        },
        {
          question: "Dá para trabalhar remotamente?",
          answer:
            "Dá. Os dois quartos têm secretária e o quarto de hóspedes tem monitor externo para ligar ao portátil. Há Wi-Fi de fibra em toda a casa e no terraço. Estadias de uma semana ou mais são bem-vindas. A Madeira é destino reconhecido de nómadas digitais, com a Digital Nomad Village em Ponta do Sol, ali perto.",
        },
        {
          question: "Tem piscina?",
          answer:
            "Tem. Piscina privada de 7 metros integrada no terraço, com opção de aquecimento (custo extra). Vista para o Atlântico.",
        },
        {
          question: "Para quantas pessoas?",
          answer:
            "Até seis. Os dois quartos têm cama king-size (a do quarto de hóspedes divide-se em duas individuais) e podem montar-se mais duas camas de solteiro no piso inferior.",
        },
        {
          question: "Aceitam animais?",
          answer: "Não. A Casa Amani não aceita animais de estimação.",
        },
        {
          question: "Qual é a estadia mínima?",
          answer:
            "Sete noites. A casa foi pensada para estadias longas, semanas, não fins de semana.",
        },
        {
          question: "Tem estacionamento?",
          answer:
            "Tem. Garagem com espaço para dois carros, ligada diretamente à casa.",
        },
        {
          question: "Como é o Wi-Fi?",
          answer:
            "Fibra óptica em toda a casa e no terraço. Aguenta videochamadas, uploads grandes e streaming ao mesmo tempo.",
        },
        {
          question: "Há restaurantes perto a pé?",
          answer:
            "O bar mais perto (Monteiros) e o restaurante mais perto (Melton's Kitchen) ficam a cerca de 1 km. Os restaurantes da marina da Calheta ficam a 5 minutos de carro. Para a maioria das refeições fora, convém ter carro.",
        },
        {
          question: "Preciso de carro?",
          answer:
            "Sim, para quase tudo. Arco da Calheta é uma aldeia na encosta; lojas, restaurantes e praias ficam a uma curta distância de carro. Alugar carro na ilha é simples e barato.",
        },
        {
          question: "Como é o clima no inverno?",
          answer:
            "Ameno. Na costa sudoeste as temperaturas andam entre os 17 e os 22°C no inverno, com mais sol do que no Funchal. A Madeira não tem propriamente inverno como no Norte da Europa. Tem uma estação mais calma.",
        },
        {
          question: "É boa para famílias?",
          answer:
            "É. Berço e cadeira alta disponíveis a pedido. A piscina não tem vedação, por isso as crianças precisam de supervisão. O quarto de baixo com duas camas de solteiro funciona bem para miúdos mais velhos.",
        },
        {
          question: "Dá para trabalhar a tempo inteiro?",
          answer:
            "Dá, foi feita para isso. Secretárias nos dois quartos, monitor externo no quarto de hóspedes, fibra óptica e um fuso horário (GMT/WET) que encaixa bem com o Reino Unido, a maior parte da Europa e a manhã da Costa Leste americana.",
        },
        {
          question: "Como reservo?",
          answer:
            "De momento, as reservas são feitas pelo Airbnb. Carregue em qualquer botão \"Fique connosco\" para ver disponibilidade. A Casa Amani também aparece no Booking.com, VRBO, OurMadeira e Casai através do gestor do imóvel, mas para simplificar encaminhamos tudo para o Airbnb a partir deste site.",
        },
        {
          question: "Inclui pequeno-almoço?",
          answer:
            "Não. A casa funciona em regime próprio. A cozinha tem tudo: placa de indução, forno, máquina de lavar loiça e máquina de café. Pode pedir-se chef privado.",
        },
        {
          question: "Tem ar condicionado e aquecimento?",
          answer:
            "Ar condicionado em toda a casa, e as mesmas unidades podem ser reguladas para aquecer quando necessário. Não há sistema de aquecimento central separado, mas o clima ameno da costa sudoeste raramente o exige.",
        },
        {
          question: "E supermercado?",
          answer:
            "Há uma mercearia pequena em Arco da Calheta. O Pingo Doce na Calheta fica a 5 minutos de carro.",
        },
        {
          question: "Toalhas e roupa de cama estão incluídas?",
          answer:
            "Sim. Roupa de cama, toalhas de banho e toalhas de piscina, tudo incluído e mudado semanalmente.",
        },
        {
          question: "Horários de check-in e check-out?",
          answer:
            "Check-in a partir das 16:00. Check-out até às 11:00. Entradas antecipadas ou saídas tardias podem ser possíveis consoante a disponibilidade. Pergunte ao reservar.",
        },
      ],
    },
    remoteWork: {
      title: "trabalhar a partir do lado calmo da Madeira",
      intro:
        "A Casa Amani é uma moradia privada com espaço de trabalho a sério, fibra óptica e monitor externo, na costa sudoeste da Madeira, onde o sol é mais certo. Pensada para estadias de uma semana ou mais. Funciona bem tanto para quem trabalha a solo como para casais em trabalho remoto.",
      setupTitle: "o que temos",
      setup: {
        wifi: {
          label: "Wi-Fi",
          text: "Fibra óptica. Aguenta videochamadas, uploads grandes e streaming tudo ao mesmo tempo.",
        },
        desks: {
          label: "Secretárias",
          text: "Secretária nos dois quartos. A do quarto principal tem vista para o Atlântico.",
        },
        monitor: {
          label: "Monitor",
          text: "Monitor externo no quarto de hóspedes, pronto a ligar ao portátil.",
        },
        timezone: {
          label: "Fuso horário",
          text: "GMT/WET (igual a Londres). Encaixa bem com a Europa e a manhã da Costa Leste americana.",
        },
        quiet: {
          label: "Silêncio",
          text: "Arco da Calheta é uma aldeia na encosta. O tipo de silêncio que demora uns dias a notar e mais tempo a deixar.",
        },
        minimumStay: {
          label: "Estadia mínima",
          text: "Sete noites. A maioria de quem vem trabalhar fica duas a quatro semanas.",
        },
      },
      colivingTitle: "privada, não partilhada",
      colivingP1:
        "Se está a pensar no Outsite (Ponta do Sol) ou no Homeoffice Madeira (Santo da Serra), são casas partilhadas com espírito comunitário. Refeições de grupo, agenda social, beliches ou camas duplas. Bom para quem viaja sozinho e quer criar rede.",
      colivingP2:
        "A Casa Amani é privada. A casa é sua, a piscina é sua, a cozinha é sua. Para casais, famílias e pequenos grupos que querem um espaço de trabalho dedicado e a calma de uma casa não partilhada, num ritmo mais longo do que um fim de semana.",
      islandTitle: "a ilha para trabalho remoto",
      islandP1:
        "A Madeira é destino reconhecido para nómadas digitais. A Digital Nomad Village em Ponta do Sol (30 minutos para leste) tem coworking e programa comunitário. No Funchal há vários espaços de coworking para quem quiser mudar de ares. O visto D8 português facilita estadias de mais de 90 dias para quem vem de fora da UE.",
      islandP2:
        "O clima ajuda. Na costa sudoeste a média ronda os 17 a 24°C o ano todo, com mais horas de sol do que no Funchal. Trabalha-se de manhã, vai-se à água depois do almoço, caminha-se pelas levadas antes do jantar. O ritmo instala-se rápido.",
    },
    thePlace: {
      title: "Arco da Calheta, Madeira",
      intro:
        "Arco da Calheta é uma freguesia da Calheta, na costa sudoeste da Madeira. Fica numa encosta virada a sul, acima do Atlântico, o trecho mais calmo e soalheiro de uma ilha que já tem um dos melhores climas da Europa. A aldeia é pequena. A luz é constante. O ritmo é lento por opção, não por acaso.",
      distancesTitle: "distâncias",
      distances: [
        ["Praia e marina da Calheta", "6 km / 5 min"],
        ["Bar e restaurante mais perto", "1 km"],
        ["Funchal", "30 min de carro"],
        ["Aeroporto da Madeira (FNC)", "48 km / 50 min"],
        ["Jardim do Mar (surf)", "8 km / 10 min"],
        ["Paul do Mar", "12 km / 15 min"],
        ["Ponta do Sol", "15 km / 20 min"],
        ["Pico do Arieiro", "55 km / 75 min"],
      ],
      westCoastTitle: "a costa oeste",
      westCoastP1:
        "A maioria de quem visita a Madeira fica no Funchal ou na costa sudeste. O lado oeste, de Ribeira Brava a Porto Moniz, é onde a ilha se abre. Menos hotéis, menos autocarros de turistas, mais horizonte. A costa sudoeste tem mais horas de sol do que qualquer outro ponto da ilha, protegida dos ventos alísios pela cordilheira central.",
      westCoastP2:
        "A Calheta é o coração deste troço. A marina tem uma das poucas praias de areia da ilha (importada, mas agradável). Jardim do Mar, dez minutos encosta abaixo, é ponto de surf reconhecido. Paul do Mar, mais à frente, é ainda mais sossegado. Para o interior, as levadas (a rede de canais de irrigação da Madeira) cruzam floresta de loureiros anterior ao povoamento da ilha.",
      climateTitle: "o clima",
      climateP1:
        "A costa sudoeste da Madeira é amena o ano todo. No verão a média anda nos 22 a 26°C; no inverno raramente desce dos 16°C. A chuva cai sobretudo no lado norte e nas montanhas; o sudoeste é o lado seco. O mar varia entre 18°C no inverno e 24°C no verão, dá para nadar quase o ano inteiro.",
      climateP2:
        "Não há estação má. A ilha é mais verde no inverno, mais cheia em agosto, mais equilibrada em abril e outubro. Calor sem multidões, flores por todo o lado, as levadas no seu máximo.",
      gettingHereTitle: "como chegar",
      gettingHereP1:
        "O aeroporto da Madeira tem voos diretos o ano todo a partir de Londres, Frankfurt, Amesterdão, Paris, Lisboa, Porto, Varsóvia e mais de uma dezena de cidades europeias. Há low-cost (easyJet, Ryanair, Wizz Air) e companhias regulares (TAP, British Airways, Condor).",
      gettingHereP2:
        "Do aeroporto, Arco da Calheta fica a uns 50 minutos para oeste pela VR1. Convém alugar carro. O lado oeste explora-se melhor ao seu ritmo, e as estradas são boas.",
    },
    privacy: {
      title: "privacidade",
      p1: "Usamos o Plausible Analytics para perceber como o site é utilizado. O Plausible não usa cookies, não guarda dados pessoais e não o segue para outros sites. Os dados agregados ficam armazenados na União Europeia.",
      p2: "Se se inscrever na nossa lista, guardamos o seu email até nos pedir para o apagar. Usamos apenas para avisar quando abrirmos reservas diretas ou tivermos algo útil. Não vendemos nem partilhamos o seu email com ninguém.",
      p3: "Para pedir a remoção do email ou tirar dúvidas, escreva para",
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
        "Gemacht, um langsam gelebt zu werden, auf Madeiras Sonnenseite.",
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
          "Offener Wohnbereich mit direktem Zugang zu Terrasse und Pool, der Tag bewegt sich ganz natürlich zwischen drinnen und draußen.",
      },
      kitchen: {
        title: "DIE KÜCHE",
        description:
          "Voll ausgestattete Küche direkt neben dem Wohnbereich, täglich genutzt vom Morgenkaffee bis zu längeren Mahlzeiten.",
      },
      lowerRoom: {
        title: "DAS UNTERE ZIMMER",
        description:
          "Zimmer im Untergeschoss mit zwei Einzelbetten und eigenem Bad, privater und ruhig, allerdings ohne Fenster.",
      },
      outdoorDining: {
        title: "DER AUSSENESSBEREICH",
        description:
          "Esstisch und Gasgrill direkt hinter dem Wohnbereich. Mahlzeiten verlagern sich ganz von selbst nach draußen.",
      },
      garage: {
        title: "DIE GARAGE",
        description:
          "Privatgarage für zwei Autos, direkt mit dem Haus verbunden, unkompliziertes Ankommen und Abreisen.",
      },
    },
    location: {
      heading: "Madeira. Die Perle des Atlantiks.",
      description:
        "Das Haus liegt auf den Hügeln von Arco da Calheta, an Madeiras Südwestküste. Der Atlantik liegt direkt davor. Das Dorf ist einen Kilometer bergab; Funchal dreißig Autominuten entfernt, der Flughafen etwa fünfzig.",
    },
    bookCta: "Aufenthalt buchen",
    faq: {
      title: "häufig gestellte Fragen",
      subtitle:
        "Direkte Antworten zur Casa Amani: das Haus, die Lage und was Sie erwartet.",
      contact: "Nicht gefunden, was Sie suchen?",
      items: [
        {
          question: "Wo genau liegt die Casa Amani?",
          answer:
            "Die Casa Amani liegt in Arco da Calheta, einem Dorf an der Südwestküste der Insel Madeira, Portugal. Sie ist etwa 50 Autominuten (48 km) vom internationalen Flughafen Madeira (FNC) entfernt. Strand und Jachthafen von Calheta sind 6 km entfernt, etwa fünf Minuten mit dem Auto.",
        },
        {
          question: "Wie weit ist der Flughafen entfernt?",
          answer:
            "Der internationale Flughafen Madeira (FNC) ist 48 km vom Haus entfernt, etwa 50 Minuten mit dem Auto. Funchal ist etwa 30 Minuten entfernt.",
        },
        {
          question: "Ist die Casa Amani für Remote-Arbeit geeignet?",
          answer:
            "Ja. Beide Schlafzimmer haben einen Schreibtisch, und das Gästezimmer hat einen externen Monitor, der an einen Laptop angeschlossen werden kann. Kostenloses WLAN ist in der gesamten Villa und auf der Terrasse verfügbar, und Aufenthalte ab einer Woche sind empfohlen. Madeira ist ein anerkanntes Ziel für digitale Nomaden, mit dem Digital Nomad Village im nahen Ponta do Sol.",
        },
        {
          question: "Gibt es einen Pool?",
          answer:
            "Ja. Ein privater 7-Meter-Pool in die Terrasse eingelassen, mit optionaler Beheizung (gegen Aufpreis). Er blickt auf den Atlantik.",
        },
        {
          question: "Wie viele Personen können in der Casa Amani übernachten?",
          answer:
            "Bis zu sechs. Beide Schlafzimmer haben ein Kingsize-Bett (das Kingsize-Bett im Gästezimmer kann in zwei Einzelmatratzen aufgeteilt werden), und auf der unteren Ebene können zwei Einzelbetten für einen fünften und sechsten Gast aufgestellt werden.",
        },
        {
          question: "Sind Haustiere erlaubt?",
          answer: "Nein. Die Casa Amani akzeptiert keine Haustiere.",
        },
        {
          question: "Wie lang ist der Mindestaufenthalt?",
          answer:
            "Sieben Nächte. Das Haus ist für längere Aufenthalte gedacht, Wochen statt Wochenenden.",
        },
        {
          question: "Gibt es Parkmöglichkeiten?",
          answer:
            "Ja. Eine Privatgarage mit Platz für zwei Autos, direkt mit dem Haus verbunden.",
        },
        {
          question: "Wie ist das WLAN?",
          answer:
            "Glasfaser-Breitband in der gesamten Villa und auf der Terrasse. Schnell genug für Videoanrufe, große Uploads und gleichzeitiges Streaming.",
        },
        {
          question: "Gibt es Restaurants in Gehweite?",
          answer:
            "Die nächste Bar (Monteiros) und das nächste Restaurant (Melton's Kitchen) sind etwa 1 km vom Haus entfernt. Die Restaurants am Jachthafen von Calheta sind 5 Autominuten entfernt. Für die meisten Mahlzeiten empfiehlt sich ein Auto.",
        },
        {
          question: "Brauche ich ein Auto?",
          answer:
            "Ja, für das meiste. Arco da Calheta ist ein Hangdorf; die nächsten Geschäfte, Restaurants und Strände sind eine kurze Autofahrt entfernt. Autovermietung auf der Insel ist unkompliziert und günstig.",
        },
        {
          question: "Wie ist das Klima im Winter?",
          answer:
            "Mild. Die Tagestemperaturen an der Südwestküste liegen im Winter typischerweise zwischen 17 und 22°C, mit mehr Sonnenstunden als in Funchal. Madeira hat keine kalte Jahreszeit wie Nordeuropa. Es hat eine ruhigere Jahreszeit.",
        },
        {
          question: "Ist das Haus familienfreundlich?",
          answer:
            "Ja. Ein Kinderbett und ein Hochstuhl sind auf Anfrage verfügbar. Der Pool ist nicht eingezäunt, Kinder sollten beaufsichtigt werden. Das untere Zimmer mit zwei Einzelbetten eignet sich gut für ältere Kinder oder Jugendliche.",
        },
        {
          question: "Kann ich Vollzeit von hier aus arbeiten?",
          answer:
            "Ja. Dafür ist es gebaut. Schreibtische in beiden Schlafzimmern, ein externer Monitor im Gästezimmer, Glasfaser-WLAN und eine Zeitzone (GMT/WET), die bequem mit dem Vereinigten Königreich, dem größten Teil Europas und dem Morgen der US-Ostküste überlappt.",
        },
        {
          question: "Wie buche ich?",
          answer:
            "Wir nehmen Buchungen derzeit ausschließlich über Airbnb entgegen. Tippen Sie auf einen beliebigen \"Bei uns wohnen\"-Button, um Verfügbarkeit zu prüfen und zu reservieren. Die Casa Amani ist auch auf Booking.com, VRBO, OurMadeira und Casai über unseren Hausverwalter gelistet. Für ein einheitliches Erlebnis leiten wir Gäste jedoch von dieser Seite zum Airbnb-Inserat weiter.",
        },
        {
          question: "Ist Frühstück inbegriffen?",
          answer:
            "Nein. Die Casa Amani ist zur Selbstverpflegung. Die Küche ist komplett ausgestattet mit Induktionsherd, Backofen, Geschirrspüler und Espressomaschine. Ein Privatkoch kann auf Anfrage organisiert werden.",
        },
        {
          question: "Gibt es Klimaanlage und Heizung?",
          answer:
            "Klimaanlage im gesamten Haus, und dieselben Geräte können bei Bedarf auf Heizen gestellt werden. Es gibt kein separates Zentralheizungssystem, aber das milde Klima der Südwestküste macht es selten nötig.",
        },
        {
          question: "Wo ist der nächste Supermarkt?",
          answer:
            "Es gibt einen kleinen Dorfladen in Arco da Calheta. Für einen vollständigen Supermarkt ist der Pingo Doce in Calheta etwa 5 Autominuten entfernt.",
        },
        {
          question: "Werden Handtücher und Bettwäsche gestellt?",
          answer:
            "Ja. Bettwäsche, Badetücher und Pooltücher werden gestellt und wöchentlich gewechselt.",
        },
        {
          question: "Wann sind Check-in und Check-out?",
          answer:
            "Check-in ab 16:00 Uhr. Check-out bis 11:00 Uhr. Früher Check-in oder später Check-out sind je nach Verfügbarkeit möglich. Fragen Sie bei der Buchung.",
        },
      ],
    },
    remoteWork: {
      title: "Arbeiten von Madeiras ruhiger Seite",
      intro:
        "Die Casa Amani ist eine private Villa mit Arbeitsplätzen, Glasfaser-WLAN und einem externen Monitor, an Madeiras Südwestküste, wo die Sonne am beständigsten scheint. Gedacht für Aufenthalte ab einer Woche, gleichermaßen geeignet für konzentriertes Arbeiten allein und für arbeitende Paare.",
      setupTitle: "die Ausstattung",
      setup: {
        wifi: {
          label: "WLAN",
          text: "Glasfaser-Breitband. Schnell genug für Videoanrufe, große Uploads und gleichzeitiges Streaming.",
        },
        desks: {
          label: "Schreibtische",
          text: "Schreibtisch in beiden Schlafzimmern. Der Schreibtisch im Hauptschlafzimmer blickt auf den Atlantik.",
        },
        monitor: {
          label: "Monitor",
          text: "Externer Monitor im Gästezimmer, bereit zum Anschließen an Ihren Laptop.",
        },
        timezone: {
          label: "Zeitzone",
          text: "GMT/WET (wie London). Überlappung mit dem größten Teil Europas und dem Morgen der US-Ostküste.",
        },
        quiet: {
          label: "Ruhe",
          text: "Arco da Calheta ist ein Hangdorf. Die Art von Stille, die man erst nach ein paar Tagen bemerkt und noch länger braucht, um sie zu verlassen.",
        },
        minimumStay: {
          label: "Mindestaufenthalt",
          text: "Sieben Nächte. Die meisten Remote-Arbeiter bleiben zwei bis vier Wochen.",
        },
      },
      colivingTitle: "privat, nicht geteilt",
      colivingP1:
        "Vielleicht erwägen Sie auch Outsite (Ponta do Sol) oder Homeoffice Madeira (Santo da Serra). Das sind gemeinschaftsorientierte Wohngemeinschaften, mit gemeinsamen Mahlzeiten, Sozialprogramm und Mehrbett- oder Zweibettoptionen. Geeignet für Alleinreisende, die ein Netzwerk aufbauen möchten.",
      colivingP2:
        "Die Casa Amani ist privat. Das Haus gehört Ihnen, der Pool gehört Ihnen, die Küche gehört Ihnen. Geeignet für Paare, Familien und kleine Gruppen, die einen eigenen Arbeitsplatz und die Ruhe eines ungeteilten Zuhauses wollen, in einem längeren Rhythmus als ein Wochenende.",
      islandTitle: "die Insel für Remote-Arbeit",
      islandP1:
        "Madeira ist ein anerkanntes Ziel für digitale Nomaden. Das Digital Nomad Village in Ponta do Sol (30 Minuten östlich) betreibt einen Coworking-Space und ein Gemeinschaftsprogramm. Funchal hat mehrere Coworking-Spaces für einen Tapetenwechsel. Portugals D8-Visum macht Aufenthalte über 90 Tage für Nicht-EU-Bürger unkompliziert.",
      islandP2:
        "Das Klima hilft. Die Südwestküste hat im Jahresdurchschnitt 17 bis 24°C, mit mehr Sonnenstunden als Funchal. Morgens arbeiten, nach dem Mittagessen schwimmen, vor dem Abendessen die Levadas entlangwandern. Der Rhythmus stellt sich schnell ein.",
    },
    thePlace: {
      title: "Arco da Calheta, Madeira",
      intro:
        "Arco da Calheta ist eine Gemeinde im Kreis Calheta, an der Südwestküste der Insel Madeira, Portugal. Sie liegt an einem Hang oberhalb des Atlantiks, nach Süden ausgerichtet, der ruhigste und sonnigste Abschnitt einer Insel, die bereits eines der mildesten Klimate Europas hat. Das Dorf ist klein. Das Licht ist beständig. Das Tempo ist langsam, absichtlich, nicht zufällig.",
      distancesTitle: "Entfernungen",
      distances: [
        ["Strand und Jachthafen Calheta", "6 km / 5 min"],
        ["Nächste Bar und Restaurant", "1 km"],
        ["Funchal", "30 min mit dem Auto"],
        ["Flughafen Madeira (FNC)", "48 km / 50 min"],
        ["Jardim do Mar (Surfen)", "8 km / 10 min"],
        ["Paul do Mar", "12 km / 15 min"],
        ["Ponta do Sol", "15 km / 20 min"],
        ["Pico do Arieiro", "55 km / 75 min"],
      ],
      westCoastTitle: "die Westküste",
      westCoastP1:
        "Die meisten Besucher Madeiras übernachten in Funchal oder an der Südostküste. Die Westseite, von Ribeira Brava bis Porto Moniz, ist, wo die Insel sich öffnet. Weniger Hotels, weniger Reisebusse, weiterer Blick. Die Südwestküste hat mehr Sonnenstunden als jeder andere Ort der Insel, geschützt vor den Nordostpassatwinden durch das zentrale Gebirge.",
      westCoastP2:
        "Der Kreis Calheta ist das Herz dieses Abschnitts. Sein Jachthafen hat einen der wenigen Sandstrände der Insel (aufgeschüttet, aber angenehm). Das Dorf Jardim do Mar, zehn Minuten bergab, ist ein anerkannter Surfspot. Paul do Mar, weiter die Küste entlang, ist noch ruhiger. Im Landesinneren durchziehen die Levadas (Madeiras Netz von Bewässerungskanälen) Lorbeerwald, der hier war, bevor die Insel besiedelt wurde.",
      climateTitle: "das Klima",
      climateP1:
        "Madeiras Südwestküste ist das ganze Jahr über mild. Der Sommer hat durchschnittlich 22 bis 26°C; im Winter sinkt die Temperatur selten unter 16°C. Regen fällt hauptsächlich auf der Nordseite und in den Bergen; der Südwesten ist die trockene Seite. Die Wassertemperatur liegt zwischen 18°C im Winter und 24°C im Sommer, warm genug zum Schwimmen während des größten Teils des Jahres.",
      climateP2:
        "Es gibt keine schlechte Jahreszeit. Die Insel ist im Winter am grünsten, im August am belebtesten und im April und Oktober am ausgeglichensten. Warm ohne Menschenmassen, überall blühend, die Levadas auf ihrem höchsten Wasserstand.",
      gettingHereTitle: "Anreise",
      gettingHereP1:
        "Der internationale Flughafen Madeira (FNC) hat ganzjährig Direktflüge ab London, Frankfurt, Amsterdam, Paris, Lissabon, Porto, Warschau und einem Dutzend weiterer europäischer Städte. Billigfluggesellschaften (easyJet, Ryanair, Wizz Air) und Linienfluggesellschaften (TAP, British Airways, Condor) bedienen die Insel.",
      gettingHereP2:
        "Vom Flughafen ist Arco da Calheta etwa 50 Minuten westlich über die Schnellstraße VR1 erreichbar. Ein Mietwagen wird empfohlen. Die Westseite erkundet man am besten im eigenen Tempo, und die Straßen sind gut.",
    },
    privacy: {
      title: "Datenschutz",
      p1: "Wir nutzen Plausible Analytics, ein datenschutzfreundliches Werkzeug, das uns hilft zu verstehen, wie diese Website genutzt wird. Plausible verwendet keine Cookies, speichert keine personenbezogenen Daten und verfolgt Sie nicht auf anderen Websites. Aggregierte Nutzungsstatistiken werden in der Europäischen Union gespeichert.",
      p2: "Wenn Sie sich für unsere E-Mail-Liste anmelden, bewahren wir Ihre E-Mail-Adresse auf, bis Sie uns bitten, sie zu entfernen. Wir verwenden sie ausschließlich, um Ihnen mitzuteilen, wenn wir Direktbuchungen öffnen oder etwas Nützliches zu teilen haben. Wir verkaufen, teilen oder vermieten Ihre E-Mail-Adresse nicht.",
      p3: "Um die Entfernung Ihrer E-Mail-Adresse zu beantragen oder Fragen zu stellen, schreiben Sie an",
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
      heading: "chez vous, le temps d'un séjour.",
      subheading:
        "faite pour être vécue lentement, du côté ensoleillé de Madère.",
    },
    house: {
      title: "la maison",
      features:
        "2 chambres · 3 salles de bain · 219 m² · face à l'Atlantique · piscine chauffée",
      features2:
        "espaces de travail · fibre optique · repas en plein air et barbecue · garage pour 2 voitures",
    },
    rooms: {
      mainBedroom: {
        title: "LA CHAMBRE PRINCIPALE",
        description:
          "lit king face à l'Atlantique, avec salle de bain privative et un bureau derrière le lit pour travailler ou lire.",
      },
      guestBedroom: {
        title: "LA CHAMBRE D'AMIS",
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
        title: "L'ESPACE DE VIE",
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
        title: "L'ESPACE REPAS EXTÉRIEUR",
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
      heading: "madère. la perle de l'atlantique.",
      description:
        "La maison se trouve sur les collines d'Arco da Calheta, sur la côte sud-ouest de Madère. L'Atlantique lui fait face. Le village est à 1 kilomètre en contrebas ; Funchal à trente minutes en voiture ; l'aéroport à cinquante environ.",
    },
    bookCta: "Réserver un séjour",
    faq: {
      title: "questions fréquentes",
      subtitle:
        "Réponses directes sur la Casa Amani : la maison, le lieu et ce à quoi s'attendre.",
      contact: "Vous ne trouvez pas ce que vous cherchez ?",
      items: [
        {
          question: "Où se trouve exactement la Casa Amani ?",
          answer:
            "La Casa Amani se trouve à Arco da Calheta, un village sur la côte sud-ouest de l'île de Madère, au Portugal. Elle est à environ 50 minutes en voiture (48 km) de l'aéroport international de Madère (FNC), et la plage et la marina de Calheta sont à 6 km, environ cinq minutes en voiture.",
        },
        {
          question: "À quelle distance se trouve l'aéroport ?",
          answer:
            "L'aéroport international de Madère (FNC) est à 48 km de la maison, environ 50 minutes en voiture. Funchal est à environ 30 minutes.",
        },
        {
          question: "La Casa Amani est-elle adaptée au télétravail ?",
          answer:
            "Oui. Les deux chambres disposent d'un bureau, et la chambre d'amis possède un écran externe qui peut être connecté à un ordinateur portable. Le Wi-Fi gratuit couvre l'ensemble de la villa et la terrasse, et les séjours d'une semaine ou plus sont encouragés. Madère est une destination reconnue pour les nomades numériques, avec le Digital Nomad Village à Ponta do Sol, à proximité.",
        },
        {
          question: "Y a-t-il une piscine ?",
          answer:
            "Oui. Une piscine privée de 7 mètres intégrée à la terrasse, avec option de chauffage (disponible en supplément). Elle fait face à l'Atlantique.",
        },
        {
          question: "Combien de personnes la Casa Amani peut-elle accueillir ?",
          answer:
            "Jusqu'à six. Les deux chambres disposent chacune d'un lit king-size (le lit king de la chambre d'amis peut être séparé en deux matelas simples), et deux lits simples peuvent être installés au niveau inférieur pour un cinquième et un sixième invité.",
        },
        {
          question: "Les animaux sont-ils acceptés ?",
          answer: "Non. La Casa Amani n'accepte pas les animaux.",
        },
        {
          question: "Quelle est la durée minimale de séjour ?",
          answer:
            "Sept nuits. La maison est conçue pour des séjours longs, des semaines, pas des week-ends.",
        },
        {
          question: "Y a-t-il un parking ?",
          answer:
            "Oui. Un garage privé avec deux places, directement relié à la maison.",
        },
        {
          question: "Comment est le Wi-Fi ?",
          answer:
            "Fibre optique dans toute la villa et sur la terrasse. Assez rapide pour les appels vidéo, les téléchargements volumineux et le streaming simultané.",
        },
        {
          question: "Y a-t-il des restaurants à distance de marche ?",
          answer:
            "Le bar le plus proche (Monteiros) et le restaurant le plus proche (Melton's Kitchen) sont à environ 1 km de la maison. Les restaurants de la marina de Calheta sont à 5 minutes en voiture. Une voiture est recommandée pour la plupart des repas.",
        },
        {
          question: "Ai-je besoin d'une voiture ?",
          answer:
            "Oui, pour la plupart des choses. Arco da Calheta est un village à flanc de colline ; les commerces, restaurants et plages les plus proches sont à quelques minutes en voiture. La location de voiture sur l'île est simple et abordable.",
        },
        {
          question: "Quel est le climat en hiver ?",
          answer:
            "Doux. Les températures diurnes sur la côte sud-ouest varient généralement entre 17 et 22°C en hiver, avec plus d'heures d'ensoleillement qu'à Funchal. Madère n'a pas de saison froide comme le nord de l'Europe. Elle a une saison plus calme.",
        },
        {
          question: "La maison convient-elle aux familles ?",
          answer:
            "Oui. Un lit bébé et une chaise haute sont disponibles sur demande. La piscine n'est pas clôturée, les enfants doivent donc être surveillés. La chambre du bas avec deux lits simples convient bien aux enfants plus grands ou aux adolescents.",
        },
        {
          question: "Puis-je travailler à temps plein depuis la maison ?",
          answer:
            "Oui. C'est sa raison d'être. Bureaux dans les deux chambres, un écran externe dans la chambre d'amis, Wi-Fi fibre, et un fuseau horaire (GMT/WET) qui chevauche le Royaume-Uni, la majeure partie de l'Europe et le matin de la côte est des États-Unis.",
        },
        {
          question: "Comment réserver ?",
          answer:
            "Nous acceptons actuellement les réservations exclusivement via Airbnb. Appuyez sur n'importe quel bouton \"Séjournez chez nous\" pour vérifier la disponibilité et réserver. La Casa Amani est également référencée sur Booking.com, VRBO, OurMadeira et Casai via notre gestionnaire de propriété, mais pour une expérience cohérente, nous orientons les clients vers l'annonce Airbnb depuis ce site.",
        },
        {
          question: "Le petit-déjeuner est-il inclus ?",
          answer:
            "Non. La Casa Amani est en formule libre. La cuisine est entièrement équipée avec plaque à induction, four, lave-vaisselle et machine à expresso. Un chef privé peut être organisé sur demande.",
        },
        {
          question: "Y a-t-il la climatisation et le chauffage ?",
          answer:
            "Climatisation dans toute la maison, et les mêmes unités peuvent être réglées en mode chauffage si nécessaire. Il n'y a pas de système de chauffage central séparé, mais le climat doux de la côte sud-ouest en justifie rarement le besoin.",
        },
        {
          question: "Où est le supermarché le plus proche ?",
          answer:
            "Il y a une petite épicerie à Arco da Calheta. Pour un supermarché complet, le Pingo Doce à Calheta est à environ 5 minutes en voiture.",
        },
        {
          question: "Les serviettes et le linge de lit sont-ils fournis ?",
          answer:
            "Oui. Tout le linge de lit, les serviettes de bain et les serviettes de piscine sont fournis et changés chaque semaine.",
        },
        {
          question: "Quels sont les horaires d'arrivée et de départ ?",
          answer:
            "L'arrivée se fait à partir de 16h00. Le départ est avant 11h00. Une arrivée anticipée ou un départ tardif peuvent être possibles selon la disponibilité. Demandez lors de la réservation.",
        },
      ],
    },
    remoteWork: {
      title: "travailler depuis le côté calme de Madère",
      intro:
        "La Casa Amani est une villa privée avec des espaces de travail dédiés, le Wi-Fi fibre et un écran externe, sur la côte sud-ouest de Madère où le soleil est le plus constant. Conçue pour des séjours d'une semaine ou plus, aussi adaptée au travail concentré en solo qu'aux couples qui travaillent à distance.",
      setupTitle: "l'équipement",
      setup: {
        wifi: {
          label: "Wi-Fi",
          text: "Fibre optique. Assez rapide pour les appels vidéo, les téléchargements volumineux et le streaming simultané.",
        },
        desks: {
          label: "Bureaux",
          text: "Bureau dédié dans les deux chambres. Le bureau de la chambre principale fait face à l'Atlantique.",
        },
        monitor: {
          label: "Écran",
          text: "Écran externe dans la chambre d'amis, prêt à être connecté à votre ordinateur portable.",
        },
        timezone: {
          label: "Fuseau horaire",
          text: "GMT/WET (comme Londres). Chevauche la majeure partie de l'Europe et le matin de la côte est des États-Unis.",
        },
        quiet: {
          label: "Calme",
          text: "Arco da Calheta est un village à flanc de colline. Le genre de calme qu'il faut quelques jours pour remarquer et plus longtemps pour quitter.",
        },
        minimumStay: {
          label: "Séjour minimum",
          text: "Sept nuits. La plupart des télétravailleurs restent deux à quatre semaines.",
        },
      },
      colivingTitle: "privée, pas partagée",
      colivingP1:
        "Vous envisagez peut-être aussi Outsite (Ponta do Sol) ou Homeoffice Madeira (Santo da Serra). Ce sont des maisons partagées axées sur la communauté, avec repas de groupe, calendriers sociaux et lits superposés ou jumeaux. Adapté aux voyageurs solo qui cherchent à se créer un réseau.",
      colivingP2:
        "La Casa Amani est privée. La maison est à vous, la piscine est à vous, la cuisine est à vous. Elle convient aux couples, familles et petits groupes qui veulent un espace de travail dédié et le calme d'une maison non partagée, sur un rythme plus long qu'un week-end.",
      islandTitle: "l'île pour le télétravail",
      islandP1:
        "Madère est une destination reconnue pour les nomades numériques. Le Digital Nomad Village à Ponta do Sol (30 minutes à l'est) propose un espace de coworking et un programme communautaire. Funchal dispose de plusieurs espaces de coworking pour changer de décor. Le visa D8 du Portugal facilite les séjours de plus de 90 jours pour les ressortissants hors UE.",
      islandP2:
        "Le climat aide. La côte sud-ouest affiche en moyenne 17 à 24°C toute l'année, avec plus d'heures de soleil qu'à Funchal. On travaille le matin, on nage après le déjeuner, on parcourt les levadas avant le dîner. Le rythme s'installe vite.",
    },
    thePlace: {
      title: "Arco da Calheta, Madeira",
      intro:
        "Arco da Calheta est une paroisse de la municipalité de Calheta, sur la côte sud-ouest de l'île de Madère, au Portugal. Elle se situe à flanc de colline au-dessus de l'Atlantique, orientée sud, le tronçon le plus calme et le plus ensoleillé d'une île qui possède déjà l'un des climats les plus doux d'Europe. Le village est petit. La lumière est constante. Le rythme est lent par choix, pas par hasard.",
      distancesTitle: "distances",
      distances: [
        ["Plage et marina de Calheta", "6 km / 5 min"],
        ["Bar et restaurant les plus proches", "1 km"],
        ["Funchal", "30 min en voiture"],
        ["Aéroport de Madère (FNC)", "48 km / 50 min"],
        ["Jardim do Mar (surf)", "8 km / 10 min"],
        ["Paul do Mar", "12 km / 15 min"],
        ["Ponta do Sol", "15 km / 20 min"],
        ["Pico do Arieiro", "55 km / 75 min"],
      ],
      westCoastTitle: "la côte ouest",
      westCoastP1:
        "La plupart des visiteurs de Madère séjournent à Funchal ou le long de la côte sud-est. Le côté ouest, de Ribeira Brava à Porto Moniz, est là où l'île s'ouvre. Moins d'hôtels, moins de cars touristiques, des vues plus longues. La côte sud-ouest en particulier bénéficie de plus d'heures de soleil que partout ailleurs sur l'île, protégée des alizés du nord-est par la chaîne de montagnes centrale.",
      westCoastP2:
        "La municipalité de Calheta est le cœur de ce tronçon. Sa marina possède l'une des rares plages de sable de l'île (importé, mais agréable). Le village de Jardim do Mar, dix minutes en contrebas, est un spot de surf reconnu. Paul do Mar, plus loin sur la côte, est plus calme encore. À l'intérieur des terres, les levadas (le réseau de canaux d'irrigation de Madère) traversent une forêt de lauriers présente depuis avant le peuplement de l'île.",
      climateTitle: "le climat",
      climateP1:
        "La côte sud-ouest de Madère est douce toute l'année. L'été affiche en moyenne 22 à 26°C ; l'hiver descend rarement sous 16°C. La pluie tombe surtout au nord et en montagne ; le sud-ouest est le côté sec. La température de la mer varie de 18°C en hiver à 24°C en été, assez chaude pour se baigner la majeure partie de l'année.",
      climateP2:
        "Il n'y a pas de mauvaise saison. L'île est la plus verte en hiver, la plus fréquentée en août, et la plus équilibrée en avril et octobre. Chaleur sans les foules, floraison partout, les levadas à leur débit maximal.",
      gettingHereTitle: "comment venir",
      gettingHereP1:
        "L'aéroport international de Madère (FNC) propose des vols directs toute l'année depuis Londres, Francfort, Amsterdam, Paris, Lisbonne, Porto, Varsovie et une dizaine d'autres villes européennes. Compagnies low-cost (easyJet, Ryanair, Wizz Air) et compagnies régulières (TAP, British Airways, Condor) desservent l'île.",
      gettingHereP2:
        "Depuis l'aéroport, Arco da Calheta est à environ 50 minutes vers l'ouest par l'autoroute VR1. La location de voiture est recommandée. Le côté ouest se découvre mieux à votre rythme, et les routes sont bonnes.",
    },
    privacy: {
      title: "confidentialité",
      p1: "Nous utilisons Plausible Analytics, un outil respectueux de la vie privée qui nous aide à comprendre comment ce site est utilisé. Plausible n'utilise pas de cookies, ne stocke pas de données personnelles et ne vous suit pas sur d'autres sites. Les statistiques d'utilisation agrégées sont stockées dans l'Union européenne.",
      p2: "Si vous vous inscrivez à notre liste de diffusion, nous conservons votre adresse e-mail jusqu'à ce que vous nous demandiez de la supprimer. Nous l'utilisons uniquement pour vous contacter lorsque nous ouvrons les réservations directes ou avons quelque chose d'utile à partager. Nous ne vendons, ne partageons ni ne louons votre adresse e-mail.",
      p3: "Pour demander la suppression de votre adresse e-mail ou poser des questions, écrivez à",
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
    bookCta: "Zarezerwuj pobyt",
    faq: {
      title: "najczęściej zadawane pytania",
      subtitle:
        "Bezpośrednie odpowiedzi o Casa Amani: dom, lokalizacja i czego się spodziewać.",
      contact: "Nie znalazłeś tego, czego szukasz?",
      items: [
        {
          question: "Gdzie dokładnie znajduje się Casa Amani?",
          answer:
            "Casa Amani znajduje się w Arco da Calheta, wiosce na południowo-zachodnim wybrzeżu wyspy Madera, Portugalia. Jest to około 50 minut jazdy samochodem (48 km) od międzynarodowego lotniska na Maderze (FNC), a plaża i marina w Calheta są oddalone o 6 km, około pięciu minut jazdy.",
        },
        {
          question: "Jak daleko jest lotnisko?",
          answer:
            "Międzynarodowe lotnisko na Maderze (FNC) jest oddalone od domu o 48 km, około 50 minut jazdy samochodem. Funchal jest w odległości około 30 minut.",
        },
        {
          question: "Czy Casa Amani nadaje się do pracy zdalnej?",
          answer:
            "Tak. Obie sypialnie mają biurko, a pokój gościnny ma zewnętrzny monitor, który można podłączyć do laptopa. Bezpłatne Wi-Fi obejmuje całą willę i taras, a pobyty od tygodnia wzwyż są zalecane. Madera jest uznanym celem dla cyfrowych nomadów, z Digital Nomad Village w pobliskiej Ponta do Sol.",
        },
        {
          question: "Czy jest basen?",
          answer:
            "Tak. Prywatny 7-metrowy basen wbudowany w taras, z opcją ogrzewania (dostępny za dodatkową opłatą). Z widokiem na Atlantyk.",
        },
        {
          question: "Ile osób może nocować w Casa Amani?",
          answer:
            "Do sześciu. Obie sypialnie mają łóżko king-size (łóżko king w pokoju gościnnym można rozdzielić na dwa pojedyncze materace), a na niższym poziomie można ustawić dwa łóżka pojedyncze dla piątego i szóstego gościa.",
        },
        {
          question: "Czy zwierzęta są dozwolone?",
          answer: "Nie. Casa Amani nie przyjmuje zwierząt.",
        },
        {
          question: "Jaki jest minimalny pobyt?",
          answer:
            "Siedem nocy. Dom jest zaprojektowany na dłuższe pobyty, tygodnie, nie weekendy.",
        },
        {
          question: "Czy jest parking?",
          answer:
            "Tak. Prywatny garaż na dwa samochody, bezpośrednio połączony z domem.",
        },
        {
          question: "Jakie jest Wi-Fi?",
          answer:
            "Światłowód w całej willi i na tarasie. Wystarczająco szybkie na wideorozmowy, duże przesyłanie plików i jednoczesne streamowanie.",
        },
        {
          question: "Czy w pobliżu są restauracje w zasięgu spaceru?",
          answer:
            "Najbliższy bar (Monteiros) i restauracja (Melton's Kitchen) są w odległości około 1 km od domu. Restauracje przy marinie w Calheta są 5 minut jazdy samochodem. Do większości posiłków poza domem zaleca się samochód.",
        },
        {
          question: "Czy potrzebuję samochodu?",
          answer:
            "Tak, do większości rzeczy. Arco da Calheta to wioska na zboczu wzgórza; najbliższe sklepy, restauracje i plaże są w niewielkiej odległości samochodem. Wynajem samochodu na wyspie jest prosty i przystępny cenowo.",
        },
        {
          question: "Jaki jest klimat zimą?",
          answer:
            "Łagodny. Dzienne temperatury na południowo-zachodnim wybrzeżu wynoszą zwykle od 17 do 22°C zimą, z większą liczbą godzin słonecznych niż w Funchal. Madera nie ma zimnej pory roku w rozumieniu Europy Północnej. Ma spokojniejszą porę roku.",
        },
        {
          question: "Czy dom jest przyjazny rodzinom?",
          answer:
            "Tak. Łóżeczko dziecięce i krzesłeczko do karmienia dostępne na życzenie. Basen nie jest ogrodzony, więc dzieci powinny być pod nadzorem. Pokój dolny z dwoma łóżkami pojedynczymi sprawdza się dobrze dla starszych dzieci lub nastolatków.",
        },
        {
          question: "Czy mogę pracować z domu na pełen etat?",
          answer:
            "Tak. Do tego jest stworzony. Biurka w obu sypialniach, zewnętrzny monitor w pokoju gościnnym, Wi-Fi światłowodowe i strefa czasowa (GMT/WET), która wygodnie pokrywa się z Wielką Brytanią, większością Europy i porankiem Wschodniego Wybrzeża USA.",
        },
        {
          question: "Jak zarezerwować?",
          answer:
            "Obecnie przyjmujemy rezerwacje wyłącznie przez Airbnb. Kliknij dowolny przycisk \"Zamieszkaj z nami\", aby sprawdzić dostępność i zarezerwować. Casa Amani jest również wymieniona na Booking.com, VRBO, OurMadeira i Casai za pośrednictwem naszego zarządcy nieruchomości, ale dla spójnego doświadczenia kierujemy gości do ogłoszenia na Airbnb z tej strony.",
        },
        {
          question: "Czy śniadanie jest wliczone?",
          answer:
            "Nie. Casa Amani oferuje wyłącznie nocleg. Kuchnia jest w pełni wyposażona w płytę indukcyjną, piekarnik, zmywarkę i ekspres do kawy. Prywatny szef kuchni może być zorganizowany na życzenie.",
        },
        {
          question: "Czy jest klimatyzacja i ogrzewanie?",
          answer:
            "Klimatyzacja w całym domu, a te same jednostki mogą pracować w trybie grzania w razie potrzeby. Nie ma osobnego systemu centralnego ogrzewania, ale łagodny klimat południowo-zachodniego wybrzeża rzadko go wymaga.",
        },
        {
          question: "Gdzie jest najbliższy supermarket?",
          answer:
            "W Arco da Calheta jest mały sklep lokalny. Pełny supermarket Pingo Doce w Calheta jest w odległości około 5 minut jazdy samochodem.",
        },
        {
          question: "Czy ręczniki i pościel są zapewnione?",
          answer:
            "Tak. Cała pościel, ręczniki kąpielowe i ręczniki basenowe są zapewnione i zmieniane co tydzień.",
        },
        {
          question: "Jakie są godziny zameldowania i wymeldowania?",
          answer:
            "Zameldowanie od 16:00. Wymeldowanie do 11:00. Wcześniejsze zameldowanie lub późniejsze wymeldowanie może być możliwe w zależności od dostępności. Zapytaj przy rezerwacji.",
        },
      ],
    },
    remoteWork: {
      title: "praca z cichej strony Madery",
      intro:
        "Casa Amani to prywatna willa z dedykowanymi przestrzeniami do pracy, Wi-Fi światłowodowym i zewnętrznym monitorem, na południowo-zachodnim wybrzeżu Madery, gdzie słońce jest najbardziej stałe. Zaprojektowana na pobyty od tygodnia wzwyż, równie odpowiednia do skupionej pracy w pojedynkę, jak i dla pracujących par.",
      setupTitle: "wyposażenie",
      setup: {
        wifi: {
          label: "Wi-Fi",
          text: "Światłowód. Wystarczająco szybkie na wideorozmowy, duże przesyłanie plików i jednoczesne streamowanie.",
        },
        desks: {
          label: "Biurka",
          text: "Dedykowane biurko w obu sypialniach. Biurko w głównej sypialni z widokiem na Atlantyk.",
        },
        monitor: {
          label: "Monitor",
          text: "Zewnętrzny monitor w pokoju gościnnym, gotowy do podłączenia laptopa.",
        },
        timezone: {
          label: "Strefa czasowa",
          text: "GMT/WET (jak Londyn). Pokrywa się z większością Europy i porankiem Wschodniego Wybrzeża USA.",
        },
        quiet: {
          label: "Cisza",
          text: "Arco da Calheta to wioska na zboczu. Taka cisza, którą zauważasz po kilku dniach, a opuszczasz jeszcze dłużej.",
        },
        minimumStay: {
          label: "Minimalny pobyt",
          text: "Siedem nocy. Większość pracowników zdalnych zostaje od dwóch do czterech tygodni.",
        },
      },
      colivingTitle: "prywatna, nie dzielona",
      colivingP1:
        "Być może rozważasz również Outsite (Ponta do Sol) lub Homeoffice Madeira (Santo da Serra). To domy dzielone z duchem społeczności, ze wspólnymi posiłkami, kalendarzami towarzyskimi i opcjami łóżek piętrowych lub dwuosobowych. Dobre dla samotnych podróżnych budujących sieć kontaktów.",
      colivingP2:
        "Casa Amani jest prywatna. Dom jest twój, basen jest twój, kuchnia jest twoja. Odpowiednia dla par, rodzin i małych grup, które chcą dedykowanej przestrzeni do pracy i spokoju niedzielonego domu, w dłuższym rytmie niż weekend.",
      islandTitle: "wyspa do pracy zdalnej",
      islandP1:
        "Madera jest uznanym celem dla cyfrowych nomadów. Digital Nomad Village w Ponta do Sol (30 minut na wschód) prowadzi przestrzeń coworkingową i program społeczności. Funchal ma kilka przestrzeni coworkingowych na zmianę scenerii. Wiza D8 Portugalii ułatwia pobyty dłuższe niż 90 dni obywatelom spoza UE.",
      islandP2:
        "Klimat pomaga. Południowo-zachodnie wybrzeże ma średnio od 17 do 24°C przez cały rok, z większą liczbą godzin słonecznych niż Funchal. Rano się pracuje, po obiedzie się pływa, przed kolacją spaceruje się po lewadach. Rytm ustala się szybko.",
    },
    thePlace: {
      title: "Arco da Calheta, Madera",
      intro:
        "Arco da Calheta to parafia w gminie Calheta, na południowo-zachodnim wybrzeżu wyspy Madera, Portugalia. Leży na zboczu wzgórza nad Atlantykiem, zwrócona na południe, najspokojniejszy i najsłoneczniejszy odcinek wyspy, która i tak ma jeden z najłagodniejszych klimatów w Europie. Wioska jest mała. Światło jest stałe. Tempo jest wolne z zamysłu, nie z przypadku.",
      distancesTitle: "odległości",
      distances: [
        ["Plaża i marina Calheta", "6 km / 5 min"],
        ["Najbliższy bar i restauracja", "1 km"],
        ["Funchal", "30 min samochodem"],
        ["Lotnisko na Maderze (FNC)", "48 km / 50 min"],
        ["Jardim do Mar (surfing)", "8 km / 10 min"],
        ["Paul do Mar", "12 km / 15 min"],
        ["Ponta do Sol", "15 km / 20 min"],
        ["Pico do Arieiro", "55 km / 75 min"],
      ],
      westCoastTitle: "zachodnie wybrzeże",
      westCoastP1:
        "Większość odwiedzających Maderę nocuje w Funchal lub wzdłuż południowo-wschodniego wybrzeża. Zachodnia strona, od Ribeira Brava do Porto Moniz, to miejsce, gdzie wyspa się otwiera. Mniej hoteli, mniej autokarów turystycznych, dłuższe widoki. Południowo-zachodnie wybrzeże ma szczególnie więcej godzin słonecznych niż jakiekolwiek inne miejsce na wyspie, osłonięte od północno-wschodnich wiatrów pasatowych przez centralny łańcuch górski.",
      westCoastP2:
        "Gmina Calheta jest sercem tego odcinka. Jej marina ma jedną z nielicznych piaszczystych plaż na wyspie (nawieziony piasek, ale przyjemna). Wioska Jardim do Mar, dziesięć minut w dół zbocza, jest uznanym miejscem do surfowania. Paul do Mar, dalej wzdłuż wybrzeża, jest jeszcze spokojniejsze. W głębi lądu lewady (sieć kanałów nawadniających Madery) prowadzą przez laurowy las, który istniał tu, zanim wyspa została zasiedlona.",
      climateTitle: "klimat",
      climateP1:
        "Południowo-zachodnie wybrzeże Madery jest łagodne przez cały rok. Lato ma średnio od 22 do 26°C; zima rzadko spada poniżej 16°C. Deszcz pada głównie po północnej stronie i w górach; południowy zachód to strona sucha. Temperatura morza waha się od 18°C zimą do 24°C latem, wystarczająco ciepło do pływania przez większość roku.",
      climateP2:
        "Nie ma złej pory roku. Wyspa jest najzieleńsza zimą, najbardziej zatłoczona w sierpniu i najbardziej zrównoważona w kwietniu i październiku. Ciepło bez tłumów, kwitnienie wszędzie, lewady przy najwyższym stanie wody.",
      gettingHereTitle: "jak dotrzeć",
      gettingHereP1:
        "Międzynarodowe lotnisko na Maderze (FNC) ma bezpośrednie loty przez cały rok z Londynu, Frankfurtu, Amsterdamu, Paryża, Lizbony, Porto, Warszawy i kilkunastu innych miast europejskich. Tanie linie (easyJet, Ryanair, Wizz Air) i linie tradycyjne (TAP, British Airways, Condor) obsługują wyspę.",
      gettingHereP2:
        "Z lotniska Arco da Calheta jest w odległości około 50 minut na zachód autostradą VR1. Zaleca się wynajem samochodu. Zachodnią stronę najlepiej zwiedzać we własnym tempie, a drogi są dobre.",
    },
    privacy: {
      title: "prywatność",
      p1: "Korzystamy z Plausible Analytics, narzędzia szanującego prywatność, które pomaga nam zrozumieć, jak ta strona jest używana. Plausible nie używa plików cookie, nie przechowuje danych osobowych i nie śledzi Cię na innych stronach. Zagregowane statystyki użytkowania są przechowywane w Unii Europejskiej.",
      p2: "Jeśli zapiszesz się na naszą listę mailową, przechowujemy Twój adres e-mail do momentu, gdy poprosisz o jego usunięcie. Używamy go wyłącznie, aby poinformować Cię, gdy otworzymy rezerwacje bezpośrednie lub będziemy mieć coś przydatnego do przekazania. Nie sprzedajemy, nie udostępniamy ani nie wynajmujemy Twojego adresu e-mail nikomu.",
      p3: "Aby poprosić o usunięcie adresu e-mail lub zadać pytania, napisz do",
    },
  },
} as const;

export type Translations = (typeof translations)[Locale];

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}
