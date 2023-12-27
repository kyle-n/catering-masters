import { Controller, Get } from '@nestjs/common';
import { CustomerListItem, InvoiceListItem } from '@shared/types';
import { Observable, map } from 'rxjs';
import { mapCustomerToCustomerListItem } from 'src/mappers/customer-list-item.mapper';
import { mapInvoiceToInvoiceListItem } from 'src/mappers/invoice-list-item.mapper';
import { CustomerService } from 'src/services/customer.service';
import { InvoiceService } from 'src/services/invoice.service';

@Controller()
export class AppController {
  constructor(
    private readonly customerService: CustomerService,
    private readonly invoiceService: InvoiceService
  ) {}

  @Get('customers')
  getCustomers(): Observable<CustomerListItem[]> {
    return this.customerService
      .getCustomers()
      .pipe(map(customers => customers.map(mapCustomerToCustomerListItem)));
  }

  @Get('invoices')
  getInvoices(): Observable<InvoiceListItem[]> {
    return this.invoiceService
      .getInvoices()
      .pipe(map(invoices => invoices.map(mapInvoiceToInvoiceListItem)));
  }
}
