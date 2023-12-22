import { createAction, props } from '@ngrx/store';
import { Customer } from '../types/customer';
import { Address } from '../types/address';
import { Product } from '../types/product';
import { LineItem } from '../types/invoice';

export const GetCustomer = createAction('[Customer] Get Customer', props<{ customerId: number }>());
export const GetCustomerSuccess = createAction('[Customer] Get Customer Success', props<{ customer: Customer }>());
export const GetCustomerFailure = createAction('[Customer] Get Customer Failure', props<{ error: string }>());

export const GetAddress = createAction('[Customer] Get Address', props<{ customerId: number }>());
export const GetAddressSuccess = createAction('[Customer] Get Address Success', props<{ address: Address }>());
export const GetAddressFailure = createAction('[Customer] Get Address Failure', props<{ error: string }>());

export const GetProducts = createAction('[Customer] Get Products', props<{ addressId: number }>());
export const GetProductsSuccess = createAction('[Customer] Get Products Success', props<{ products: Product[] }>());
export const GetProductsFailure = createAction('[Customer] Get Products Failure', props<{ error: string }>());

export const GetLineItemsOnCreate = createAction('[Customer] Get Line Items On Create', props<{ products: Product[] }>());
export const GetLineItemsOnCreateSuccess = createAction('[Customer] Get Line Items On Create Success', props<{ lineItems: LineItem[] }>());
export const GetLineItemsFailure = createAction('[Customer] Get Line Items Failure', props<{ error: string }>());

export const GetLineItemsOnEdit = createAction('[Customer] Get Line Items On Edit', props<{ invoiceId: number }>());
export const GetLineItemsOnEditSuccess = createAction('[Customer] Get Line Items On Edit Success', props<{ lineItems: LineItem[] }>());

export const OpenedCreateInvoicePage = createAction('[Customer] Opened Create Invoice Page', props<{ customerId: number }>());
export const OpenedEditInvoicePage = createAction('[Customer] Opened Edit Invoice Page', props<{ customerId: number, invoiceId: number }>());
