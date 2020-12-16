import { takeLatest, call, put } from "redux-saga/effects";
import { fetchCard, fetchCardSuccess, fetchCardFailure } from "../actions/card";
import { fetchGetCardApi } from "./api";

export function* workerGetCard(action) {
  try {
    const result = yield call(fetchGetCardApi, action.payload);
    yield put(fetchCardSuccess(result));
  } catch (error) {
    yield put(fetchCardFailure(error));
  }
}

export default function* watchGetCard() {
  yield takeLatest(fetchCard, workerGetCard);
}
