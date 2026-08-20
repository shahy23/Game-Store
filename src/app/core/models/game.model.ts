export interface Game {
  id: number;
  title: string;
  category: string;
  platform: string[];
  price: number;
  discountPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  description: string;
  developer: string;
  releaseDate: string;
  stock: number;
  tags: string[];
  featured?: boolean;
}

export interface CartItem {
  game: Game;
  quantity: number;
}

export interface User {
  fullName: string;
  email: string;
}
