export  interface Movie {
  id: string;
  title: string;
  description: string;
  image: string;
  category?: string;
  year?: number;
  rating?: string;
  duration?: string;
  genres?: string[];
  trending?: boolean;
  match?: number;
  new?: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  profileImage: string;
  isKids: boolean;
}

export interface Profile {
  id: string;
  name: string;
  avatar: string;
  isKids: boolean;
}

export interface MyListItem {
  movieId: string;
  addedAt: Date;
}

export interface FeaturedContent {
  id: string;
  title: string;
  description: string;
  image: string;
  logo?: string;
  videoPreview?: string;
  year?: number;
  rating?: string;
  duration?: string;
  genres?: string[];
  match?: number;
}
 