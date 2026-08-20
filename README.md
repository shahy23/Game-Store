# NexusPlay — Game Store (Angular + Bootstrap)

A complete front-end e-commerce website for a video game store, built with Angular (standalone components, signals) and Bootstrap 5.

## Features
- Home page with hero, categories, and featured games
- Product catalog with search, category/platform filters, price range, and sorting
- Product details page with quantity selector, tabs, and related games
- Cart with quantity controls and a promo code (try `NEXUS10` for 10% off)
- Checkout with shipping/payment form validation and order confirmation
- Wishlist (heart icon on any game card)
- Mock login/register (front-end only, stored in localStorage)
- About and Contact pages
- Fully responsive (Bootstrap grid + custom styling)

## Getting Started

```bash
npm install
npm start
```

Then open http://localhost:4200 in your browser.

## Build for production

```bash
npm run build
```

Output goes to `dist/game-store`.

## Notes
- All data (games, cart, wishlist, user) is mocked/local — there is no backend.
- Cart, wishlist, and login state persist in the browser's localStorage.
- Images are placeholder images generated via placehold.co — swap in real game art whenever you're ready.

## Project Structure
```
src/app/
  core/
    models/       # TypeScript interfaces (Game, CartItem, User)
    services/     # GameService, CartService, WishlistService, AuthService
  shared/
    components/   # Navbar, Footer, GameCard, StarRating
  pages/          # Home, Products, ProductDetails, Cart, Checkout,
                  # Login, Register, Wishlist, About, Contact, NotFound
```
