import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Modules
import { RippleModule } from 'primeng/ripple';

// Components
import { LayoutComponent } from './layout.component';
import { TopBarComponent } from './components/topbar/topbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuitemComponent } from './components/menuitem/menuitem.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    LayoutComponent,
    TopBarComponent,
    SidebarComponent,
    MenuComponent,
    MenuitemComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RippleModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
