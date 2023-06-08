import { Component, ElementRef, ViewChild } from '@angular/core';

// Imports
import { MenuItem } from 'primeng/api';

// Services
import { LayoutService } from '../../services/layout.service';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html'
})
export class TopBarComponent {

  items!: MenuItem[];

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  constructor(public layoutService: LayoutService) { }

}
