import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Modules
import { SharedModule } from 'src/app/shared.module';

// Components
import { DashboardComponent } from './pages/dashboard.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class DashboardModule { }
