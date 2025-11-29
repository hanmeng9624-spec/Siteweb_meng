import { Artwork, ArtCategory } from './types';

export const ARTWORKS: Artwork[] = [
  // TATTOOS
  {
    id: 't1',
    title: "Melting Clocks on Shoulder",
    category: ArtCategory.TATTOO,
    imageUrl: "https://picsum.photos/600/800?random=1",
    description: "A Dali-inspired piece focusing on the fluidity of time, rendered in soft blues."
  },
  {
    id: 't2',
    title: "The Starry Sleeve",
    category: ArtCategory.TATTOO,
    imageUrl: "https://picsum.photos/500/700?random=2",
    description: "Impressionist strokes creating a night sky wrapping around the forearm."
  },
  {
    id: 't3',
    title: "Floral Anatomy",
    category: ArtCategory.TATTOO,
    imageUrl: "https://picsum.photos/600/600?random=3",
    description: "Surreal fusion of blooming peonies and human bone structure."
  },
  {
    id: 't4',
    title: "Floating Eye",
    category: ArtCategory.TATTOO,
    imageUrl: "https://picsum.photos/500/800?random=4",
    description: "A realistic eye floating in a cloud of pastel geometry."
  },
  
  // ILLUSTRATIONS
  {
    id: 'i1',
    title: "Dreams of Fish",
    category: ArtCategory.ILLUSTRATION,
    imageUrl: "https://picsum.photos/800/600?random=5",
    description: "Digital painting. Giant koi fish swimming through a city skyline."
  },
  {
    id: 'i2',
    title: "Portrait of Silence",
    category: ArtCategory.ILLUSTRATION,
    imageUrl: "https://picsum.photos/700/900?random=6",
    description: "Mixed media. A faceless portrait dissolved into butterflies."
  },
  {
    id: 'i3',
    title: "The Blue Room",
    category: ArtCategory.ILLUSTRATION,
    imageUrl: "https://picsum.photos/800/800?random=7",
    description: "Oil on canvas study focusing on light refraction."
  },

  // PHOTOGRAPHY
  {
    id: 'p1',
    title: "Urban Mirrors",
    category: ArtCategory.PHOTOGRAPHY,
    imageUrl: "https://picsum.photos/900/600?random=8",
    description: "Reflection photography capturing the distortion of street lights."
  },
  {
    id: 'p2',
    title: "Skin & Ink",
    category: ArtCategory.PHOTOGRAPHY,
    imageUrl: "https://picsum.photos/600/900?random=9",
    description: "High contrast macro shot of fresh ink."
  },
    {
    id: 'p3',
    title: "Morning Haze",
    category: ArtCategory.PHOTOGRAPHY,
    imageUrl: "https://picsum.photos/800/500?random=10",
    description: "Landscape photography with an impressionist color grading."
  }
];

export const EMAIL = "handliang96@gmail.com";