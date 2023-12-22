import { Address } from '../types/address';
import { Customer } from '../types/customer';
import { Invoice } from '../types/invoice';
import { Product } from '../types/product';

export type GlobalStore = {
  customer?: AsyncEntity<Customer>;
  address?: AsyncEntity<Address>;
  products?: AsyncEntity<Product[]>;
  invoice?: AsyncEntity<Invoice>;
}

type AsyncEntity<T> = {
  loading: boolean;
  error?: string;
  data?: T;
}

export const initialState: GlobalStore = {
  customer: {
    loading: false
  },
  address: {
    loading: false
  },
  products: {
    loading: false
  },
  invoice: {
    loading: false
  }
};
