import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../../models/store-data.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  ngOnInit(): void {
  }
  @Input() item?: Item;
}
