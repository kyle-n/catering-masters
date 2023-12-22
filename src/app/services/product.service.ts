import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../types/product';
import mockProducts from '../mock-data/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(): Observable<Product[]> {
    return of(mockProducts);
  }
}
