import { Controller, Get } from '@nestjs/common';
import { CustomerListItem } from '@shared/types';
import { Observable, map } from 'rxjs';
import { mapCustomerToCustomerListItem } from 'src/mappers/customer-list-item.mapper';
import { CustomerService } from 'src/services/customer.service';

@Controller()
export class AppController {
  constructor(private readonly customerService: CustomerService) {}

  @Get('customers')
  getCustomers(): Observable<CustomerListItem[]> {
    return this.customerService
      .getCustomers()
      .pipe(map(customers => customers.map(mapCustomerToCustomerListItem)));
  }
}
