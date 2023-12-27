import { InvoiceListItem } from '@shared/types';
import { Invoice } from 'src/types/invoice';

export function mapInvoiceToInvoiceListItem(invoice: Invoice): InvoiceListItem {
  return {
    id: invoice.id,
    customerId: invoice.customerId
  };
}
