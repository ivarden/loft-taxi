import { takeLatest, call, put } from "redux-saga/effects";
import {
  fetchAddressesSuccess,
  fetchAddressesFailure,
} from "../actions/addresses";
import { fetchSignIn, fetchRegisterUser } from "../actions/user";
import { fetchAddresses } from "../actions/addresses";

const api = (data) =>
  fetch(`https://loft-taxi.glitch.me/addressList`).then((response) =>
    response.json()
  );

export default function* watchGetAddresses() {
  yield takeLatest([fetchSignIn, fetchRegisterUser, fetchAddresses], function* (action) {
    try {
      const result = yield call(api, action.payload);
      yield put(fetchAddressesSuccess(result));
    } catch (error) {
      yield put(fetchAddressesFailure(error));
    }
  });
}
