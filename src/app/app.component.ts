import { Component } from '@angular/core';
import { HeaderComponent } from './components/layouts/header/header.component';
import { BannerComponent } from "./components/banner/banner.component";
import { OurProductsComponent } from "./components/our-products/our-products.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, BannerComponent, OurProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Bakery';
}
