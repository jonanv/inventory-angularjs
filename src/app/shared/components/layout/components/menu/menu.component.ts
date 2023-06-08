import { Component, OnInit } from '@angular/core';

// Services
import { LayoutService } from '../../services/layout.service';

// Interfaces
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  public model: MenuItem[] = [];

  constructor(
    public layoutService: LayoutService
  ) { }

  ngOnInit(): void {
    this.model = [
      {
        items: [
          {
            label: 'Dashboard',
            icon: 'pi pi-fw pi-home',
            routerLink: ['/']
          }
        ]
      },
      {
        label: 'Módulos',
        items: [
          {
            label: 'Categorías',
            icon: 'fa-solid fa-grip',
            routerLink: ['/economic-facts/consult']
          }
        ]
      }
    ];
  }

}
