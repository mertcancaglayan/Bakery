import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CardComponent } from '../layouts/card/card.component';
import { Categories } from '../../models/store-data.model';

@Component({
  selector: 'app-customers-choice',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './customers-choice.component.html',
  styleUrl: './customers-choice.component.scss',
})
export class CustomersChoiceComponent implements OnChanges {
  @Input() data?: Categories;

  customersChoice?: any;

  ngOnChanges(data: SimpleChanges): void {
    this.customersChoice = [
      this.data?.breads?.[0] || null,
      this.data?.breads?.[1] || null,

      this.data?.desserts?.dessertCategories?.cakes?.[0] || null,
      this.data?.desserts?.dessertCategories?.cakes?.[1] || null,

      this.data?.desserts?.dessertCategories?.classic?.[0] || null,
      this.data?.desserts?.dessertCategories?.classic?.[1] || null,

      this.data?.desserts?.dessertCategories?.tarts?.[0] || null,

      this.data?.drinks?.drinkTypes?.hotBeverages?.[0] || null,
    ];
  }
}
