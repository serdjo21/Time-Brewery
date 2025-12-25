export type BeerKey = "3-oclock" | "5-oclock" | "8-oclock" | "10-oclock" | "12-oclock";

export type Beer = {
  key: BeerKey;
  title: string;
  subtitle: string;
  style: string;
  abv: string;
  ibu: string;
  color: string;
  tags: string[];
  heroBg: string;    // background image
  canImage: string;  // can/bottle image
  intro: string;
  profile: { label: string; value: string }[];
  notes: string[];
  pairing: string[];
};

export const beers: Beer[] = [
  {
    key: "3-oclock",
    title: "3 O’Clock",
    subtitle: "Crisp · Golden · Easy",
    style: "Lager",
    abv: "4.9% vol.",
    ibu: "—",
    color: "Golden",
    tags: ["crisp", "smooth", "low bitterness", "grainy malt"],
    heroBg: "/beers/bg-3.jpg",
    canImage: "/beers/3oclock.png",
    intro:
      "A highly drinkable, well-matured golden lager with low bitterness. Pleasant grain-malt aromas and a clean finish—best enjoyed properly chilled after work or with lunch.",
    profile: [
      { label: "Aroma", value: "pleasant grain malt · clean" },
      { label: "Taste", value: "smooth · balanced · low bitterness" },
      { label: "Finish", value: "light · refreshing" },
    ],
    notes: [
      "Unfiltered and unpasteurised light beer.",
      "Ingredients: water, barley malt, yeast, hops (contains allergens).",
    ],
    pairing: ["lunch plates", "light sandwiches", "salads", "easy snacks"],
  },
  {
    key: "5-oclock",
    title: "5 O’Clock",
    subtitle: "Sunny · Soft · Sessionable",
    style: "Blonde Ale",
    abv: "4.0% vol.",
    ibu: "—",
    color: "Sun-gold",
    tags: ["soft body", "tropical hop aroma", "easy-drinking"],
    heroBg: "/beers/bg-5.jpg",
    canImage: "/beers/5oclock.png",
    intro:
      "A bright, sunny beer made for afternoons—lighter, lower in alcohol, with a soft body. Pleasant hop aromatics with a tropical touch blend cleanly with gently roasted malts.",
    profile: [
      { label: "Aroma", value: "tropical hop notes · light malt" },
      { label: "Taste", value: "soft · smooth · lightly malty" },
      { label: "Finish", value: "clean · easy" },
    ],
    notes: [
      "Unfiltered and unpasteurised light beer.",
      "Ingredients: water, barley malt, yeast, hops (contains allergens).",
    ],
    pairing: ["grilled chicken", "fries", "light burgers", "mild cheeses"],
  },
  {
    key: "8-oclock",
    title: "8 O’Clock",
    subtitle: "Evening · Amber-Orange · Sociable",
    style: "Pale Ale",
    abv: "5.5% vol.",
    ibu: "—",
    color: "Glowing orange",
    tags: ["medium bitterness", "caramel", "fruity hop character"],
    heroBg: "/beers/bg-8.jpg",
    canImage: "/hero/beer-8oclock.png",
    intro:
      "An evening beer made for good company—glowing orange in color with medium hop bitterness. Notes of caramel and fruity nuances carry through beautifully from hop cones into the glass.",
    profile: [
      { label: "Aroma", value: "fruity hop · light caramel" },
      { label: "Taste", value: "balanced · medium bitterness" },
      { label: "Finish", value: "medium · pleasantly bitter" },
    ],
    notes: [
      "Unfiltered and unpasteurised light beer.",
      "Ingredients: water, barley malt, yeast, hops (contains allergens).",
    ],
    pairing: ["tacos", "spicy food", "street food", "fried bites"],
  },
  {
    key: "10-oclock",
    title: "10 O’Clock",
    subtitle: "Dark · Chocolate-Caramel · Night",
    style: "Brown Ale",
    abv: "5.6% vol.",
    ibu: "—",
    color: "Deep brown",
    tags: ["roasted malt", "chocolate-caramel", "gentle hop bitterness"],
    heroBg: "/beers/bg-10.jpg",
    canImage: "/beers/10oclock.png",
    intro:
      "When evening turns to night, it’s time for something darker. Malts roasted at higher temperatures bring chocolate-caramel notes, balanced by gentle hop bitterness—harmonious, medium-bodied, and made for atmosphere.",
    profile: [
      { label: "Aroma", value: "chocolate · caramel · roasted malt" },
      { label: "Taste", value: "smooth roast · balanced bitterness" },
      { label: "Finish", value: "medium · malty" },
    ],
    notes: [
      "Unfiltered and unpasteurised dark beer.",
      "Ingredients: water, barley malt, yeast, hops (contains allergens).",
    ],
    pairing: ["smoked meat", "BBQ", "chocolate desserts", "aged cheese"],
  },

  // NOTE: 12 o'clock is NOT listed on /pivo right now.
  // Keep as placeholder or remove the route if you want strict source parity.
  {
    key: "12-oclock",
    title: "12 O’Clock",
    subtitle: "TBD",
    style: "TBD",
    abv: "TBD",
    ibu: "TBD",
    color: "TBD",
    tags: ["TBD"],
    heroBg: "/beers/bg-12.jpg",
    canImage: "/beers/12oclock.png",
    intro:
      "TBD — not present on the current /pivo page. Add official copy/specs here when available.",
    profile: [
      { label: "Aroma", value: "TBD" },
      { label: "Taste", value: "TBD" },
      { label: "Finish", value: "TBD" },
    ],
    notes: ["TBD"],
    pairing: ["TBD"],
  },
];

export const getBeer = (key: BeerKey) => beers.find((b) => b.key === key)!;
