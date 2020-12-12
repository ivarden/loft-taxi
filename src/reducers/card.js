import {
  fetchCardSuccess,
  fetchCardFailure,
  fetchAddCardSuccess,
  fetchAddCardFailure,
} from "../actions/card";
import { signOutSuccess } from "../actions/user";
import { handleActions } from "redux-actions";

const card = handleActions(
  {
    [fetchCardSuccess]: (state, { payload }) => ({ ...payload }),
    [fetchCardFailure]: (state, { payload }) => ({ ...payload }),
    [fetchAddCardSuccess]: (state, { payload }) => ({ ...payload }),
    [fetchAddCardFailure]: (state, { payload }) => ({ ...payload }),
    [signOutSuccess]: (state, { payload }) => ({}),
  },

  {
    id: null,
    cardNumber: null,
    expiryDate: null,
    cardName: null,
    cvc: null,
    error: null,
  }
);

export default card;
