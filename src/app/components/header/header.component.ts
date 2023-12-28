import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { InvoiceHeaderCustomerData } from '@shared/types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Input() customerData: InvoiceHeaderCustomerData | null | undefined;
}
