import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CustomerListItem,
  InvoiceListItem,
  InvoiceHeaderCustomerData,
  LineItem,
  Product,
  Invoice
} from '@shared/types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUrl = '/api';

  constructor(private readonly http: HttpClient) {}

  getCustomerList(): Observable<CustomerListItem[]> {
    return this.http.get<CustomerListItem[]>(`${this.baseUrl}/customers`);
  }

  getInvoiceList(): Observable<InvoiceListItem[]> {
    return this.http.get<InvoiceListItem[]>(`${this.baseUrl}/invoices`);
  }

  getCustomerHeaderData(
    customerId: number
  ): Observable<InvoiceHeaderCustomerData> {
    return this.http.get<InvoiceHeaderCustomerData>(
      `${this.baseUrl}/customers/${customerId}/header-data`
    );
  }

  getLineItemsForNewInvoice(customerId: number): Observable<LineItem[]> {
    return this.http.get<LineItem[]>(
      `${this.baseUrl}/invoices/line-items?customerId=${customerId}`
    );
  }

  getProductsForNewInvoice(customerId: number): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${this.baseUrl}/invoices/products?customerId=${customerId}`
    );
  }

  getInvoice(invoiceId: number): Observable<Invoice> {
    return this.http.get<Invoice>(`${this.baseUrl}/invoices/${invoiceId}`);
  }
}
