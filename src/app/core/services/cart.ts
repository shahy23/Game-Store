import { Injectable, signal, computed } from '@angular/core';
import { CartItem, Game } from '../models/game.model';

const STORAGE_KEY = 'gamestore_cart';

@Injectable({ providedIn: 'root' })
export class CartService {
  private itemsSignal = signal<CartItem[]>(this.load());

  items = computed(() => this.itemsSignal());
  totalItems = computed(() => this.itemsSignal().reduce((sum, i) => sum + i.quantity, 0));
  totalPrice = computed(() =>
    this.itemsSignal().reduce((sum, i) => sum + (i.game.discountPrice ?? i.game.price) * i.quantity, 0)
  );

  private load(): CartItem[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  private persist() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.itemsSignal()));
  }

  add(game: Game, quantity = 1) {
    const current = this.itemsSignal();
    const existing = current.find((i) => i.game.id === game.id);
    if (existing) {
      this.itemsSignal.set(
        current.map((i) => (i.game.id === game.id ? { ...i, quantity: i.quantity + quantity } : i))
      );
    } else {
      this.itemsSignal.set([...current, { game, quantity }]);
    }
    this.persist();
  }

  updateQuantity(gameId: number, quantity: number) {
    if (quantity <= 0) {
      this.remove(gameId);
      return;
    }
    this.itemsSignal.set(this.itemsSignal().map((i) => (i.game.id === gameId ? { ...i, quantity } : i)));
    this.persist();
  }

  remove(gameId: number) {
    this.itemsSignal.set(this.itemsSignal().filter((i) => i.game.id !== gameId));
    this.persist();
  }

  clear() {
    this.itemsSignal.set([]);
    this.persist();
  }

  isInCart(gameId: number): boolean {
    return this.itemsSignal().some((i) => i.game.id === gameId);
  }
}
