import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then((m) => m.Home) },
  { path: 'products', loadComponent: () => import('./pages/products/products').then((m) => m.Products) },
  {
    path: 'products/:id',
    loadComponent: () => import('./pages/product-details/product-details').then((m) => m.ProductDetails),
  },
  { path: 'cart', loadComponent: () => import('./pages/cart/cart').then((m) => m.Cart) },
  { path: 'checkout', loadComponent: () => import('./pages/checkout/checkout').then((m) => m.Checkout) },
  { path: 'wishlist', loadComponent: () => import('./pages/wishlist/wishlist').then((m) => m.Wishlist) },
  { path: 'login', loadComponent: () => import('./pages/login/login').then((m) => m.Login) },
  { path: 'register', loadComponent: () => import('./pages/register/register').then((m) => m.Register) },
  { path: 'about', loadComponent: () => import('./pages/about/about').then((m) => m.About) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact) },
  { path: 'not-found', loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound) },
  { path: '**', redirectTo: 'not-found' },
];
