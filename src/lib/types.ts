export type Product = {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  category: 'Apparel' | 'Accessories' | 'Footwear';
  rating: number;
  reviews: number;
  stock: number;
  imageUrl: string;
  imageHint: string;
  images: { url: string; hint: string }[];
  tags: string[];
};
