import { takeLatest, call, put } from "redux-saga/effects";
import {
  fetchOrder,
  fetchOrderSuccess,
  fetchOrderFailure,
} from "../actions/order";
import { fetcAddOrderApi } from "../api/orderApi";

export function* workerAddOrder(action) {
  try {
    const result = yield call(fetcAddOrderApi, action.payload);
    yield put(fetchOrderSuccess(result));
  } catch (error) {
    yield put(fetchOrderFailure(error));
  }
}

export default function* watchAddOrder() {
  yield takeLatest(fetchOrder, workerAddOrder);
}
