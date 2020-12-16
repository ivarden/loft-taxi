import { createAction } from "redux-actions";

export const fetchSignIn = createAction("FETCH_SIGN_IN");
export const fetchSignInSuccess = createAction("FETCH_SIGN_IN_SUCCESS");
export const fetchSignInFailure = createAction("FETCH_SIGN_IN_FAILURE");

export const fetchRegisterUser = createAction("FETCH_REGISTER_USER");
export const fetchRegisterUserSuccess = createAction(
  "FETCH_REGISTER_USER_SUCCESS"
);
export const fetchRegisterUserFailure = createAction(
  "FETCH_REGISTER_USER_FAILURE"
);

export const signOut = createAction("SIGN_OUT");
export const signOutSuccess = createAction("SIGN_OUT_SUCCESS");
