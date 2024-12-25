import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from "../layouts/card/card.component";

@Component({
  selector: 'app-customers-choice',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './customers-choice.component.html',
  styleUrl: './customers-choice.component.scss',
})
export class CustomersChoiceComponent {}
