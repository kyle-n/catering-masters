import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';
import { CreateInvoicePageComponent } from './containers/create-invoice-page/create-invoice-page.component';
import { ViewInvoicePageComponent } from './containers/view-invoice-page/view-invoice-page.component';
import { EditInvoicePageComponent } from './containers/edit-invoice-page/edit-invoice-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateInvoicePageComponent,
    ViewInvoicePageComponent,
    EditInvoicePageComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
