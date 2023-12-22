import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-edit-invoice-page',
  templateUrl: './edit-invoice-page.component.html',
  styleUrls: ['./edit-invoice-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditInvoicePageComponent {}
