// src/app/contact-details/contact-details.component.ts
import { Component, Input } from '@angular/core';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css'],
})
export class ContactDetailsComponent {
  @Input() selectedContact: Contact | undefined;
}
