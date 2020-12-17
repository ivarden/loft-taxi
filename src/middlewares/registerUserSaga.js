import { takeLatest, call, put } from "redux-saga/effects";
import {
  fetchRegisterUser,
  fetchRegisterUserSuccess,
  fetchRegisterUserFailure,
} from "../actions/user";
import { localStorageTokenNewUser } from "./localStorage";
import { fetchRegisterUserApi } from "./api";

export function* workerhRegisterUser(action) {
  try {
    const result = yield call(fetchRegisterUserApi, action.payload);
    localStorageTokenNewUser(result, action.payload);
    yield put(fetchRegisterUserSuccess(result));
  } catch (error) {
    yield put(fetchRegisterUserFailure(error));
  }
}

export default function* watchRegisterUser() {
  yield takeLatest(fetchRegisterUser, workerhRegisterUser);
}
