import { CustomerListItem } from '@shared/types';
import { Customer } from '../types/customer';

export function mapCustomerToCustomerListItem(
  customer: Customer
): CustomerListItem {
  return {
    id: customer.id,
    name: customer.name
  };
}
