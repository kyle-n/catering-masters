import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import {
  CustomerListItem,
  Invoice,
  InvoiceHeaderCustomerData,
  InvoiceListItem,
  LineItem,
  Product
} from '@shared/types';
import { Observable, map, mergeMap, zip } from 'rxjs';
import { mapCustomerToCustomerListItem } from 'src/mappers/customer-list-item.mapper';
import { mapCustomerToInvoiceHeaderCustomerData } from 'src/mappers/invoice-header-customer-data.mapper';
import { mapInvoiceToInvoiceListItem } from 'src/mappers/invoice-list-item.mapper';
import { AddressService } from 'src/services/address.service';
import { CustomerService } from 'src/services/customer.service';
import { InvoiceService } from 'src/services/invoice.service';
import { ProductService } from 'src/services/product.service';

@Controller()
export class AppController {
  constructor(
    private readonly customerService: CustomerService,
    private readonly invoiceService: InvoiceService,
    private readonly addressService: AddressService,
    private readonly productService: ProductService
  ) {}

  @Get('customers')
  getCustomers(): Observable<CustomerListItem[]> {
    return this.customerService
      .getCustomers()
      .pipe(map(customers => customers.map(mapCustomerToCustomerListItem)));
  }

  @Get('invoices')
  getInvoices(): Observable<InvoiceListItem[]> {
    return this.invoiceService
      .getInvoices()
      .pipe(map(invoices => invoices.map(mapInvoiceToInvoiceListItem)));
  }

  @Get('customers/:customerId/header-data')
  getCustomerHeaderData(
    @Param('customerId', ParseIntPipe) customerId: number
  ): Observable<InvoiceHeaderCustomerData> {
    const customer$ = this.customerService.getCustomer(customerId);
    const address$ = this.addressService.getAddress(customerId);
    return zip(customer$, address$).pipe(
      map(([customer, address]) =>
        mapCustomerToInvoiceHeaderCustomerData(customer, address)
      )
    );
  }

  @Get('invoices/line-items')
  getLineItemsForNewInvoice(
    @Query('customerId', ParseIntPipe) customerId: number
  ): Observable<LineItem[]> {
    const address$ = this.addressService.getAddress(customerId);
    return address$.pipe(
      mergeMap(address =>
        this.productService.getProductsAvailableAtAddress(address.id)
      ),
      mergeMap(products =>
        this.productService.getLineItemsForProducts(products)
      )
    );
  }

  @Get('invoices/products')
  getProductsForNewInvoice(
    @Query('customerId', ParseIntPipe) customerId: number
  ): Observable<Product[]> {
    const address$ = this.addressService.getAddress(customerId);
    return address$.pipe(
      mergeMap(address =>
        this.productService.getProductsAvailableAtAddress(address.id)
      )
    );
  }

  @Get('invoices/:invoiceId')
  getInvoice(
    @Param('invoiceId', ParseIntPipe) invoiceId: number
  ): Observable<Invoice> {
    return this.invoiceService.getInvoice(invoiceId);
  }
}
