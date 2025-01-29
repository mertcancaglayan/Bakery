import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { ScrollTopBtnComponent } from './components/layouts/scroll-top-btn/scroll-top-btn.component';


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
export class AppComponent {
  title = 'Bakery';
}
