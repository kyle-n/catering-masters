import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import {
  CustomerListItem,
  InvoiceListItem,
  InvoiceHeaderCustomerData
} from 'shared/types';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-create-invoice-page',
  templateUrl: './create-invoice-page.component.html',
  styleUrls: ['./create-invoice-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateInvoicePageComponent {
  protected headerData$: Observable<InvoiceHeaderCustomerData>;

  private customerId$: Observable<number>;

  constructor(private apiService: ApiService) {
    this.customerId$ = activatedRoute.params.pipe(
      map(params => Number(params['customerId']))
    );

    this.headerData$ = this.customerId$.pipe(
      mergeMap(customerId => this.apiService.getCustomerHeaderData(customerId))
    );
  }
}
