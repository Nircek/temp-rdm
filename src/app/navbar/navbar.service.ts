import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  isOpen = new BehaviorSubject<boolean>(false);

  toggleNavbar() {
    const newState = !this.isOpen.getValue();
    console.log(newState);

    this.isOpen.next(newState);
  }
}
