import { Component } from '@angular/core';
import { startServer } from './helper/tests/server';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-test';
  constructor() {
    startServer();
  }
}
