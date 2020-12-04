import { createAction } from "redux-actions";

export const fetchSignIn = createAction("FETCH_SIGN_IN");
export const fetchSignInSuccess = createAction("FETCH_SIGN_IN_SUCCESS");
export const fetchSignInFailure = createAction("FETCH_SIGN_IN_FAILURE");

export const fetchAddresses = createAction("FETCH_ADDRESSES");
export const fetchAddressesSuccess = createAction("FETCH_ADDRESSES_SUCCESS");
export const fetchAddressesFailure = createAction("FETCH_ADDRESSES_FAILURE");

export const fetchRegisterUser = createAction("FETCH_REGISTER_USER");
export const fetchRegisterUserSuccess = createAction("FETCH_REGISTER_USER_SUCCESS");
export const fetchRegisterUserFailure = createAction("FETCH_REGISTER_USER_FAILURE");

export const fetchCard = createAction("FETCH_CARD");
export const fetchCardSuccess = createAction("FETCH_CARD_SUCCESS");
export const fetchCardFailure = createAction("FETCH_CARD_FAILURE");

export const fetchOrder = createAction("FETCH_ORDER");
export const fetchOrderSuccess = createAction("FETCH_ORDER");
export const fetchOrderFailure = createAction("FETCH_ORDER");

export const fetchSignOut = createAction("FETCH_SIGN_OUT");


export const fetchAddCard = createAction("FETCH_ADD_CARD");
