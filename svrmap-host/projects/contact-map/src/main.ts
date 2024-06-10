import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/config/app.config';
import { ContactMapComponent } from './app/contact-map/contact-map.component';

bootstrapApplication(ContactMapComponent, appConfig)
  .catch(err => console.error(err));
