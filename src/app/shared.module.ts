import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Modules
import { PrimengModule } from './shared/modules/primeng/primeng.module';
import { LayoutModule } from './shared/components/layout/layout.module';



@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule,
    PrimengModule,
    LayoutModule,
  ],
  exports: [
    PrimengModule,
    LayoutModule,
  ]
})
export class SharedModule { }
