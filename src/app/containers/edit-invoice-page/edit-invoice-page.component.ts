import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, filter, map, mergeMap } from 'rxjs';
import { GlobalStore } from 'src/app/store/store';
import { Address } from 'src/app/types/address';
import { Customer } from 'src/app/types/customer';
import { Invoice, LineItem } from 'src/app/types/invoice';
import { Product } from 'src/app/types/product';
import { Store } from '@ngrx/store';
import { OpenedEditInvoicePage } from 'src/app/store/actions';
import { selectCustomer, selectAddress, selectProducts, selectLineItems, selectInvoice } from 'src/app/store/selectors';

@Component({
  selector: 'app-edit-invoice-page',
  templateUrl: './edit-invoice-page.component.html',
  styleUrls: ['./edit-invoice-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditInvoicePageComponent {
  protected customer$: Observable<Customer>;
  protected address$: Observable<Address>;
  protected products$: Observable<Product[]>;
  protected lineItems$: Observable<LineItem[]>;
  protected invoice$: Observable<Invoice>;

  constructor(
    activatedRoute: ActivatedRoute,
    private store: Store<{ globalState: GlobalStore }>
  ) {
    activatedRoute.params
      .pipe(
        map(params => ({
          customerId: Number(params['customerId']),
          invoiceId: Number(params['invoiceId'])
        }))
      )
      .subscribe(ids => this.store.dispatch(OpenedEditInvoicePage(ids)));

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
    this.invoice$ = this.store
        .select(selectInvoice)
        .pipe(filter((invoice): invoice is Invoice => !!invoice));
  }
}
