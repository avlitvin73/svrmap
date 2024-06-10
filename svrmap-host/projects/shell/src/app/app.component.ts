// src/app/app.component.ts
import { Component } from '@angular/core';
import { Contact } from './models/contact.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedContact: Contact | undefined;

  onContactSelected(contact: Contact): void {
    this.selectedContact = contact;
  }
}
