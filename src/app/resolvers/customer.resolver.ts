import { inject } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from '../types/customer';

const resolveCustomer: ResolveFn<Observable<Customer>> = (
  route: ActivatedRouteSnapshot
): Observable<Customer> => {
  const customerId = Number(route.params['customerId']);
  return inject(CustomerService).getCustomer(customerId);
};

export default resolveCustomer;
