import { takeLatest, call, put } from "redux-saga/effects";
import { fetchCard, fetchCardSuccess, fetchCardFailure } from "../actions/card";

const api = (data) =>
  fetch(`https://loft-taxi.glitch.me/card?token=${data}`).then((response) =>
    response.json()
  );

export default function* watchGetCard() {
  yield takeLatest(fetchCard, function* (action) {
    try {
      const result = yield call(api, action.payload);
      yield put(fetchCardSuccess(result));
    } catch (error) {
      yield put(fetchCardFailure(error));
    }
  });
}
