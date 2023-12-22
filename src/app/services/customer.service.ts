import { Injectable } from '@angular/core';
import mockCustomer from '../mock-data/customer';
import { Observable, of } from 'rxjs';
import { Customer } from '../types/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  getCustomer(id: number): Observable<Customer> {
    return of(mockCustomer);
  }

  getCustomers(): Observable<Customer[]> {
    return of([mockCustomer]);
  }
}
