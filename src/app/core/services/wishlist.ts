import { Injectable, signal, computed } from '@angular/core';
import { Game } from '../models/game.model';

const STORAGE_KEY = 'gamestore_wishlist';

@Injectable({ providedIn: 'root' })
export class WishlistService {
  private itemsSignal = signal<Game[]>(this.load());

  items = computed(() => this.itemsSignal());
  count = computed(() => this.itemsSignal().length);

  private load(): Game[] {
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

  toggle(game: Game) {
    const current = this.itemsSignal();
    if (current.some((g) => g.id === game.id)) {
      this.itemsSignal.set(current.filter((g) => g.id !== game.id));
    } else {
      this.itemsSignal.set([...current, game]);
    }
    this.persist();
  }

  isWishlisted(gameId: number): boolean {
    return this.itemsSignal().some((g) => g.id === gameId);
  }

  remove(gameId: number) {
    this.itemsSignal.set(this.itemsSignal().filter((g) => g.id !== gameId));
    this.persist();
  }
}
