import { takeLatest, call, put } from "redux-saga/effects";
import {
  fetchOrder,
  fetchOrderSuccess,
  fetchOrderFailure,
} from "../actions/order";

const api = (data) =>
  fetch(
    `https://loft-taxi.glitch.me/route?address1=${data.address1}&address2=${data.address2}`
  ).then((response) => response.json());

export default function* watchAddOrder() {
  yield takeLatest(fetchOrder, function* (action) {
    try {
      const result = yield call(api, action.payload);
      yield put(fetchOrderSuccess(result));
    } catch (error) {
      yield put(fetchOrderFailure(error));
    }
  });
}
