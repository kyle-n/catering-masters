import { Observable, of } from 'rxjs';
import { Address } from '../types/address';
import mockAddress from '../mock-data/address';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AddressService {
  getAddress(customerId: number): Observable<Address> {
    return of(mockAddress);
  }
}
