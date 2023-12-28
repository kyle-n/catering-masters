import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LineItem } from '@shared/types';

@Component({
  selector: 'app-line-item-table',
  templateUrl: './line-item-table.component.html',
  styleUrls: ['./line-item-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LineItemTableComponent {
  @Input() lineItems: LineItem[] | null = [];
}
