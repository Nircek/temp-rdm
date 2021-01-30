import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Product } from '../products-list/products-list.component';
import { CartService } from './cart-service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  items: Product[] = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit() {
    this.items = this.cartService.clearCart();
    console.warn('Order submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
