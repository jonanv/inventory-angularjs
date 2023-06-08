import { Injectable } from '@angular/core';

// Imports
import { Subject } from 'rxjs';

// Interfaces
import { MenuChangeEvent } from '../interfaces/menu-change-event.interface';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuSource = new Subject<MenuChangeEvent>();
  private resetSource = new Subject();

  menuSource$ = this.menuSource.asObservable();
  resetSource$ = this.resetSource.asObservable();

  onMenuStateChange(event: MenuChangeEvent) {
    this.menuSource.next(event);
  }

  reset() {
    this.resetSource.next(true);
  }
}
