import { takeLatest, call, put } from "redux-saga/effects";
import {
  fetchSignIn,
  fetchSignInSuccess,
  fetchSignInFailure,
  signOut,
  signOutSuccess,
} from "../actions/user";
import { signInApi } from "./api";
import {localStorageToken} from './localStorage'

export function* requestSignInSaga(action) {
  try {
    const result = yield call(signInApi, action.payload);
    localStorageToken(result, true);
    yield put(fetchSignInSuccess(result));
  } catch (error) {
    yield put(fetchSignInFailure(error));
  }
}

export function* requestSignOut(action) {
  localStorageToken(null, false);
  yield put(signOutSuccess());
}

export default function* watchAuthUser() {
  yield takeLatest(fetchSignIn, requestSignInSaga);
  yield takeLatest(signOut, requestSignOut);
}
