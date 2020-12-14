import { createAction } from "redux-actions";

export const fetchAddresses = createAction("FETCH_ADDRESSES");
export const fetchAddressesSuccess = createAction("FETCH_ADDRESSES_SUCCESS");
export const fetchAddressesFailure = createAction("FETCH_ADDRESSES_FAILURE");