import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, mergeMap } from 'rxjs';
import { AddressService } from 'src/app/services/address.service';
import { CustomerService } from 'src/app/services/customer.service';
import { InvoiceService } from 'src/app/services/invoice.service';
import { ProductService } from 'src/app/services/product.service';
import { Address } from 'src/app/types/address';
import { Customer } from 'src/app/types/customer';
import { Invoice, LineItem } from 'src/app/types/invoice';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-edit-invoice-page',
  templateUrl: './edit-invoice-page.component.html',
  styleUrls: ['./edit-invoice-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditInvoicePageComponent {
  protected customer$: Observable<Customer>;
  protected address$: Observable<Address>;
  protected products$: Observable<Product[]>;
  protected lineItems$: Observable<LineItem[]>;
  protected invoiceId$: Observable<number>;
  protected invoice$: Observable<Invoice>;

  private customerId$: Observable<number>;

  constructor(
    customerService: CustomerService,
    addressService: AddressService,
    productService: ProductService,
    invoiceService: InvoiceService,
    activatedRoute: ActivatedRoute
  ) {
    this.customerId$ = activatedRoute.params.pipe(
      map(params => Number(params['customerId']))
    );
    this.invoiceId$ = activatedRoute.params.pipe(
      map(params => Number(params['invoiceId']))
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
    this.invoice$ = this.invoiceId$.pipe(
      mergeMap(invoiceId => invoiceService.getInvoice(invoiceId))
    );
    this.lineItems$ = this.invoice$.pipe(map(invoice => invoice.lineItems));
  }
}
