import { Invoice } from '@shared/types';

const mockInvoice: Invoice = {
  id: 1,
  customerId: 2,
  discount: 20,
  total: 100,
  date: '2023-01-01',
  lineItems: [
    {
      id: 3,
      invoiceId: 1,
      productId: 4,
      name: 'Chicken Parmesan',
      quantity: 50,
      unitPrice: 15
    },
    {
      id: 4,
      invoiceId: 1,
      productId: 5,
      name: 'Salad',
      quantity: 50,
      unitPrice: 5
    },
    {
      id: 5,
      invoiceId: 1,
      productId: 6,
      name: 'Rolls',
      quantity: 50,
      unitPrice: 2
    }
  ]
};

export default mockInvoice;
