import {
  fetchSignInSuccess,
  fetchSignInFailure,
  signOutSuccess,
} from "../actions/user.js";
import { handleActions } from "redux-actions";

const { success, token } = !!localStorage.getItem("loftTaxi")
  ? JSON.parse(localStorage.getItem("loftTaxi"))
  : { success: false, token: null };

const initialState = {
  success: success,
  token: token,
  isLoggedIn: success,
};

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
  initialState
);

export default user;
