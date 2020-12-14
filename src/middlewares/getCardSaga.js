import { takeLatest, call, put } from "redux-saga/effects";
import { fetchCard, fetchCardSuccess, fetchCardFailure } from "../actions/card";
// import { fetchSignIn, fetchRegisterUser } from "../actions/user";
import { getCardApi } from "./api";

export default function* watchGetCard() {
  yield takeLatest(fetchCard, function* (action) {
    try {
      const result = yield call(getCardApi, action.payload);
      yield put(fetchCardSuccess(result));
    } catch (error) {
      yield put(fetchCardFailure(error));
    }
  });
}
