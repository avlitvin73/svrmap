import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactMapComponent } from './contact-map.component';

@NgModule({
  declarations: [ContactMapComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContactMapComponent,
      },
    ]),
  ],
})
export class ContactMapModule { }
