import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { Address } from '../types/address';
import { inject } from '@angular/core';
import { AddressService } from '../services/address.service';

const resolveAddress: ResolveFn<Observable<Address>> = (
  route: ActivatedRouteSnapshot
): Observable<Address> => {
  const customerId = Number(route.params['customerId']);
  return inject(AddressService).getAddress(customerId);
};

export default resolveAddress;
