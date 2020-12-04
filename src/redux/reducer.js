import { combineReducers } from "redux";
import {
  // fetchSignIn,
  fetchSignInSuccess,
  fetchSignInFailure,
  // fetchAddresses
  fetchAddressesSuccess,
  fetchAddressesFailure,
  // fetchRegisterUser,
  fetchRegisterUserSuccess,
  fetchRegisterUserFailure,
  // fetchCard,
  fetchCardSuccess,
  fetchCardFailure,
  // fetchOrder,
  fetchOrderSuccess,
  fetchOrderFailure,
  fetchSignOut,
} from "./";
import { handleActions } from "redux-actions";

export const initialState = {
  user: { success: false, token: null, error: null, isLoggedIn: false },
  newUser: {},
  order: { street1: null, street2: null, car: null },
  card: { success: false, error: null },
  addresses: [],
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
    [fetchSignOut]: (state, { payload }) => ({
      ...state,
      ...payload,
      isLoggedIn: false,
    }),
  },
  initialState.user
);
const addresses = handleActions(
  {
    [fetchAddressesSuccess]: (state, { payload }) => ({ ...payload }),
    [fetchAddressesFailure]: (state, { payload }) => ({ ...payload }),
    [fetchSignOut]: (state, { payload }) => ({}),
  },
  initialState.addresses
);
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
    [fetchSignOut]: (state, { payload }) => ({}),
  },
  initialState.newUser
);

function order(state = initialState.order, action) {
  switch (action.type) {
    case fetchOrderSuccess.toString():
      return { ...state, ...action.payload };
    case fetchOrderFailure.toString():
      return { street1: null, street2: null, car: null };
    default:
      return state;
  }
}
function card(state = initialState.card, action) {
  switch (action.type) {
    case fetchCardSuccess.toString():
      return { ...state, ...action.payload };
    case fetchCardFailure.toString():
      return { number: null, name: null, expiry: null, cvc: null };
    default:
      return state;
  }
}

const reducer = combineReducers({
  user,
  newUser,
  order,
  card,
  addresses,
});

export default reducer;
