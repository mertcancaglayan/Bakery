import { Component } from '@angular/core';
import { MapComponent } from "../../components/map/map.component";
import { ContactInfoComponent } from "../../components/contact-info/contact-info.component";
import { ContactFormComponent } from "../../components/contact-form/contact-form.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MapComponent, ContactInfoComponent, ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
