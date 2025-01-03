import { Component } from '@angular/core';
import { BlogSliderComponent } from "./blog-slider/blog-slider.component";

@Component({
  selector: 'app-blog-section',
  standalone: true,
  imports: [BlogSliderComponent],
  templateUrl: './blog-section.component.html',
  styleUrl: './blog-section.component.scss'
})
export class BlogSectionComponent {

}
