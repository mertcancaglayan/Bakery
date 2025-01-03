import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';

@Component({
  selector: 'app-blog-slider',
  standalone: true,
  imports: [],
  templateUrl: './blog-slider.component.html',
  styleUrl: './blog-slider.component.scss',
})
export class BlogSliderComponent implements AfterViewInit{
  @ViewChild('slider') sliderRef!: ElementRef<HTMLElement>;
  slider!: HTMLElement;

  constructor(@Inject(PLATFORM_ID) private platformId: Object ){}


  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.slider = this.sliderRef?.nativeElement;
      if (!this.slider) {
        console.error('Slider element not found.');
        return;
      }
    }
  }


  slide(direction: 'next' | 'prev') {
    if (!this.slider) return;

    const slideWidth = this.slider.clientWidth;
    const maxScrollLeft = this.slider.scrollWidth - this.slider.clientWidth;

    if (direction === 'prev') {
      if (this.slider.scrollLeft === 0) return;
      this.slider.scrollBy({
        left: -slideWidth,
        behavior: 'smooth',
      });
    } else if (direction === 'next') {
      if (this.slider.scrollLeft === maxScrollLeft) return;
      this.slider.scrollBy({
        left: slideWidth,
        behavior: 'smooth',
      });
    }
  }
}
