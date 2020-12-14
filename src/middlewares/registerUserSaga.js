import { takeLatest, call, put } from "redux-saga/effects";
import {
  fetchRegisterUser,
  // fetchRegisterUserSuccess,
  // fetchRegisterUserFailure,
  fetchSignInSuccess,
  fetchSignInFailure,
} from "../actions/user";
import {localStorageToken} from './localStorage'

const api = (data) =>
  fetch("https://loft-taxi.glitch.me/register", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());

export default function* watchRegisterUser() {
  yield takeLatest(fetchRegisterUser, function* (action) {
    try {
      const result = yield call(api, action.payload);
      localStorageToken(result, true)
      yield put(fetchSignInSuccess(result));
    } catch (error) {
      yield put(fetchSignInFailure(error));
    }
  });
}
