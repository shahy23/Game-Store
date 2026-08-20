import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CartService } from '../../core/services/cart';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './cart.html',
})
export class Cart {
  promoCode = '';
  promoApplied = false;
  promoError = '';

  constructor(public cart: CartService) {}

  increment(gameId: number, current: number, stock: number) {
    if (current < stock) {
      this.cart.updateQuantity(gameId, current + 1);
    }
  }

  decrement(gameId: number, current: number) {
    this.cart.updateQuantity(gameId, current - 1);
  }

  applyPromo() {
    if (this.promoCode.trim().toUpperCase() === 'NEXUS10') {
      this.promoApplied = true;
      this.promoError = '';
    } else {
      this.promoApplied = false;
      this.promoError = 'Invalid promo code.';
    }
  }

  get discount(): number {
    return this.promoApplied ? this.cart.totalPrice() * 0.1 : 0;
  }

  get finalTotal(): number {
    return this.cart.totalPrice() - this.discount;
  }
}
