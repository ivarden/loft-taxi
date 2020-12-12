import { takeLatest, call, put } from "redux-saga/effects";
import {
  fetchRegisterUser,
  fetchRegisterUserSuccess,
  fetchRegisterUserFailure,
} from "../actions/user";

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
      yield put(fetchRegisterUserSuccess(result));
    } catch (error) {
      yield put(fetchRegisterUserFailure(error));
    }
  });
}
