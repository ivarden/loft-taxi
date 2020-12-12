import { takeLatest, call, put } from "redux-saga/effects";
import {
  fetchAddressesSuccess,
  fetchAddressesFailure,
} from "../actions/addresses";
import { fetchSignIn } from "../actions/user";

const api = (data) =>
  fetch(`https://loft-taxi.glitch.me/addressList`).then((response) =>
    response.json()
  );

export default function* watchGetAddresses() {
  yield takeLatest(fetchSignIn, function* (action) {
    try {
      const result = yield call(api, action.payload);
      yield put(fetchAddressesSuccess(result));
    } catch (error) {
      yield put(fetchAddressesFailure(error));
    }
  });
}
