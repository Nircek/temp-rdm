import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { startServer } from './helper/tests/server';
import { NavbarService } from './navbar/navbar.service';
import { Pair, Tuple } from './helper/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'angular-test';
  backdropShown: boolean = false;
  @ViewChild('drawer', { static: true }) sidenav!: MatSidenav;
  menuElements = [
    new Pair('home', 'Home'),
    new Pair('docs', 'Documentation'),
    new Pair('new-issue', 'Report an issue'),
  ];
  buttonElements = [
    new Tuple('sign-in', '<strong>Sign in<strong>', 'button is-primary'),
    new Tuple('register', 'Register', 'button is-light'),
  ];

  constructor(private navbarService: NavbarService) {
    startServer();
  }

  ngAfterViewInit() {
    this.navbarService.isOpen.subscribe({
      next: (v) => {
        if (v) this.sidenav.open();
        else this.sidenav.close();
        this.backdropShown = v;
        console.log(this.backdropShown);
      },
    });
  }

  toggleNavbar() {
    this.navbarService.toggleNavbar();
  }

  ngOnDestroy() {
    this.navbarService.isOpen.unsubscribe();
  }
}
