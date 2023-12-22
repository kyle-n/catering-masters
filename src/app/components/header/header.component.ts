import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Address } from 'src/app/types/address';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Input() address: Address | null | undefined;
  @Input() customerName: string | null | undefined;
}
