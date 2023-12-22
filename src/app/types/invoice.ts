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
