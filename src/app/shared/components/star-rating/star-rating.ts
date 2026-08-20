import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="text-warning">
      @for (i of stars; track i) {
        <i class="bi" [class.bi-star-fill]="i <= rounded" [class.bi-star]="i > rounded"></i>
      }
    </span>
    @if (showValue) {
      <span class="text-secondary small ms-1">{{ rating.toFixed(1) }}</span>
    }
  `,
})
export class StarRating {
  @Input() rating = 0;
  @Input() showValue = true;
  stars = [1, 2, 3, 4, 5];

  get rounded() {
    return Math.round(this.rating);
  }
}
