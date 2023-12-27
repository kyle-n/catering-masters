import { Observable, of } from 'rxjs';
import { Invoice } from '../types/invoice';
import mockInvoice from '../mock-data/invoice';
import { Injectable } from '@nestjs/common';

@Injectable()
export class InvoiceService {
  getInvoice(id: number): Observable<Invoice> {
    return of(mockInvoice);
  }

  getInvoices(): Observable<Invoice[]> {
    return of([mockInvoice]);
  }
}
