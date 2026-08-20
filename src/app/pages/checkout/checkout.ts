import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../core/services/cart';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './checkout.html',
})
export class Checkout {
  orderPlaced = false;
  orderNumber = '';

  shipping = { fullName: '', address: '', city: '', zip: '', country: '' };
  payment = { cardName: '', cardNumber: '', expiry: '', cvv: '' };

  constructor(public cart: CartService, private router: Router) {}

  placeOrder(form: NgForm) {
    if (form.invalid) {
      Object.values(form.controls).forEach((c) => c.markAsTouched());
      return;
    }
    this.orderNumber = 'NX-' + Math.floor(100000 + Math.random() * 900000);
    this.orderPlaced = true;
    this.cart.clear();
  }

  backToStore() {
    this.router.navigate(['/products']);
  }
}
