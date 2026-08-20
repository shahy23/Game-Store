import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Game } from '../../../core/models/game.model';
import { CartService } from '../../../core/services/cart';
import { WishlistService } from '../../../core/services/wishlist';
import { StarRating } from '../star-rating/star-rating';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [CommonModule, RouterLink, StarRating],
  templateUrl: './game-card.html',
})
export class GameCard {
  @Input({ required: true }) game!: Game;

  constructor(public cart: CartService, public wishlist: WishlistService) {}

  addToCart(event: Event) {
    event.stopPropagation();
    event.preventDefault();
    this.cart.add(this.game);
  }

  toggleWishlist(event: Event) {
    event.stopPropagation();
    event.preventDefault();
    this.wishlist.toggle(this.game);
  }
}
