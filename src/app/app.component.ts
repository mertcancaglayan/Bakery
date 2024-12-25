import { Component } from '@angular/core';
import { HeaderComponent } from './components/layouts/header/header.component';
import { BannerComponent } from "./components/banner/banner.component";
import { OurProductsComponent } from "./components/our-products/our-products.component";
import { CustomersChoiceComponent } from "./components/customers-choice/customers-choice.component";
import { TodaysChoiceComponent } from "./components/todays-choice/todays-choice.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, BannerComponent, OurProductsComponent, CustomersChoiceComponent, TodaysChoiceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Bakery';
}
