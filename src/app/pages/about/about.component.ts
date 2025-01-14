import { Component } from '@angular/core';
import { AboutUsComponent } from '../../components/about-us/about-us.component';
import { OurHistoryComponent } from '../../components/our-history/our-history.component';
import { OurServicesComponent } from '../../components/our-services/our-services.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutUsComponent, OurHistoryComponent, OurServicesComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
