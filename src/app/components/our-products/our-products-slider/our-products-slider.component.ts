import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { CardComponent } from '../../layouts/card/card.component';
import { CommonModule } from '@angular/common';
import { Categories } from '../../../models/store-data.model';

@Component({
  selector: 'app-our-products-slider',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './our-products-slider.component.html',
  styleUrl: './our-products-slider.component.scss',
})
export class OurProductsSliderComponent implements AfterViewInit {
  @ViewChild('slider') sliderRef!: ElementRef<HTMLElement>;
  @Input() data?: Categories;
  @Input() selectedCategory: number = 1;
  slider!: HTMLElement;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedCategory']) {
      this.slide(this.selectedCategory);
    }
  }

  ngAfterViewInit(): void {
    this.slider = this.sliderRef.nativeElement;
    this.slide(this.selectedCategory);
  }

  slide(index: number): void {
    if (!this.slider) return;

    const slides = this.slider.querySelectorAll('.product-content');
    const slideWidth = slides[0]?.clientWidth || 0;
    const newScrollPosition = slideWidth * (index - 1);


    this.slider.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth',
    });
  }

  updateCategory(index: number) {
    this.selectedCategory = index;
    this.slide(index);
  }
}
