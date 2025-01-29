import { Component, OnDestroy, OnInit } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { OurProductsComponent } from '../../components/our-products/our-products.component';
import { CustomersChoiceComponent } from '../../components/customers-choice/customers-choice.component';
import { TodaysChoiceComponent } from '../../components/todays-choice/todays-choice.component';
import { OurServicesComponent } from '../../components/our-services/our-services.component';
import { BlogSectionComponent } from '../../components/blog-section/blog-section.component';
import { NewsLetterComponent } from '../../components/news-letter/news-letter.component';
import { Observable, Subscription } from 'rxjs';
import {
  Bread,
  Categories,
  Desserts,
  Drinks,
  StoreData,
} from '../../models/store-data.model';
import { Store } from '@ngrx/store';
import { loadData } from '../../store/store.data.actions';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerComponent,
    OurProductsComponent,
    CustomersChoiceComponent,
    TodaysChoiceComponent,
    OurServicesComponent,
    BlogSectionComponent,
    NewsLetterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();

  storeData$: Observable<StoreData>;

  data?: Categories;

  constructor(private store: Store<{ storeData: StoreData }>) {
    this.storeData$ = store.select((state) => state.storeData);
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.store.dispatch(loadData());
    this.subscription.add(
      this.storeData$.subscribe((storeData) => {
        if (storeData && storeData.data && storeData.data[0]) {
          this.data = storeData.data[0].categories;
        } else {
          console.error('No profile data available');
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
