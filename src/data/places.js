// Place data used across TodaysCourse and Contents sections.
// tags must match filter keys: "free" | "scenic" | "food" | "tourist-spot" | "budget" | "rainy-day" | "nightlife"

const places = [
  {
    id: 1,
    title: "The High Line",
    description:
      "An elevated park built on historic freight rail line. Unique gardens, art installations, and city views—all completely free.",
    location: "Chelsea, Manhattan",
    tags: ["free", "scenic"],
    image: null,
  },
  {
    id: 2,
    title: "Staten Island Ferry",
    description:
      "Free ferry ride with incredible views of the Statue of Liberty and Manhattan skyline. Runs 24/7 and takes 25 minutes.",
    location: "Lower Manhattan",
    tags: ["free", "scenic", "tourist-spot"],
    image: null,
  },
  {
    id: 3,
    title: "Grand Central Terminal",
    description:
      "Marvel at this Beaux-Arts masterpiece. Visit the whispering gallery and see the famous celestial ceiling for free.",
    location: "Midtown East",
    tags: ["free", "tourist-spot", "rainy-day"],
    image: null,
  },
  {
    id: 4,
    title: "Smorgasburg",
    description:
      "NYC's largest weekly open-air food market with 100+ local vendors every weekend in Brooklyn.",
    location: "Williamsburg, Brooklyn",
    tags: ["food"],
    image: null,
  },
  {
    id: 5,
    title: "Brooklyn Bridge Park",
    description:
      "85 acres of waterfront park with stunning views of Manhattan and the Brooklyn Bridge.",
    location: "Brooklyn Heights",
    tags: ["free", "scenic", "budget"],
    image: null,
  },
  {
    id: 6,
    title: "Jazz at Lincoln Center",
    description:
      "World-class jazz performances in an iconic venue. Free concerts at Dizzy's Club and the atrium.",
    location: "Columbus Circle",
    tags: ["free", "nightlife"],
    image: null,
  },
  {
    id: 7,
    title: "Chelsea Market",
    description:
      "Indoor urban food market and shopping mall in a former Nabisco factory building. Great for a rainy day.",
    location: "Chelsea, Manhattan",
    tags: ["food", "rainy-day"],
    image: null,
  },
  {
    id: 8,
    title: "The Met",
    description:
      "One of the world's greatest art museums with over two million works spanning 5,000 years of history.",
    location: "Upper East Side",
    tags: ["tourist-spot", "rainy-day", "budget"],
    image: null,
  },
  {
    id: 9,
    title: "Bushwick Collective",
    description:
      "An outdoor street art gallery covering several blocks in Bushwick with world-renowned murals.",
    location: "Bushwick, Brooklyn",
    tags: ["free", "scenic"],
    image: null,
  },
];

export default places;
