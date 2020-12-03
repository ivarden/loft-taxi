import { createAction } from "redux-actions";

export const fetchSignIn = createAction("FETCH_SIGN_IN");
export const fetchSignInSuccess = createAction("FETCH_SIGN_IN_SUCCESS");
export const fetchSignInFailure = createAction("FETCH_SIGN_IN_FAILURE");

export const fetchAddresses = createAction("FETCH_ADDRESSES");
export const fetchAddressesSuccess = createAction("FETCH_ADDRESSES_SUCCESS");
export const fetchAddressesFailure = createAction("FETCH_ADDRESSES_FAILURE");

export const fetchSignUp = createAction("FETCH_SIGN_UP");

export const fetchSignOut = createAction("FETCH_SIGN_OUT");

export const fetchAddOrder = createAction("FETCH_ORDER");

export const fetchAddCard = createAction("FETCH_ADD_CARD");
