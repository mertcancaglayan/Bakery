import { Component } from '@angular/core';
import { MapComponent } from "../../components/map/map.component";
import { ContactInfoComponent } from "../../components/contact-info/contact-info.component";
import { ContactFormComponent } from "../../components/contact-form/contact-form.component";
import { OurLocationsComponent } from "../../components/our-locations/our-locations.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MapComponent, ContactInfoComponent, ContactFormComponent, OurLocationsComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
