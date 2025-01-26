import { Step } from "@/types";

export const data: Step[] = [
  {
    stepNumber: 1,
    title: "How many guests are you expecting?",
    description: "Choose the number of people attending your biggest function",
    imageUrl: "/guest1.png",
    priceRanges: [
      { text: "< 100" },
      { text: "100-250" },
      { text: "250-500" },
      { text: "500-1000" },
      { text: "> 1000" },
    ],
  },
  {
    stepNumber: 2,
    title: "What type of venues would you prefer?",
    description: "Select all options that you like.",
    imageUrl: "/guest2.png",
    cards: [
      {
        image: "/five.jpg",
        title: "5 Star Hotels",
        description: "High end amenities and exceptional services",
      },
      {
        image: "/resort.jpg",
        title: "Resorts",
        description: "Picturesque settings with luxury guest accommodations",
      },
      {
        image: "/hall.jpg",
        title: "Convention Hall",
        description: "Indore halls for Grand Weddings",
      },
      {
        image: "/three.jpg",
        title: "3 Star Hotels",
        description: "Affordable venues with good amenities",
      },
      {
        image: "/farm.jpg",
        title: "Farm Houses",
        description: "Green, open spaces for affordable outdoor events",
      },
      {
        image: "/mant.jpg",
        title: "Kalyan Mantaps",
        description: "Indore halls for tranditional Weddings",
      },
    ],
  },
];