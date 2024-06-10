import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ContactMapComponent } from '../contact-map/contact-map.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      {
        path: '',
        component: ContactMapComponent,
      },
    ]),
  ],
};
