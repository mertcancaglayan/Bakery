import { Component } from '@angular/core';
import { FooterSliderComponent } from "./footer-slider/footer-slider.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FooterSliderComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
