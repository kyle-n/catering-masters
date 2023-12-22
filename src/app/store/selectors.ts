import { createSelector } from '@ngrx/store';
import { GlobalStore } from './store';

const selectGlobalState = (state: {globalState: GlobalStore}) => state.globalState;

export const selectCustomer = createSelector(
  selectGlobalState,
  state => state.customer?.data
)

export const selectAddress = createSelector(
  selectGlobalState,
  state => state.address?.data
)
