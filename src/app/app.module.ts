import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';
import { CreateInvoicePageComponent } from './containers/create-invoice-page/create-invoice-page.component';
import { EditInvoicePageComponent } from './containers/edit-invoice-page/edit-invoice-page.component';
import { HeaderComponent } from './components/header/header.component';
import { LineItemTableComponent } from './components/line-item-table/line-item-table.component';
import { SubmitButtonsComponent } from './components/submit-buttons/submit-buttons.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateInvoicePageComponent,
    EditInvoicePageComponent,
    HeaderComponent,
    LineItemTableComponent,
    SubmitButtonsComponent,
    ProductListComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
