import { Observable, of } from 'rxjs';
import mockProducts from '../mock-data/products';
import { Injectable } from '@nestjs/common';
import { Product, LineItem } from '@shared/types';

@Injectable()
export class ProductService {
  getProductsAvailableAtAddress(addressId: number): Observable<Product[]> {
    return of(mockProducts);
  }

  getLineItemsForProducts(products: Product[]): Observable<LineItem[]> {
    return of(
      products.map(product => ({
        id: Math.random(),
        productId: product.id,
        name: product.name,
        quantity: 1,
        unitPrice: product.price
      }))
    );
  }
}
