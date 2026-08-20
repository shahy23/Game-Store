import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WishlistService } from '../../core/services/wishlist';
import { GameCard } from '../../shared/components/game-card/game-card';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [RouterLink, GameCard],
  templateUrl: './wishlist.html',
})
export class Wishlist {
  constructor(public wishlist: WishlistService) {}
}
