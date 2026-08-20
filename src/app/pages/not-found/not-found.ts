import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="container py-5 text-center">
      <i class="bi bi-controller display-1 text-secondary"></i>
      <h1 class="fw-bold mt-3">404</h1>
      <p class="text-secondary mb-4">Looks like this level doesn't exist.</p>
      <a routerLink="/" class="btn btn-info text-dark fw-semibold">Back to Home</a>
    </div>
  `,
})
export class NotFound {}
