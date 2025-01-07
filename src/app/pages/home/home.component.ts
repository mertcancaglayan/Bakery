import { Component } from '@angular/core';
import { BannerComponent } from "../../components/banner/banner.component";
import { OurProductsComponent } from "../../components/our-products/our-products.component";
import { CustomersChoiceComponent } from "../../components/customers-choice/customers-choice.component";
import { TodaysChoiceComponent } from "../../components/todays-choice/todays-choice.component";
import { OurServicesComponent } from "../../components/our-services/our-services.component";
import { BlogSectionComponent } from "../../components/blog-section/blog-section.component";
import { NewsLetterComponent } from "../../components/news-letter/news-letter.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, OurProductsComponent, CustomersChoiceComponent, TodaysChoiceComponent, OurServicesComponent, BlogSectionComponent, NewsLetterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
