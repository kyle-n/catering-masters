import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerListItem, InvoiceListItem } from 'shared/types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUrl = '/api';

  constructor(
    private readonly http: HttpClient,
  ) {}

  getCustomerList(): Observable<CustomerListItem[]> {
    return this.http.get<CustomerListItem[]>(`${this.baseUrl}/customers`);
  }

  getInvoiceList(): Observable<InvoiceListItem[]> {
    return this.http.get<InvoiceListItem[]>(`${this.baseUrl}/invoices`);
  }
}
