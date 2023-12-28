import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, mergeMap } from 'rxjs';
import {
  InvoiceHeaderCustomerData,
  LineItem,
  Product,
  Invoice
} from '@shared/types';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-edit-invoice-page',
  templateUrl: './edit-invoice-page.component.html',
  styleUrls: ['./edit-invoice-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditInvoicePageComponent {
  protected products$: Observable<Product[]>;
  protected lineItems$: Observable<LineItem[]>;
  protected invoiceId$: Observable<number>;
  protected invoice$: Observable<Invoice>;
  protected headerData$: Observable<InvoiceHeaderCustomerData>;
  protected customerId$: Observable<number>;

  constructor(activatedRoute: ActivatedRoute, apiService: ApiService) {
    this.customerId$ = activatedRoute.params.pipe(
      map(params => Number(params['customerId']))
    );
    this.invoiceId$ = activatedRoute.params.pipe(
      map(params => Number(params['invoiceId']))
    );

    this.headerData$ = this.customerId$.pipe(
      mergeMap(customerId => apiService.getCustomerHeaderData(customerId))
    );
    this.lineItems$ = this.customerId$.pipe(
      mergeMap(customerId => apiService.getLineItemsForNewInvoice(customerId))
    );
    this.products$ = this.customerId$.pipe(
      mergeMap(customerId => apiService.getProductsForNewInvoice(customerId))
    );
    this.invoice$ = this.invoiceId$.pipe(
      mergeMap(invoiceId => apiService.getInvoice(invoiceId))
    );
  }
}
