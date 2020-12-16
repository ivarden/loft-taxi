import { takeLatest, call, put } from "redux-saga/effects";
import {
  fetchRegisterUser,
  fetchSignInSuccess,
  fetchSignInFailure,
} from "../actions/user";
import { localStorageToken } from "./localStorage";
import { fetchRegisterUserApi } from "./api";

export function* workerhRegisterUser(action) {
  try {
    const result = yield call(fetchRegisterUserApi, action.payload);
    localStorageToken(result, true);
    yield put(fetchSignInSuccess(result));
  } catch (error) {
    yield put(fetchSignInFailure(error));
  }
}

export default function* watchRegisterUser() {
  yield takeLatest(fetchRegisterUser, workerhRegisterUser);
}
