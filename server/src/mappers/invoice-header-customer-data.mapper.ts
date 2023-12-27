import { InvoiceHeaderCustomerData } from '@shared/types';
import { Address } from 'src/types/address';
import { Customer } from 'src/types/customer';

export function mapCustomerToInvoiceHeaderCustomerData(
  customer: Customer,
  address: Address
): InvoiceHeaderCustomerData {
  return {
    name: customer.name,
    street: address.street,
    city: address.city
  };
}
