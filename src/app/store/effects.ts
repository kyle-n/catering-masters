import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, from, map, of, switchMap } from 'rxjs';
import {
  GetAddress,
  GetCustomer,
  GetCustomerFailure,
  GetCustomerSuccess,
  OpenedCreateInvoicePage
} from './actions';
import { CustomerService } from '../services/customer.service';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private customerService: CustomerService
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
}
