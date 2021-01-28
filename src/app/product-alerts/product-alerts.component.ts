import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
};

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss'],
})
export class ProductAlertsComponent implements OnInit {
  @Input() product: any;
  @Output() notify = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
