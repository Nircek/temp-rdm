import { Component } from '@angular/core';
import { TexElement, TexElementCallback } from '../helper/mathjax';
import { DataService } from './DataService';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export function throwResponseError(error: any) {
  console.error(
    'Request failed with error ' + error.status + ': "' + error.message + '"'
  );
}

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements TexElementCallback {
  products: Product[] = [];
  loading: number = 0;

  constructor(private dataService: DataService) {}

  share(product: Product) {
    const ans: any = {};
    ans[product.name] = product.id;
    this.dataService.postAnswer(ans).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        throwResponseError(error);
      }
    );
  }

  onNotify() {
    this.dataService.getExercises().subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        throwResponseError(error);
      }
    );
  }

  makeTexElement(expression: string | number) {
    return new TexElement(expression, () => {
      this.loading++;
    });
  }

  changeList() {
    this.loading = 0;
    if (this.products.length == 1)
      this.products = [
        {
          id: 1,
          name: 'Phone XL',
          price: 799,
          description: 'A large phone with one of the best screens',
        },
        {
          id: 2,
          name: 'Phone Mini',
          price: 699,
          description: 'A great phone with one of the best cameras',
        },
        {
          id: 3,
          name: 'Phone Standard',
          price: 299,
          description: '',
        },
      ];
    else
      this.products = [
        {
          id: 1.1,
          name: 'Phone Standarddddd',
          price: 300,
          description: 'sasdasdasdasdasdasd',
        },
      ];
  }
}
