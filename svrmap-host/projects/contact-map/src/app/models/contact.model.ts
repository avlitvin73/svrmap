// src/app/models/contact.model.ts
export interface Contact {
    id: number;
    name: string;
    category: string; // e.g., "Family", "Friends", "Work"
    position: { radius: number, angle: number };
    details: string;
  }
  