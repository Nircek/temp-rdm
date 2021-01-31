import { Component, Input, OnInit } from '@angular/core';
import { Pair, Tuple } from '../helper/utils';
import { NavbarService } from '../navbar/navbar.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @Input() menuElements?: Pair<string, string>[];
  @Input() buttonElements?: Tuple<string, string, string>[];

  constructor(private navbarService: NavbarService) {}

  closeNavbar() {
    console.log('closing');

    this.navbarService.toggleNavbar();
  }
}
