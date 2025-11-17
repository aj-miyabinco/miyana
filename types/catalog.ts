export type FragranceTier = {
  top: string[];
  heart: string[];
  base: string[];
};

export type Product = {
  id: number;
  slug: string;
  name: string;
  price: number;
  size: string;
  fragrancePyramid: FragranceTier;
  mood: string;
  genderNeutral: boolean;
  stock: number;
  imageUrl: string;
  origin: string;
  story: string;
};
