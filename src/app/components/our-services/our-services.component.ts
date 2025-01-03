import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OurServicesDataService } from '../../services/our-services-data.service';
import { Service } from '../../models/our-services.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss',
})
export class OurServicesComponent {
  services: Service[] = [];

  constructor(private serviceData: OurServicesDataService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.services = this.serviceData.getServices();
  }

  getSanitizedHtml(content: string) {
    return this.sanitizer.bypassSecurityTrustHtml(content)
  }
}
