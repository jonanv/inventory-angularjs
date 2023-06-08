import { Component, ElementRef } from '@angular/core';

// Services
import { LayoutService } from '../../services/layout.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  public model: any[] = [];

  constructor(
    public layoutService: LayoutService,
    public el: ElementRef
  ) { }

}
