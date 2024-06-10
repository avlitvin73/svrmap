import { ApplicationConfig } from '@angular/core';
import { provideRouter, withRouterConfig } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      {
        path: '',
        component: LayoutComponent,
        children: [
          {
            path: 'contact-map',
            loadChildren: () =>
              import('contactMap/ContactMapModule').then(m => m.ContactMapModule),
          },
          {
            path: 'contact-details',
            loadChildren: () =>
              import('contactDetails/ContactDetailsModule').then(m => m.ContactDetailsModule),
          },
        ]
      }
    ], withRouterConfig({ initialNavigation: 'enabledBlocking' })),
  ],
};
