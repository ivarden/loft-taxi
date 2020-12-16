import { takeLatest, call, put } from "redux-saga/effects";
import {
  fetchAddressesSuccess,
  fetchAddressesFailure,
} from "../actions/addresses";
import { fetchAddresses } from "../actions/addresses";
import { fetchAddressesApi } from "./api";

export function* workerFetchAddresses (action) {
  try {
    const result = yield call(fetchAddressesApi, action.payload);
    yield put(fetchAddressesSuccess(result));
  } catch (error) {
    yield put(fetchAddressesFailure(error));
  }
}

export default function* watchGetAddresses() {
  yield takeLatest(fetchAddresses, workerFetchAddresses);
}
