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
  @ViewChild('ingredientsSlider')
  ingredientsSliderRef!: ElementRef<HTMLElement>;

  imageSlider!: HTMLElement;
  ingredientsSlider!: HTMLElement;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.imageSlider = this.imageSliderRef?.nativeElement;
      this.ingredientsSlider = this.ingredientsSliderRef?.nativeElement;

      if (!this.imageSlider || !this.ingredientsSlider) {
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
    if (!this.imageSlider || !this.ingredientsSlider) return;

    this.slideImages(index);
    this.slideIngredients(index);
  }

  slideImages(index: number) {
    this.scrollToPosition(this.imageSlider, index, '.today-choice-image');
  }

  slideIngredients(index: number) {
    this.scrollToPosition(this.ingredientsSlider, index, '.table-container');
  }

  private scrollToPosition(
    slider: HTMLElement,
    index: number,
    selector: string
  ) {
    const slides = slider.querySelectorAll(selector);
    const slideHeight = slides[0]?.clientHeight || 0;

    if(selector=== ".table-container") {
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
