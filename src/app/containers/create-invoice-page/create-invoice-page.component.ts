import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { AddressService } from 'src/app/services/address.service';
import { CustomerService } from 'src/app/services/customer.service';
import { ProductService } from 'src/app/services/product.service';
import { Address } from 'src/app/types/address';
import { Customer } from 'src/app/types/customer';
import { LineItem } from 'src/app/types/invoice';
import { Product } from 'src/app/types/product';
import { Store } from '@ngrx/store';
import { GetCustomer } from 'src/app/store/actions';

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

  private customerId$: Observable<number>;

  constructor(
    customerService: CustomerService,
    addressService: AddressService,
    productService: ProductService,
    activatedRoute: ActivatedRoute,
    private store: Store
  ) {
    this.customerId$ = activatedRoute.params.pipe(
      map(params => Number(params['customerId']))
    );
    this.customerId$.subscribe(customerId =>
      this.store.dispatch(GetCustomer({ customerId }))
    );

    this.customer$ = this.customerId$.pipe(
      mergeMap(customerId => customerService.getCustomer(customerId))
    );
    this.address$ = this.customerId$.pipe(
      mergeMap(customerId => addressService.getAddress(customerId))
    );
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
