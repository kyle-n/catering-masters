import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { ProductService } from 'src/app/services/product.service';
import { Address } from 'src/app/types/address';
import { Customer } from 'src/app/types/customer';
import { LineItem } from 'src/app/types/invoice';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-create-invoice-page',
  templateUrl: './create-invoice-page.component.html',
  styleUrls: ['./create-invoice-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateInvoicePageComponent {
  protected customer$: Observable<Customer>;
  protected address$: Observable<Address>;
  protected products$: Observable<Product[]>;
  protected lineItems$: Observable<LineItem[]>;

  constructor(productService: ProductService, activatedRoute: ActivatedRoute) {
    this.customer$ = activatedRoute.data.pipe(map(data => data['customer']));
    this.address$ = activatedRoute.data.pipe(map(data => data['address']));

    this.products$ = this.address$.pipe(
      mergeMap(address =>
        productService.getProductsAvailableAtAddress(address.id)
      )
    );
    this.lineItems$ = this.products$.pipe(
      mergeMap(products => productService.getLineItemsForProducts(products))
    );
  }
}
