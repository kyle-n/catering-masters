import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { CreateInvoicePageComponent } from './containers/create-invoice-page/create-invoice-page.component';
import { EditInvoicePageComponent } from './containers/edit-invoice-page/edit-invoice-page.component';
import resolveCustomer from './resolvers/customer.resolver';
import resolveAddress from './resolvers/address.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'customer/:customerId/invoice/new',
    component: CreateInvoicePageComponent,
    resolve: {
      customer: resolveCustomer,
      address: resolveAddress
    }
  },
  {
    path: 'customer/:customerId/invoice/:invoiceId/edit',
    component: EditInvoicePageComponent,
    resolve: {
      customer: resolveCustomer,
      address: resolveAddress
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
