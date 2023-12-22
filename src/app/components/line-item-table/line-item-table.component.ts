import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-line-item-table',
  templateUrl: './line-item-table.component.html',
  styleUrls: ['./line-item-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LineItemTableComponent {}
