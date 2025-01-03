import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-todays-choice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todays-choice.component.html',
  styleUrl: './todays-choice.component.scss',
})
export class TodaysChoiceComponent implements AfterViewInit {
  selectedCategory: number = 1;

  @ViewChild('imageSlider') imageSliderRef!: ElementRef<HTMLElement>;
  @ViewChild('descriptionsSlider')
  descriptionsSliderRef!: ElementRef<HTMLElement>;

  imageSlider!: HTMLElement;
  descriptionsSlider!: HTMLElement;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.imageSlider = this.imageSliderRef?.nativeElement;
      this.descriptionsSlider = this.descriptionsSliderRef?.nativeElement;

      if (!this.imageSlider || !this.descriptionsSlider) {
        console.error('One or more slider elements not found.');
        return;
      }
    }
  }

  selectCategory(category: number) {
    this.selectedCategory = category;
    this.slide(category);
  }

  slide(index: number): void {
    if (!this.imageSlider || !this.descriptionsSlider) return;

    this.slideImages(index);
    this.slidedescriptions(index);
  }

  slideImages(index: number) {
    this.scrollToPosition(this.imageSlider, index, '.today-choice-image');
  }

  slidedescriptions(index: number) {
    this.scrollToPosition(this.descriptionsSlider, index, '.description-container');
  }

  private scrollToPosition(
    slider: HTMLElement,
    index: number,
    selector: string
  ) {
    const slides = slider.querySelectorAll(selector);
    const slideHeight = slides[0]?.clientHeight || 0;

    if (selector === '.description-container') {
      slider.scrollTo({
        top: slideHeight * -(index - 1),
        behavior: 'smooth',
      });
    } else {
      slider.scrollTo({
        top: slideHeight * (index - 1),
        behavior: 'smooth',
      });
    }
  }
}
