import { NgModule } from '@angular/core';

// Modules
import { PrimengModule } from './shared/modules/primeng/primeng.module';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    PrimengModule
  ],
  exports: [
    PrimengModule
  ]
})
export class SharedModule { }
