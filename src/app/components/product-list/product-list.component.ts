import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '@shared/types';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  @Input() products: Product[] | null | undefined = null;
}
