import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/config/app.config';
import { LayoutComponent } from './app/layout/layout.component';

bootstrapApplication(LayoutComponent, appConfig)
  .catch(err => console.error(err));
