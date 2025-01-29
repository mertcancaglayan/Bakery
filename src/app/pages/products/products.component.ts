import { Component } from '@angular/core';
import { CardComponent } from '../../components/layouts/card/card.component';
import { Observable, Subscription } from 'rxjs';
import { Categories, Item, StoreData } from '../../models/store-data.model';
import { Store } from '@ngrx/store';
import { loadData } from '../../store/store.data.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  private subscription = new Subscription();

  storeData$: Observable<StoreData>;
  data?: Categories;
  allItems: Item[] = []

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
          this.allItems = [
            ...this.data.breads,
            ...this.data.desserts.dessertCategories.cakes,
            ...this.data.desserts.dessertCategories.muffins,
            ...this.data.desserts.dessertCategories.classic,
            ...this.data.desserts.dessertCategories.tarts,
            ...this.data.drinks.drinkTypes.coldBeverages,
            ...this.data.drinks.drinkTypes.hotBeverages,
          ];
          
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
