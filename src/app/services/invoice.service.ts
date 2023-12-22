import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Invoice } from '../types/invoice';
import mockInvoice from '../mock-data/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  getInvoice(id: number): Observable<Invoice> {
    return of(mockInvoice);
  }
}
