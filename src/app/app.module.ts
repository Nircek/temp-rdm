import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { MathJaxDirective } from './helper/mathjax';
import { DataService } from './products-list/DataService';
import { EqExComponent } from './eqex/eqex.component';
import { EqExDirective } from './eqex/eqex.directive';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    MathJaxDirective,
    EqExDirective,
    EqExComponent,
    CartComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: ProductsListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
    ]),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
