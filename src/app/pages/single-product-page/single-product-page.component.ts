import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../../models/store-data.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-product-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-product-page.component.html',
  styleUrl: './single-product-page.component.scss',
})
export class SingleProductPageComponent implements OnInit {
  product: Item;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.product = navigation?.extras.state?.['product'];
    console.log(this.product);
  }

  ngOnInit(): void {
    if (!this.product) {
      console.error('No product data available.');
    }
  }
}
