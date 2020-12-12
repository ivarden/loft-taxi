import { takeLatest, call, put } from "redux-saga/effects";
import {
  fetchAddCard,
  fetchAddCardSuccess,
  fetchAddCardFailure,
} from "../actions/card";

const api = (data) =>
  fetch(`https://loft-taxi.glitch.me/card`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());

export default function* watchAddCard() {
  yield takeLatest(fetchAddCard, function* (action) {
    try {
      const result = yield call(api, action.payload);
      yield put(fetchAddCardSuccess(result));
    } catch (error) {
      yield put(fetchAddCardFailure(error));
    }
  });
}
