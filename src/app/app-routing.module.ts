import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { InvoiceComponent } from './containers/invoice/invoice.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'invoice/:id', component: InvoiceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
