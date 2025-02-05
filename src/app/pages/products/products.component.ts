import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { loadData } from '../../store/store.data.actions';
import { CardComponent } from '../../components/layouts/card/card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreData, Item } from '../../models/store-data.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent, CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
  storeData$: Observable<StoreData>;
  filteredItems: Item[] = [];
  filterSubject = new Subject<void>();
  filteredCategories: Array<any> = [];

  categories = [
    { id: 'desserts', name: 'Desserts', checked: false },
    { id: 'muffins', name: 'Muffins', checked: false },
    { id: 'tarts', name: 'Tarts', checked: false },
    { id: 'breads', name: 'Breads', checked: false },
    { id: 'cakes', name: 'Cakes', checked: false },
    {
      id: 'beverages',
      name: 'Beverages',
      checked: false,
      children: [
        { id: 'hot-beverages', name: 'Hot Beverages', checked: false },
        { id: 'cold-beverages', name: 'Cold Beverages', checked: false },
      ],
    },
  ];

  breads?: Item[];
  cakes?: Item[];
  muffins?: Item[];
  classic?: Item[];
  tarts?: Item[];
  coldBeverages?: Item[];
  hotBeverages?: Item[];

  constructor(private store: Store<{ storeData: StoreData }>) {
    this.storeData$ = store.select((state) => state.storeData);
  }

  ngOnInit(): void {
    this.loadData();
    this.filterSubject.pipe(debounceTime(300)).subscribe(() => {
      this.filterItems();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  loadData(): void {
    this.store.dispatch(loadData());

    this.subscription.add(
      this.storeData$.subscribe((storeData) => {
        if (storeData?.data?.[0]) {
          const categories = storeData.data[0].categories;

          this.breads = categories.breads;
          this.cakes = categories.desserts.dessertCategories.cakes;
          this.muffins = categories.desserts.dessertCategories.muffins;
          this.classic = categories.desserts.dessertCategories.classic;
          this.tarts = categories.desserts.dessertCategories.tarts;
          this.coldBeverages = categories.drinks.drinkTypes.coldBeverages;
          this.hotBeverages = categories.drinks.drinkTypes.hotBeverages;

          this.filteredItems = [
            ...this.breads,
            ...this.cakes,
            ...this.muffins,
            ...this.classic,
            ...this.tarts,
            ...this.coldBeverages,
            ...this.hotBeverages,
          ];
        }
      })
    );
  }

  onCategoryChange(categoryId: string): void {
    const category = this.categories.find((c) => c.id === categoryId);
    if (!category) return;

    category.checked = !category.checked;
    this.filterItems();
  }

  filterItems(): void {
    const selectedCategories = this.categories.filter(
      (category) => category.checked
    );

    this.filteredCategories = selectedCategories;

    if (selectedCategories.length === 0) {
      this.filteredItems = [
        ...(this.breads ?? []),
        ...(this.cakes ?? []),
        ...(this.muffins ?? []),
        ...(this.classic ?? []),
        ...(this.tarts ?? []),
        ...(this.coldBeverages ?? []),
        ...(this.hotBeverages ?? []),
      ];
    } else {
      const categoryToItemsMap: { [key: string]: Item[] } = {
        desserts: [
          ...(this.classic ?? []),
          ...(this.muffins ?? []),
          ...(this.tarts ?? []),
        ],
        classic: this.classic ?? [],
        muffins: this.muffins ?? [],
        tarts: this.tarts ?? [],
        breads: this.breads ?? [],
        cakes: this.cakes ?? [],
        beverages: [
          ...(this.hotBeverages ?? []),
          ...(this.coldBeverages ?? []),
        ],
      };

      this.filteredItems = selectedCategories.reduce<Item[]>(
        (acc, category) => {
          const items = categoryToItemsMap[category.id] || [];
          acc.push(...items);
          return acc;
        },
        []
      );
    }
  }
}
