// src/app/contact-map/contact-map.component.ts
import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-contact-map',
  templateUrl: './contact-map.component.html',
  styleUrls: ['./contact-map.component.css'],
})
export class ContactMapComponent implements OnInit {
  contacts: Contact[] = [];
  size = 500;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
  }

  getX(radius: number, angle: number): number {
    return this.size / 2 + radius * Math.cos(angle * Math.PI / 180);
  }

  getY(radius: number, angle: number): number {
    return this.size / 2 - radius * Math.sin(angle * Math.PI / 180);
  }

  selectContact(contact: Contact): void {
    // Логика для выбора контакта
  }
}
