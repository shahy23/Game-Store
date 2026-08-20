import { Injectable, signal, computed } from '@angular/core';
import { User } from '../models/game.model';

const STORAGE_KEY = 'gamestore_user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userSignal = signal<User | null>(this.load());

  currentUser = computed(() => this.userSignal());
  isLoggedIn = computed(() => !!this.userSignal());

  private load(): User | null {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  // Front-end only mock auth: accepts any well-formed credentials.
  login(email: string, _password: string): boolean {
    const user: User = { fullName: email.split('@')[0], email };
    this.userSignal.set(user);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    return true;
  }

  register(fullName: string, email: string, _password: string): boolean {
    const user: User = { fullName, email };
    this.userSignal.set(user);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    return true;
  }

  logout() {
    this.userSignal.set(null);
    localStorage.removeItem(STORAGE_KEY);
  }
}
