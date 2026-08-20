import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../../core/services/cart';
import { WishlistService } from '../../../core/services/wishlist';
import { AuthService } from '../../../core/services/auth';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
})
export class Navbar {
  searchQuery = '';

  constructor(
    public cart: CartService,
    public wishlist: WishlistService,
    public auth: AuthService,
    private router: Router
  ) {}

  onSearch() {
    this.router.navigate(['/products'], { queryParams: { q: this.searchQuery || null } });
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
