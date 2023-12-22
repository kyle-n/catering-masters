import { createSelector } from '@ngrx/store';
import { GlobalStore } from './store';

const selectGlobalState = (state: {globalState: GlobalStore}) => state.globalState;

export const selectCustomer = createSelector(
  selectGlobalState,
  state => state.customer?.data
)
