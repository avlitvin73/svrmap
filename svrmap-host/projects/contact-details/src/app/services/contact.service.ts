// src/app/services/contact.service.ts
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contacts: Contact[] = [
    { id: 1, name: 'Иван', category: 'Семья', position: { radius: 50, angle: 30 }, details: 'Информация о контакте' },
    { id: 2, name: 'Анна', category: 'Работа', position: { radius: 150, angle: 80 }, details: 'Информация о контакте' },
    // Добавьте больше контактов здесь
  ];

  getContacts(): Contact[] {
    return this.contacts;
  }

  getContactById(id: number): Contact | undefined {
    return this.contacts.find(contact => contact.id === id);
  }
}
