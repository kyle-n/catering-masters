import { Invoice, InvoiceListItem } from '@shared/types';

export function mapInvoiceToInvoiceListItem(invoice: Invoice): InvoiceListItem {
  return {
    id: invoice.id,
    customerId: invoice.customerId
  };
}
