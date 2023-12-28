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

export type Invoice = {
  id: number;
  customerId: number;
  discount?: number;
  total: number;
  date: string;
  lineItems: Array<LineItem>;
};

export type LineItem = {
  id: number;
  invoiceId?: number;
  productId: number;
  name: string;
  quantity: number;
  unitPrice: number;
};

export type Product = {
  id: number;
  name: string;
  price: number;
};
