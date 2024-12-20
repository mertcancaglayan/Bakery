import { Component } from '@angular/core';
import { navbarElements } from '../../../state/navbar/navbar.state';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  navbarElements: string[] = navbarElements;
}
