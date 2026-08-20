import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';

@Injectable({ providedIn: 'root' })
export class GameService {
  private games: Game[] = [
    {
      id: 1,
      title: 'Shadow Realm Chronicles',
      category: 'RPG',
      platform: ['PS5', 'Xbox', 'PC'],
      price: 59.99,
      discountPrice: 44.99,
      rating: 4.6,
      reviewsCount: 1284,
      image: 'https://placehold.co/500x650/1a1a2e/e94560?text=Shadow+Realm',
      description: 'An epic open-world RPG where you explore a fractured realm, build your legend, and battle ancient forces threatening to consume the world.',
      developer: 'Nightfall Studios',
      releaseDate: '2025-03-14',
      stock: 42,
      tags: ['Open World', 'Fantasy', 'Story Rich'],
      featured: true,
    },
    {
      id: 2,
      title: 'Velocity Circuit X',
      category: 'Racing',
      platform: ['PS5', 'Xbox', 'PC', 'Switch'],
      price: 49.99,
      rating: 4.3,
      reviewsCount: 872,
      image: 'https://placehold.co/500x650/0f3460/f5f5f5?text=Velocity+X',
      description: 'High-octane arcade racing across futuristic cities with full car customization and split-screen multiplayer.',
      developer: 'Turbo Interactive',
      releaseDate: '2025-06-02',
      stock: 65,
      tags: ['Racing', 'Multiplayer', 'Arcade'],
      featured: true,
    },
    {
      id: 3,
      title: 'Iron Front: Vanguard',
      category: 'Shooter',
      platform: ['PS5', 'Xbox', 'PC'],
      price: 69.99,
      discountPrice: 55.99,
      rating: 4.4,
      reviewsCount: 2310,
      image: 'https://placehold.co/500x650/2b2d42/edf2f4?text=Iron+Front',
      description: 'A cinematic military shooter with a gripping campaign and a fast, tactical multiplayer suite.',
      developer: 'Redline Games',
      releaseDate: '2024-11-08',
      stock: 30,
      tags: ['FPS', 'Military', 'Multiplayer'],
      featured: true,
    },
    {
      id: 4,
      title: 'Puzzle Grove',
      category: 'Puzzle',
      platform: ['PC', 'Switch'],
      price: 19.99,
      rating: 4.8,
      reviewsCount: 540,
      image: 'https://placehold.co/500x650/8ecae6/023047?text=Puzzle+Grove',
      description: 'A cozy, relaxing puzzle-adventure about restoring a magical forest one puzzle at a time.',
      developer: 'Willow Works',
      releaseDate: '2025-01-20',
      stock: 120,
      tags: ['Cozy', 'Relaxing', 'Indie'],
    },
    {
      id: 5,
      title: 'Empire Tactics',
      category: 'Strategy',
      platform: ['PC'],
      price: 39.99,
      rating: 4.5,
      reviewsCount: 690,
      image: 'https://placehold.co/500x650/3a0ca3/ffffff?text=Empire+Tactics',
      description: 'Command your empire through diplomacy, economy, and war in this deep grand strategy title.',
      developer: 'Ironclad Logic',
      releaseDate: '2024-09-12',
      stock: 55,
      tags: ['Strategy', '4X', 'Historical'],
    },
    {
      id: 6,
      title: 'Skyline Legends',
      category: 'Action',
      platform: ['PS5', 'Xbox'],
      price: 64.99,
      rating: 4.2,
      reviewsCount: 1120,
      image: 'https://placehold.co/500x650/e63946/f1faee?text=Skyline+Legends',
      description: 'A hyper-stylish action game where you fight across a vertical city using grapple-fueled combat.',
      developer: 'Neon Fist Studio',
      releaseDate: '2025-05-30',
      stock: 38,
      tags: ['Action', 'Combat', 'Superhero'],
      featured: true,
    },
    {
      id: 7,
      title: 'Harvest Horizon',
      category: 'Adventure',
      platform: ['PC', 'Switch'],
      price: 29.99,
      discountPrice: 22.49,
      rating: 4.7,
      reviewsCount: 980,
      image: 'https://placehold.co/500x650/606c38/fefae0?text=Harvest+Horizon',
      description: 'Build your farm, befriend your neighbors, and uncover the mystery hidden beneath the valley.',
      developer: 'Lantern Fields',
      releaseDate: '2024-04-18',
      stock: 90,
      tags: ['Farming', 'Life Sim', 'Cozy'],
    },
    {
      id: 8,
      title: 'Championship Arena',
      category: 'Sports',
      platform: ['PS5', 'Xbox', 'PC'],
      price: 54.99,
      rating: 4.1,
      reviewsCount: 1580,
      image: 'https://placehold.co/500x650/003049/ffffff?text=Championship',
      description: 'The most realistic sports sim yet, with full career mode, online leagues, and dynamic commentary.',
      developer: 'ProSport Games',
      releaseDate: '2025-08-01',
      stock: 75,
      tags: ['Sports', 'Simulation', 'Online'],
    },
    {
      id: 9,
      title: 'Voidbreakers',
      category: 'Shooter',
      platform: ['PC', 'PS5'],
      price: 44.99,
      rating: 4.0,
      reviewsCount: 430,
      image: 'https://placehold.co/500x650/240046/e0aaff?text=Voidbreakers',
      description: 'A roguelike sci-fi shooter where every run through the void reshapes your arsenal and abilities.',
      developer: 'Deep Space Collective',
      releaseDate: '2025-02-11',
      stock: 60,
      tags: ['Roguelike', 'Sci-Fi', 'Indie'],
    },
    {
      id: 10,
      title: 'Kingdom of Ember',
      category: 'RPG',
      platform: ['Switch', 'PC'],
      price: 49.99,
      rating: 4.9,
      reviewsCount: 2010,
      image: 'https://placehold.co/500x650/9d0208/ffba08?text=Kingdom+Ember',
      description: 'A beautifully hand-drawn tactical RPG following a fractured kingdom on the brink of civil war.',
      developer: 'Ember Studio',
      releaseDate: '2024-12-05',
      stock: 48,
      tags: ['Tactical', 'Fantasy', 'Story Rich'],
      featured: true,
    },
    {
      id: 11,
      title: 'Drift Nation',
      category: 'Racing',
      platform: ['PS5', 'Xbox'],
      price: 39.99,
      discountPrice: 29.99,
      rating: 4.2,
      reviewsCount: 350,
      image: 'https://placehold.co/500x650/ff6d00/1b1b1b?text=Drift+Nation',
      description: 'Master the art of drifting across open-world streets in this street-racing culture celebration.',
      developer: 'Asphalt Kings',
      releaseDate: '2024-07-22',
      stock: 82,
      tags: ['Racing', 'Open World', 'Drift'],
    },
    {
      id: 12,
      title: 'Mind Maze',
      category: 'Puzzle',
      platform: ['PC', 'Switch'],
      price: 14.99,
      rating: 4.4,
      reviewsCount: 210,
      image: 'https://placehold.co/500x650/4361ee/ffffff?text=Mind+Maze',
      description: 'A minimalist, mind-bending puzzle game with over 150 hand-crafted levels.',
      developer: 'Small Room Games',
      releaseDate: '2025-04-09',
      stock: 150,
      tags: ['Puzzle', 'Minimalist', 'Indie'],
    },
  ];

