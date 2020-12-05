import { fetchSignInSuccess, fetchSignInFailure, fetchSignOut } from "../actions/user.js";
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
    [fetchSignOut]: (state, { payload }) => ({
      ...state,
      ...payload,
      isLoggedIn: false,
    }),
  },
  { success: false, token: null, error: null, isLoggedIn: false }
);

export default user;
