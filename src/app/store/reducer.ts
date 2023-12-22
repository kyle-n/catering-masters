import { createReducer, on } from '@ngrx/store';
import { initialState } from './store';
import { GetAddress, GetAddressFailure, GetAddressSuccess, GetCustomer, GetCustomerFailure, GetCustomerSuccess, GetInvoice, GetInvoiceFailure, GetInvoiceSuccess, GetLineItemsFailure, GetLineItemsOnCreate, GetLineItemsOnCreateSuccess, GetLineItemsOnEdit, GetLineItemsOnEditSuccess, GetProducts, GetProductsFailure, GetProductsSuccess } from './actions';

export const reducer = createReducer(
  initialState,
  on(GetCustomer, state => ({
    ...state,
    customer: {
      loading: true
    }
  })),
  on(GetCustomerSuccess, (state, { customer }) => ({
    ...state,
    customer: {
      loading: false,
      data: customer
    }
  })),
  on(GetCustomerFailure, (state, { error }) => ({
    ...state,
    customer: {
      loading: false,
      error
    }
  })),
  on(GetAddress, state => ({
    ...state,
    address: {
      loading: true
    }
  })),
  on(GetAddressSuccess, (state, { address }) => ({
    ...state,
    address: {
      loading: false,
      data: address
    }
  })),
  on(GetAddressFailure, (state, { error }) => ({
    ...state,
    address: {
      loading: false,
      error
    }
  })),
  on(GetProducts, state => ({
    ...state,
    products: {
      loading: true
    }
  })),
  on(GetProductsSuccess, (state, { products }) => ({
    ...state,
    products: {
      loading: false,
      data: products
    }
  })),
  on(GetProductsFailure, (state, { error }) => ({
    ...state,
    products: {
      loading: false,
      error
    }
  })),
  on(GetLineItemsOnCreate, state => ({
    ...state,
    lineItems: {
      loading: true
    }
  })),
  on(GetLineItemsOnCreateSuccess, (state, { lineItems }) => ({
    ...state,
    lineItems: {
      loading: false,
      data: lineItems
    }
  })),
  on(GetLineItemsFailure, (state, { error }) => ({
    ...state,
    lineItems: {
      loading: false,
      error
    }
  })),
  on(GetLineItemsOnEdit, state => ({
    ...state,
    lineItems: {
      loading: true
    }
  })),
  on(GetLineItemsOnEditSuccess, (state, { lineItems }) => ({
    ...state,
    lineItems: {
      loading: false,
      data: lineItems
    }
  })),
  on(GetInvoice, state => ({
    ...state,
    invoice: {
      loading: true
    }
  })),
  on(GetInvoiceSuccess, (state, { invoice }) => ({
    ...state,
    invoice: {
      loading: false,
      data: invoice
    }
  })),
  on(GetInvoiceFailure, (state, { error }) => ({
    ...state,
    invoice: {
      loading: false,
      error
    }
  }))
)