  getAll(): Game[] {
    return this.games;
  }

  getFeatured(): Game[] {
    return this.games.filter((g) => g.featured);
  }

  getById(id: number): Game | undefined {
    return this.games.find((g) => g.id === id);
  }

  getCategories(): string[] {
    return Array.from(new Set(this.games.map((g) => g.category)));
  }

  getPlatforms(): string[] {
    return Array.from(new Set(this.games.flatMap((g) => g.platform)));
  }

  search(query: string, category?: string, platform?: string, sortBy?: string): Game[] {
    let result = [...this.games];
    if (query) {
      const q = query.toLowerCase();
      result = result.filter(
        (g) => g.title.toLowerCase().includes(q) || g.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    if (category) {
      result = result.filter((g) => g.category === category);
    }
    if (platform) {
      result = result.filter((g) => g.platform.includes(platform));
    }
    if (sortBy === 'price-asc') {
      result.sort((a, b) => (a.discountPrice ?? a.price) - (b.discountPrice ?? b.price));
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => (b.discountPrice ?? b.price) - (a.discountPrice ?? a.price));
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'newest') {
      result.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
    }
    return result;
  }

  getRelated(game: Game): Game[] {
    return this.games.filter((g) => g.category === game.category && g.id !== game.id).slice(0, 4);
  }
}
