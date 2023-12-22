import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerService } from 'src/app/services/customer.service';
import { InvoiceService } from 'src/app/services/invoice.service';
import { Customer } from 'src/app/types/customer';
import { Invoice } from 'src/app/types/invoice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HomeComponent {
  protected invoices$: Observable<Invoice[]>;
  protected customers$: Observable<Customer[]>;

  constructor(
    invoiceService: InvoiceService,
    customerService: CustomerService
  ) {
    this.invoices$ = invoiceService.getInvoices();
    this.customers$ = customerService.getCustomers();
  }
}
