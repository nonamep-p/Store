import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  images?: { url: string; hint: string }[];
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;
