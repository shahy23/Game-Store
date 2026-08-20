import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GameService } from '../../core/services/game';
import { GameCard } from '../../shared/components/game-card/game-card';
import { Game } from '../../core/models/game.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, GameCard],
  templateUrl: './home.html',
})
export class Home {
  featured: Game[];
  categories: string[];

  constructor(private gameService: GameService) {
    this.featured = this.gameService.getFeatured();
    this.categories = this.gameService.getCategories();
  }

  categoryIcon(category: string): string {
    const icons: Record<string, string> = {
      RPG: 'bi-shield-shaded',
      Racing: 'bi-speedometer2',
      Shooter: 'bi-crosshair',
      Puzzle: 'bi-puzzle',
      Strategy: 'bi-diagram-3',
      Action: 'bi-lightning-charge',
      Adventure: 'bi-map',
      Sports: 'bi-trophy',
    };
    return icons[category] ?? 'bi-joystick';
  }
}
