import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  Input,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { CardComponent } from '../layouts/card/card.component';
import { Categories } from '../../models/store-data.model';
import { RouterLink } from '@angular/router';
import { OurProductsNavComponent } from './our-products-nav/our-products-nav.component';
import { OurProductsSliderComponent } from './our-products-slider/our-products-slider.component';

@Component({
  selector: 'app-our-products',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    OurProductsNavComponent,
    OurProductsSliderComponent,
  ],
  templateUrl: './our-products.component.html',
  styleUrl: './our-products.component.scss',
})
export class OurProductsComponent {
  @ViewChild(OurProductsSliderComponent)
  sliderComponent!: OurProductsSliderComponent;
  @Input() data?: Categories;
  selectedCategory: number = 1; 

  onCategoryChange(index: number) {
    this.selectedCategory = index; 
    this.sliderComponent.updateCategory(index);
  }
}
