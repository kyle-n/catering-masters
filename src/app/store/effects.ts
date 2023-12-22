import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, from, map, of, switchMap } from 'rxjs';
import {
  GetAddress,
  GetAddressFailure,
  GetAddressSuccess,
  GetCustomer,
  GetCustomerFailure,
  GetCustomerSuccess,
  OpenedCreateInvoicePage
} from './actions';
import { CustomerService } from '../services/customer.service';
import { AddressService } from '../services/address.service';

@Injectable()
export class AppEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly customerService: CustomerService,
    private readonly addressService: AddressService
  ) {}

  createPageOpened = createEffect(() => {
    return this.actions$.pipe(
      ofType(OpenedCreateInvoicePage.type),
      switchMap((action: any) =>
        from([
          GetCustomer({ customerId: action.customerId }),
          GetAddress({ customerId: action.customerId })
        ])
      )
    );
  });

  getCustomer = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetCustomer.type),
      switchMap((action: any) =>
        this.customerService.getCustomer(action.customerId).pipe(
          map(customer => GetCustomerSuccess({ customer })),
          catchError(error => of(GetCustomerFailure({ error })))
        )
      )
    );
  });

  getAddress = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetAddress.type),
      switchMap((action: any) =>
        this.addressService.getAddress(action.customerId).pipe(
          map(address => GetAddressSuccess({ address })),
          catchError(error => of(GetAddressFailure({ error })))
        )
      )
    );
  });
}
