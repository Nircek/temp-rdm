import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { MathJaxDirective } from './helper/mathjax';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductAlertsComponent,
    MathJaxDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
