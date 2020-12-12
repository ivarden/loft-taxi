import {
  fetchSignInSuccess,
  fetchSignInFailure,
  signOutSuccess,
} from "../actions/user.js";
import { handleActions } from "redux-actions";

const user = handleActions(
  {
    [fetchSignInSuccess]: (state, { payload }) => ({
      ...state,
      ...payload,
      isLoggedIn: payload.success,
    }),
    [fetchSignInFailure]: (state, { payload }) => ({
      ...state,
      ...payload,
      isLoggedIn: payload.success,
    }),
    [signOutSuccess]: (state, { payload }) => ({
      ...state,
      success: false,
      isLoggedIn: false,
      token: null,
      error: null,
    }),
  },
  { success: false, token: null, error: null, isLoggedIn: false }
);

export default user;
