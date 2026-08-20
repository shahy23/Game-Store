import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../../core/services/game';
import { GameCard } from '../../shared/components/game-card/game-card';
import { Game } from '../../core/models/game.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, GameCard],
  templateUrl: './products.html',
})
export class Products implements OnInit {
  allGames: Game[] = [];
  results: Game[] = [];
  categories: string[] = [];
  platforms: string[] = [];

  query = '';
  selectedCategory = '';
  selectedPlatform = '';
  sortBy = '';
  minPrice: number | null = null;
  maxPrice: number | null = null;

  constructor(private gameService: GameService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.categories = this.gameService.getCategories();
    this.platforms = this.gameService.getPlatforms();

    this.route.queryParams.subscribe((params) => {
      this.query = params['q'] ?? '';
      this.selectedCategory = params['category'] ?? '';
      this.sortBy = params['sort'] ?? '';
      this.applyFilters();
    });
  }

  applyFilters() {
    let result = this.gameService.search(this.query, this.selectedCategory, this.selectedPlatform, this.sortBy);
    if (this.minPrice != null) {
      result = result.filter((g) => (g.discountPrice ?? g.price) >= this.minPrice!);
    }
    if (this.maxPrice != null) {
      result = result.filter((g) => (g.discountPrice ?? g.price) <= this.maxPrice!);
    }
    this.results = result;
  }

  setCategory(cat: string) {
    this.selectedCategory = this.selectedCategory === cat ? '' : cat;
    this.applyFilters();
  }

  clearFilters() {
    this.query = '';
    this.selectedCategory = '';
    this.selectedPlatform = '';
    this.sortBy = '';
    this.minPrice = null;
    this.maxPrice = null;
    this.router.navigate(['/products']);
    this.applyFilters();
  }
}
