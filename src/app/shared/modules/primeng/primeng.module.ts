import { NgModule } from '@angular/core';

// Modules
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [],
  imports: [
    RippleModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    CardModule
  ],
  exports: [
    RippleModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    CardModule
  ]
})
export class PrimengModule { }
