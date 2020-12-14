import {
  fetchSignInSuccess,
  fetchSignInFailure,
  signOutSuccess,
} from "../actions/user.js";
import { handleActions } from "redux-actions";

const initialState = {
  success: JSON.parse(localStorage.getItem('loftTaxi')).success || false,
  token: JSON.parse(localStorage.getItem('loftTaxi')).token || null,
  isLoggedIn: JSON.parse(localStorage.getItem('loftTaxi')).success || false,
  error: null,
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
