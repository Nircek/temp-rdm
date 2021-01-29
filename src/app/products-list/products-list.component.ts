import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { DataService } from './DataService';
import { EqExComponent } from '../eqex/eqex.component';
import { EqExDirective } from '../eqex/eqex.directive';
import { productList, updateList } from '../product-list';
declare var MathJax: any;

export interface Product {
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
export class ProductsListComponent {
  products: Product[] = productList;
  loading: number = 0;
  @ViewChild(EqExDirective, { static: true }) eqexHost!: EqExDirective;

  constructor(
    private dataService: DataService,
    private factoryResolver: ComponentFactoryResolver
  ) {}

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

  changeList() {
    this.loading = 0;
    updateList(productList.length == 1);
    this.products = productList;
  }

  loadComponent() {
    if (this.eqexHost) {
      const factory = this.factoryResolver.resolveComponentFactory(
        EqExComponent
      );

      const ref = this.eqexHost.viewContainerRef;
      ref.clear();

      const componentRef = ref.createComponent<EqExComponent>(factory);
      componentRef.instance.data =
        this.products[0] !== undefined ? this.products[0].name : 'undef';
    }
  }

  clearComponent() {
    if (this.eqexHost) this.eqexHost.viewContainerRef.clear();
  }
}
