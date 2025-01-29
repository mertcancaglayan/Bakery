import { CommonModule, isPlatformBrowser } from '@angular/common';
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

@Component({
  selector: 'app-our-products',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './our-products.component.html',
  styleUrl: './our-products.component.scss',
})
export class OurProductsComponent implements AfterViewInit {
  @ViewChild('slider') sliderRef!: ElementRef<HTMLElement>;
  @Input() data?: Categories;

  selectedCategory: number = 1;

  slider!: HTMLElement;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.slider = this.sliderRef?.nativeElement;
      if (!this.slider) {
        console.error('Slider element not found.');
        return;
      }
    }
  }

  selectCategory(category: number) {
    this.selectedCategory = category;
    this.slide(category);
  }

  slide(index: number): void {
    if (!this.slider) return;

    const slides = this.slider.querySelectorAll('.product-content');
    const slideWidth = slides[0].clientWidth;
    const newScrollPosition = slideWidth * (index - 1);

    this.slider.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth',
    });
  }
}
