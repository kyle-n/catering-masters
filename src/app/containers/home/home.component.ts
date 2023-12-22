import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { InvoiceService } from 'src/app/services/invoice.service';
import { Invoice } from 'src/app/types/invoice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HomeComponent {
  protected invoices$: Observable<Invoice[]>;

  constructor(invoiceService: InvoiceService) {
    this.invoices$ = invoiceService.getInvoices();
  }
}
