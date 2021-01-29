import { Product } from './products-list/products-list.component';

export var productList: Product[] = [];

export function updateList(isShort: Boolean) {
  if (isShort)
    productList = [
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
    productList = [
      {
        id: 1.1,
        name: 'Phone Standarddddd',
        price: 300,
        description: 'sasdasdasdasdasdasd',
      },
    ];
}
