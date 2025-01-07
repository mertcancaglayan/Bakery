import { Component } from '@angular/core';
import { HeaderComponent } from './components/layouts/header/header.component';
import { BannerComponent } from "./components/banner/banner.component";
import { OurProductsComponent } from "./components/our-products/our-products.component";
import { CustomersChoiceComponent } from "./components/customers-choice/customers-choice.component";
import { TodaysChoiceComponent } from "./components/todays-choice/todays-choice.component";
import { OurServicesComponent } from "./components/our-services/our-services.component";
import { BlogSectionComponent } from "./components/blog-section/blog-section.component";
import { NewsLetterComponent } from "./components/news-letter/news-letter.component";
import { FooterComponent } from "./components/layouts/footer/footer.component";
import { AboutComponent } from "./pages/about/about.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, BannerComponent, OurProductsComponent, CustomersChoiceComponent, TodaysChoiceComponent, OurServicesComponent, BlogSectionComponent, NewsLetterComponent, FooterComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Bakery';
}
