import { Observable, of } from 'rxjs';
import mockInvoice from '../mock-data/invoice';
import { Injectable } from '@nestjs/common';
import { Invoice } from '@shared/types';

@Injectable()
export class InvoiceService {
  getInvoice(id: number): Observable<Invoice> {
    return of(mockInvoice);
  }

  getInvoices(): Observable<Invoice[]> {
    return of([mockInvoice]);
  }
}
