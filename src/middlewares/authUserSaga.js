import { takeLatest, call, put } from "redux-saga/effects";
import {
  fetchSignIn,
  fetchSignInSuccess,
  fetchSignInFailure,
  signOut,
  signOutSuccess,
} from "../actions/user";
import { fetchSignInApi } from "./api";
import { localStorageToken } from "./localStorage";

export function* workerSignInSaga(action) {
  try {
    const result = yield call(fetchSignInApi, action.payload);
    localStorageToken(result, true);
    yield put(fetchSignInSuccess(result));
  } catch (error) {
    yield put(fetchSignInFailure(error));
  }
}

export function* workerSignOut(action) {
  localStorageToken(null, false);
  yield put(signOutSuccess());
}

export default function* watchAuthUser() {
  yield takeLatest(fetchSignIn, workerSignInSaga);
  yield takeLatest(signOut, workerSignOut);
}
