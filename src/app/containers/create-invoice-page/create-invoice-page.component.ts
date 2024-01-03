import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Address } from 'src/app/types/address';
import { Customer } from 'src/app/types/customer';
import { LineItem } from 'src/app/types/invoice';
import { Product } from 'src/app/types/product';
import { Store } from '@ngrx/store';
import { OpenedCreateInvoicePage } from 'src/app/store/actions';
import {
  selectAddress,
  selectCustomer,
  selectLineItems,
  selectProducts
} from 'src/app/store/selectors';
import { GlobalStore } from 'src/app/store/store';

@Component({
  selector: 'app-create-invoice-page',
  templateUrl: './create-invoice-page.component.html',
  styleUrls: ['./create-invoice-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateInvoicePageComponent {
  protected customer$: Observable<Customer>;
  protected address$: Observable<Address>;
  protected products$: Observable<Product[]>;
  protected lineItems$: Observable<LineItem[]>;

  constructor(
    activatedRoute: ActivatedRoute,
    private store: Store<{ globalState: GlobalStore }>
  ) {
    activatedRoute.params
      .pipe(
        map(params => Number(params['customerId'])),
        takeUntilDestroyed()
      )
      .subscribe(customerId =>
        this.store.dispatch(OpenedCreateInvoicePage({ customerId }))
      );

    this.customer$ = this.store
      .select(selectCustomer)
      .pipe(filter((customer): customer is Customer => !!customer));
    this.address$ = this.store
      .select(selectAddress)
      .pipe(filter((address): address is Address => !!address));
    this.products$ = this.store
      .select(selectProducts)
      .pipe(filter((products): products is Product[] => !!products));
    this.lineItems$ = this.store
      .select(selectLineItems)
      .pipe(filter((lineItems): lineItems is LineItem[] => !!lineItems));
  }
}
