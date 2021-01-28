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

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductAlertsComponent,
    MathJaxDirective,
    EqExDirective,
    EqExComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
