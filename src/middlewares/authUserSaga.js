import { takeLatest, call, put } from "redux-saga/effects";
import {
  fetchSignIn,
  fetchSignInSuccess,
  fetchSignInFailure,
  signOut,
  signOutSuccess,
} from "../actions/user";

// const api = async (data) => {
//   const response = await (
//     await fetch(`https://loft-taxi.glitch.me/auth1`, {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//   ).json();
//   if (!response.success) throw new Error(response.error);
//   return response;
// };

export const api = (data) =>
  fetch(`https://loft-taxi.glitch.me/auth`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());

export function* requestSignIn(action) {
  try {
    const result = yield call(api, action.payload);
    yield put(fetchSignInSuccess(result));
  } catch (error) {
    yield put(fetchSignInFailure(error));
  }
}

export function* requestSignOut(action) {
  yield put(signOutSuccess());
}

export default function* watchAuthUser() {
  yield takeLatest(fetchSignIn, requestSignIn);
  yield takeLatest(signOut, requestSignOut);
}
