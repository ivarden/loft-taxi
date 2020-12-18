import { takeLatest, call, put } from "redux-saga/effects";
import {
  fetchAddCard,
  fetchAddCardSuccess,
  fetchAddCardFailure,
} from "../actions/card";
import { fetchAddCardApi } from "../api/cardApi";

export function* workerAddCard(action) {
  try {
    const result = yield call(fetchAddCardApi, action.payload);
    yield put(fetchAddCardSuccess(result));
  } catch (error) {
    yield put(fetchAddCardFailure(error));
  }
}

export default function* watchAddCard() {
  yield takeLatest(fetchAddCard, workerAddCard);
}
