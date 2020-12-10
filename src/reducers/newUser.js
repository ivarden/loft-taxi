import {
  fetchRegisterUserSuccess,
  fetchRegisterUserFailure,
} from "../actions/user";
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
  },
  { success: null, token: null }
);

export default newUser;
