import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-top-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-top-btn.component.html',
  styleUrl: './scroll-top-btn.component.scss',
})
export class ScrollTopBtnComponent {
  showTopButton = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.showTopButton = window.scrollY > 500;
  }

  scrollTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
