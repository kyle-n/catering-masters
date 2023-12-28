import { Customer } from '../types/customer';

const mockCustomer: Customer = {
  id: 2,
  name: 'Foo Restaurant & Bar',
  createdAt: '2020-01-01T00:00:00.000Z',
  updatedAt: '2020-01-01T00:00:00.000Z',
  lastInvoiceId: 1,
  lastInvoiceDate: '2020-01-01T00:00:00.000Z',
  ownerName: 'John Doe',
  ownerEmail: 'johndoe@foobar.com'
};

export default mockCustomer;
