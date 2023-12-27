import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerListItem, InvoiceListItem } from 'shared/types';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HomeComponent {
  protected invoices$: Observable<InvoiceListItem[]>;
  protected customers$: Observable<CustomerListItem[]>;

  constructor(apiService: ApiService) {
    this.invoices$ = apiService.getInvoiceList();
    this.customers$ = apiService.getCustomerList();
  }
}
