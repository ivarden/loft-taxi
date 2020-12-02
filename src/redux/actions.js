import { createAction } from "redux-actions";

export const fetchSignIn = createAction("FETCH_SIGN_IN");
export const fetchSignInFailure = createAction("FETCH_SIGN_IN_FAILURE");
export const fetchSignUp = createAction("FETCH_SIGN_UP");
export const fetchSignOut = createAction("FETCH_SIGN_OUT");
export const fetchAddOrder = createAction("FETCH_ORDER");
export const fetchAddCard = createAction("FETCH_ADD_CARD");
