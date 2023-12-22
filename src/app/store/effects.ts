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
  GetInvoice,
  GetInvoiceFailure,
  GetInvoiceSuccess,
  GetLineItemsFailure,
  GetLineItemsOnCreateSuccess,
  GetLineItemsOnEditSuccess,
  GetProductsFailure,
  GetProductsSuccess,
  OpenedCreateInvoicePage,
  OpenedEditInvoicePage
} from './actions';
import { CustomerService } from '../services/customer.service';
import { AddressService } from '../services/address.service';
import { ProductService } from '../services/product.service';
import { InvoiceService } from '../services/invoice.service';

@Injectable()
export class AppEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly customerService: CustomerService,
    private readonly addressService: AddressService,
    private readonly productService: ProductService,
    private readonly invoiceService: InvoiceService
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

  editPageOpened = createEffect(() => {
    return this.actions$.pipe(
      ofType(OpenedEditInvoicePage),
      switchMap(action =>
        from([
          GetCustomer({ customerId: action.customerId }),
          GetAddress({ customerId: action.customerId }),
          GetInvoice({ invoiceId: action.invoiceId })
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
        this.productService
          .getProductsAvailableAtAddress(action.address.id)
          .pipe(
            map(products => GetProductsSuccess({ products })),
            catchError(error => of(GetProductsFailure({ error })))
          )
      )
    );
  });

  getLineItemsForCreatePage = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetProductsSuccess),
      switchMap(action =>
        this.productService.getLineItemsForProducts(action.products).pipe(
          map(lineItems => GetLineItemsOnCreateSuccess({ lineItems })),
          catchError(error => of(GetLineItemsFailure({ error })))
        )
      )
    );
  });

  getLineItemsForEditPage = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetProductsSuccess),
      switchMap(action =>
        this.productService.getLineItemsForProducts(action.products).pipe(
          map(lineItems => GetLineItemsOnEditSuccess({ lineItems })),
          catchError(error => of(GetLineItemsFailure({ error })))
        )
      )
    );
  });

  getInvoice = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetInvoice),
      switchMap(action =>
        this.invoiceService.getInvoice(action.invoiceId).pipe(
          map(invoice => GetInvoiceSuccess({ invoice })),
          catchError(error => of(GetInvoiceFailure({ error })))
        )
      )
    );
  });
}
