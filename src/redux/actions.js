export const SIGN_IN = "SIGN_IN";
export const SIGN_UP = "SIGN_UP";
export const SIGN_OUT = "SIGN_OUT";
export const ORDER = "ORDER";
export const ADD_CARD = "ADD_CARD";

export function signIn(payload) {
  return { type: SIGN_IN, payload };
}

export function signUp(payload) {
  return { type: SIGN_UP, payload };
}

export function signOut() {
  return { type: SIGN_OUT };
}

export function order(payload) {
  return { type: ORDER, payload };
}

export function addCard(payload) {
  return { type: ADD_CARD, payload };
}
