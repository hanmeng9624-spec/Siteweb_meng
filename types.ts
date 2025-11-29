export enum ArtCategory {
  TATTOO = 'TATTOO',
  ILLUSTRATION = 'ILLUSTRATION',
  PHOTOGRAPHY = 'PHOTOGRAPHY'
}

export interface Artwork {
  id: string;
  title: string;
  category: ArtCategory;
  imageUrl: string;
  description: string;
  width?: number; // Visual weight helper
  height?: number;
}

export interface ConsultationState {
  prompt: string;
  response: string;
  isLoading: boolean;
  error: string | null;
}