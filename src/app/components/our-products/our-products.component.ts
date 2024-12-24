import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-our-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-products.component.html',
  styleUrl: './our-products.component.scss',
})
export class OurProductsComponent implements AfterViewInit {
  @ViewChild('slider') sliderRef!: ElementRef<HTMLElement>;

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
