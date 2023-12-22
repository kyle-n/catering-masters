import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-view-invoice-page',
  templateUrl: './view-invoice-page.component.html',
  styleUrls: ['./view-invoice-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewInvoicePageComponent {}
