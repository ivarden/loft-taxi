import { combineReducers } from "redux";
import { SIGN_IN, SIGN_UP, SIGN_OUT, ORDER, ADD_CARD } from "./actions";

export const initialState = {
  user: { email: null, password: null, isLoggedIn: false },
  newUser: { email: null, name: null, password: null },
  order: { street1: null, street2: null, car: null },
  card: { number: null, name: null, expiry: null, cvc: null },
};

function user(state = initialState.user, action) {
//   console.log('user ', action);
  switch (action.type) {
    case SIGN_IN:
      return { ...state, ...action.payload, isLoggedIn: true };
    case SIGN_OUT:
      return { email: null, password: null, isLoggedIn: false };
    default:
      return state;
  }
}
function newUser(state = initialState.newUser, action) {
    // console.log('newUser ', action);
  switch (action.type) {
    case SIGN_UP:
      return { ...state, ...action.payload };
    case SIGN_OUT:
      return { email: null, name: null, password: null };
    default:
      return state;
  }
}
function order(state = initialState.order, action) {
    // console.log('order ', action);
  switch (action.type) {
    case ORDER:
      return { ...state, ...action.payload };
    case SIGN_OUT:
      return { street1: null, street2: null, car: null };
    default:
      return state;
  }
}
function card(state = initialState.card, action) {
    // console.log('card ', action);
  switch (action.type) {
    case ADD_CARD:
      return { ...state, ...action.payload };
    case SIGN_OUT:
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
