import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-submit-buttons',
  templateUrl: './submit-buttons.component.html',
  styleUrls: ['./submit-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubmitButtonsComponent {
  @Input() customerId: number | null | undefined = null;
  @Input() invoiceId: number | null = null;
}
