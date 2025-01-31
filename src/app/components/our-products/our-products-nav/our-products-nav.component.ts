import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-our-products-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-products-nav.component.html',
  styleUrl: './our-products-nav.component.scss',
})
export class OurProductsNavComponent {
  categories = ['Classic', 'Muffins', 'Cakes', 'Bread', 'Hot Beverages'];
  @Input() selectedCategory: number = 1;
  @Output() categorySelected = new EventEmitter<number>();

  onSelectCategory(category: number): void {
    this.categorySelected.emit(category);
  }
}
