import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { GameService } from '../../core/services/game';
import { CartService } from '../../core/services/cart';
import { WishlistService } from '../../core/services/wishlist';
import { StarRating } from '../../shared/components/star-rating/star-rating';
import { GameCard } from '../../shared/components/game-card/game-card';
import { Game } from '../../core/models/game.model';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterLink, StarRating, GameCard],
  templateUrl: './product-details.html',
})
export class ProductDetails implements OnInit {
  game?: Game;
  related: Game[] = [];
  quantity = 1;
  activeTab: 'description' | 'details' | 'reviews' = 'description';
  justAdded = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gameService: GameService,
    public cart: CartService,
    public wishlist: WishlistService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.game = this.gameService.getById(id);
      this.quantity = 1;
      this.justAdded = false;
      if (this.game) {
        this.related = this.gameService.getRelated(this.game);
      } else {
        this.router.navigate(['/not-found']);
      }
    });
  }

  changeQuantity(delta: number) {
    const next = this.quantity + delta;
    if (next >= 1 && this.game && next <= this.game.stock) {
      this.quantity = next;
    }
  }

  addToCart() {
    if (!this.game) return;
    this.cart.add(this.game, this.quantity);
    this.justAdded = true;
    setTimeout(() => (this.justAdded = false), 2000);
  }
}
