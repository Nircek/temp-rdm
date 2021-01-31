import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  isOpen: boolean = false;

  constructor(private navbarService: NavbarService) {}

  ngOnInit() {
    this.navbarService.isOpen.subscribe({
      next: (v) => (this.isOpen = v),
    });
  }

  toggleNavbar() {
    this.navbarService.toggleNavbar();
  }

  ngOnDestroy() {
    this.navbarService.isOpen.unsubscribe();
  }
}
