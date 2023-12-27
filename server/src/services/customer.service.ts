import mockCustomer from '../mock-data/customer';
import { Observable, of } from 'rxjs';
import { Customer } from '../types/customer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerService {
  getCustomer(id: number): Observable<Customer> {
    return of(mockCustomer);
  }

  getCustomers(): Observable<Customer[]> {
    return of([mockCustomer]);
  }
}
