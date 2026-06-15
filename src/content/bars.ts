export interface Bar {
  name: string;
  location: string;
  editorial: string;
  tags?: string[];
}

export const westCoastBars: Bar[] = [
  {
    name: "Pukiki Tiki Bar",
    location: "Estreito da Calheta",
    editorial:
      "The largest rum selection on Madeira, cocktails that are genuinely exceptional, and a story worth knowing. \"Pukiki\" is what Hawaiians called the Madeirans who emigrated in 1878 to work the sugar plantations. The couple who run it have worked hard to bring their dream to life and you feel it. If you walk down, book a taxi back before 9pm.",
    tags: ["cocktails", "rum", "evening"],
  },
  {
    name: "Maktub",
    location: "Paul do Mar",
    editorial:
      "The west-side sunset destination, a minute's walk from Saboramar. A touch louder and more social than its neighbour Bar da Pedra. Drink in hand, ocean horizon, the day closing down.",
    tags: ["sunset", "social", "seafront"],
  },
  {
    name: "Bar da Pedra",
    location: "Paul do Mar",
    editorial:
      "The quieter pick next to Maktub. Same sunset, same ocean, different register. Both within a minute's walk of each other.",
    tags: ["sunset", "quiet", "seafront"],
  },
  {
    name: "Sunspot Cafe",
    location: "Ponta do Sol",
    editorial:
      "Daytime through sunset, casual, seafront. Prego or a burger, beer in hand. The place we've stretched plenty of late afternoons without meaning to.",
    tags: ["casual", "daytime", "sunset"],
  },
  {
    name: "Calhau Beach Club",
    location: "Saccharum Resort, Arco da Calheta",
    editorial:
      "The closest beach club to Casa Amani. Tropical Beats DJ afternoons and Fire Pit dinners on Friday, Saturday, Sunday evenings in summer. Day-passes available even if you're not staying at the hotel.",
    tags: ["beach club", "DJ", "pool"],
  },
];

export const ponchaSpots: Bar[] = [
  {
    name: "Poncha do Emanuel",
    location: "Arco da Calheta",
    editorial:
      "Our neighbourhood spot, a few minutes by car. The signature is poncha de alecrim, a rosemary infusion we haven't found anywhere else. Plain room, locals at the bar, the right amount of late-afternoon weight.",
    tags: ["poncha", "local", "traditional"],
  },
  {
    name: "Poncha do Lombo do Doutor",
    location: "Near Arco da Calheta",
    editorial:
      "A short drive from us, worth stopping on the way back from somewhere else. Adventurous flavour range: passion fruit, tangerine, eucalyptus, others depending on what's in season.",
    tags: ["poncha", "local", "off-road"],
  },
];

export const eventBars: Bar[] = [
  {
    name: "Purple Fridays",
    location: "Ponta do Sol",
    editorial:
      "Where the Madeira digital-nomad community gathers every Friday night. Membership required, but if you're staying long enough that a few Fridays will pass, it pays for itself in introductions. Ponta do Sol is 15 minutes from Casa Amani.",
    tags: ["nomad", "community", "members"],
  },
  {
    name: "Doca do Cavacas",
    location: "Funchal",
    editorial:
      "The Wednesday-night summer party we keep going back to. Drive in, dinner-then-dancing, the kind of evening that runs late. Worth the trip even outside summer for the dinner alone: good seafood, good wine list, right on the water.",
    tags: ["party", "seafood", "summer"],
  },
];
