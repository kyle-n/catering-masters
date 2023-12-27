import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Address } from '../types/address';
import mockAddress from '../mock-data/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  getAddress(customerId: number): Observable<Address> {
    return of(mockAddress);
  }
}
