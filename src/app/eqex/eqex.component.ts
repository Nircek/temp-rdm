import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-eqex',
  templateUrl: './eqex.component.html',
  styleUrls: ['./eqex.component.scss'],
})
export class EqExComponent {
  @Input() data!: string;
}
