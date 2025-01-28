import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { ScrollTopBtnComponent } from './components/layouts/scroll-top-btn/scroll-top-btn.component';
import { Store } from '@ngrx/store';
import { StoreData } from './models/store-data.model';
import { Observable, Subscription } from 'rxjs';
import { loadData } from './store/store.data.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
    ScrollTopBtnComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Bakery';
  storeData$: Observable<StoreData>;
  private subscription = new Subscription();

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
        if (storeData) {
          console.log(storeData);
        } else {
          console.error('No profile data available');
        }
      })
    );
  }
}
