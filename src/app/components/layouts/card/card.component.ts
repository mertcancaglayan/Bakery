import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../../models/store-data.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() item?: Item;

  constructor(private router: Router) {}

  navigateToProduct(itemId: string): void {
    this.router.navigate(['/product', itemId], {
      state: { product: this.item },
    });
  }
}
