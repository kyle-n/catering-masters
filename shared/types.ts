export type CustomerListItem = {
  id: number;
  name: string;
}

export type InvoiceListItem = {
  id: number;
  customerId: number;
}

export type InvoiceHeaderCustomerData = {
  name: string;
  street: string;
  city: string;
}
