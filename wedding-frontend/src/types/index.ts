export interface PriceRange {
  text: string;
}

export interface Card {
  image: string;
  title: string;
  description: string;
}

export interface Step {
  stepNumber: number;
  title: string;
  description: string;
  imageUrl: string;
  priceRanges?: PriceRange[];
  cards?: Card[];
}
