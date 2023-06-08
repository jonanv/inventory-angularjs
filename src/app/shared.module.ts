import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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
    RouterModule,
    PrimengModule
  ],
  exports: [
    PrimengModule,
    NavbarComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
