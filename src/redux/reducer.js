import { combineReducers } from "redux";
import {
  // fetchSignIn,
  fetchSignInSuccess,
  fetchSignInFailure,
  fetchSignOut,
  fetchSignUp,
  fetchAddOrder,
  fetchAddCard,
} from "./";
// import { handleAction } from "redux-actions";

export const initialState = {
  user: { success: false, token: null, error: null, isLoggedIn: false },
  newUser: { success: false, token: null, error: null, isLoggedIn: false },
  order: { street1: null, street2: null, car: null },
  card: { success: false, error: null },
};

// const user = handleAction(
//   {
//     [fetchSignInSuccess]: (state, { payload }) => ({
//       ...state,
//       ...payload,
//       isLoggedIn: payload.success,
//     }),
//     [fetchSignInFailure]: (state, { payload }) => ({
//       ...state,
//       ...payload,
//       isLoggedIn: payload.success,
//     }),
//   },
//   initialState.user
// );

function user(state = initialState.user, action) {
  switch (action.type) {
    case fetchSignInSuccess.toString():
      return {
        ...state,
        ...action.payload,
        isLoggedIn: action.payload.success,
      };
    case fetchSignInFailure.toString():
      return { ...state, ...action.payload, isLoggedIn: false };
    case fetchSignOut.toString():
      return { email: null, password: null, isLoggedIn: false };
    default:
      return state;
  }
}
function newUser(state = initialState.newUser, action) {
  switch (action.type) {
    case fetchSignUp.toString():
      return { ...state, ...action.payload };
    case fetchSignOut.toString():
      return { email: null, name: null, password: null };
    default:
      return state;
  }
}
function order(state = initialState.order, action) {
  switch (action.type) {
    case fetchAddOrder.toString():
      return { ...state, ...action.payload };
    case fetchSignOut.toString():
      return { street1: null, street2: null, car: null };
    default:
      return state;
  }
}
function card(state = initialState.card, action) {
  switch (action.type) {
    case fetchAddCard.toString():
      return { ...state, ...action.payload };
    case fetchSignOut.toString():
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
});

export default reducer;

