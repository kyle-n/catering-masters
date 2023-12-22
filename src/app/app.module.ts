import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';
import { CreateInvoicePageComponent } from './containers/create-invoice-page/create-invoice-page.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, CreateInvoicePageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
