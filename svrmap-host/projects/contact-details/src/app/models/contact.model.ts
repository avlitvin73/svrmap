// src/app/models/contact.model.ts
export interface Contact {
    id: number;
    name: string;
    category: string; // категория контакта, например "Семья", "Друзья", "Работа"
    position: { radius: number, angle: number }; // полярные координаты
    details: string;
  }
  