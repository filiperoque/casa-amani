export interface Restaurant {
  name: string;
  location: string;
  editorial: string;
  tags?: string[];
}

export const westCoastRestaurants: Restaurant[] = [
  {
    name: "Saboramar",
    location: "Paul do Mar",
    editorial:
      "Grilled fish on a seafront terrace, straight from the morning boats. The hospitality here is on a different level. Wine list is small but considered. Show up early in summer for the terrace.",
    tags: ["seafood", "terrace", "sunset"],
  },
  {
    name: "Restaurante Moreia",
    location: "Madalena do Mar",
    editorial:
      "Fresh fish and possibly the best arroz de marisco on the island. Ask about the wine cellar, especially the mainland whites. Family-run, unfussy, the kind of place that gets better the longer you sit.",
    tags: ["seafood", "wine", "long lunch"],
  },
  {
    name: "Maktub",
    location: "Paul do Mar",
    editorial:
      "The end-of-day stop on the west side, a minute's walk from Saboramar. A touch louder and more social than its neighbour Bar da Pedra. Facing the water with the day closing down around you.",
    tags: ["dinner", "drinks", "sunset"],
  },
  {
    name: "Bar da Pedra",
    location: "Paul do Mar",
    editorial:
      "The quieter pick next to Maktub. Same sunset, same ocean, different register. Pair dinner at one with a drink at the other. Nothing fancy, just exactly the right thing at the right hour.",
    tags: ["drinks", "sunset", "quiet"],
  },
  {
    name: "Golden Calheta",
    location: "Marina da Calheta",
    editorial:
      "Convenient and reliable, right on the marina. Good for after a boat trip or a swim. Solid food, decent service, a view of the boats. Lunch is the move.",
    tags: ["marina", "lunch", "casual"],
  },
  {
    name: "Calheta Green",
    location: "Calheta",
    editorial:
      "The espetada spot. Madeiran skewered beef cooked over wood, eaten in the middle of greenery. Good for groups, good for a slower lunch, good if guests want one proper Madeiran meal.",
    tags: ["traditional", "espetada", "groups"],
  },
  {
    name: "Sunspot Cafe",
    location: "Ponta do Sol",
    editorial:
      "Prego em bolo do caco or a burger, seafront, beer in hand, sunset doing its thing. No reservations needed for lunch. The place we end up at when we can't decide on anything else.",
    tags: ["casual", "burgers", "sunset"],
  },
  {
    name: "Razao by Octavio Freitas",
    location: "Socalco Nature Estate, Estreito da Calheta",
    editorial:
      "The special-occasion meal on this side of the island. No menu, no choice. Farm-to-table tasting led by chef Octavio Freitas, formerly of Desarma in Funchal. Reserve well ahead, clear the evening.",
    tags: ["fine dining", "tasting menu", "special occasion"],
  },
];

export const furtherRestaurants: Restaurant[] = [
  {
    name: "Vila do Peixe",
    location: "Camara de Lobos",
    editorial:
      "Our default for special occasions, 30 minutes east. Sister restaurant to Vila da Carne. Works for a quiet dinner for two or a long table for eight. Pair with a walk along the harbour first.",
    tags: ["seafood", "special occasion"],
  },
  {
    name: "Vila da Carne",
    location: "Camara de Lobos",
    editorial:
      "The meat counterpart to Vila do Peixe, same owners, same standard. Camara de Lobos itself is worth the drive in daylight.",
    tags: ["meat", "special occasion"],
  },
];
