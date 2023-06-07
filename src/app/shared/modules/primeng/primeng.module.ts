import { NgModule } from '@angular/core';

// Modules
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [],
  imports: [
    RippleModule,
    ButtonModule
  ],
  exports: [
    RippleModule,
    ButtonModule
  ]
})
export class PrimengModule { }
