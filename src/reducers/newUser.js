import {
  fetchRegisterUserSuccess,
  fetchRegisterUserFailure,
} from "../actions/user";
import { signOutSuccess } from "../actions/user";
import { handleActions } from "redux-actions";

const newUser = handleActions(
  {
    [fetchRegisterUserSuccess]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    [fetchRegisterUserFailure]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    [signOutSuccess]: (state, { payload }) => ({
      ...state,
      success: false,
      token: null,
    }),
  },
  { success: false, token: null }
);

export default newUser;
