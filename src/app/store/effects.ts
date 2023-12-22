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
  GetProductsFailure,
  GetProductsSuccess,
  OpenedCreateInvoicePage
} from './actions';
import { CustomerService } from '../services/customer.service';
import { AddressService } from '../services/address.service';
import { ProductService } from '../services/product.service';

@Injectable()
export class AppEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly customerService: CustomerService,
    private readonly addressService: AddressService,
    private readonly productService: ProductService
  ) {}

  createPageOpened = createEffect(() => {
    return this.actions$.pipe(
      ofType(OpenedCreateInvoicePage),
      switchMap(action =>
        from([
          GetCustomer({ customerId: action.customerId }),
          GetAddress({ customerId: action.customerId })
        ])
      )
    );
  });

  getCustomer = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetCustomer),
      switchMap(action =>
        this.customerService.getCustomer(action.customerId).pipe(
          map(customer => GetCustomerSuccess({ customer })),
          catchError(error => of(GetCustomerFailure({ error })))
        )
      )
    );
  });

  getAddress = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetAddress),
      switchMap(action =>
        this.addressService.getAddress(action.customerId).pipe(
          map(address => GetAddressSuccess({ address })),
          catchError(error => of(GetAddressFailure({ error })))
        )
      )
    );
  });

  getProducts = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetAddressSuccess),
      switchMap(action =>
        this.productService.getProductsAvailableAtAddress(action.address.id).pipe(
          map(products => GetProductsSuccess({ products })),
          catchError(error => of(GetProductsFailure({ error })))
        )
      )
    );
  });
}
