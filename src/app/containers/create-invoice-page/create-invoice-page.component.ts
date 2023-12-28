import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { InvoiceHeaderCustomerData, LineItem, Product } from 'shared/types';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-create-invoice-page',
  templateUrl: './create-invoice-page.component.html',
  styleUrls: ['./create-invoice-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateInvoicePageComponent {
  protected headerData$: Observable<InvoiceHeaderCustomerData>;
  protected customerId$: Observable<number>;
  protected lineItems$: Observable<LineItem[]>;
  protected products$: Observable<Product[]>;

  constructor(
    apiService: ApiService,
    activatedRoute: ActivatedRoute
  ) {
    this.customerId$ = activatedRoute.params.pipe(
      map(params => Number(params['customerId']))
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
  }
}
