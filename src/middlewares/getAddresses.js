import {
  fetchAddressesSuccess,
  fetchAddressesFailure,
} from "../actions/addresses";
import { fetchSignIn } from "../actions/user";

export const getAddresses = (store) => (next) => (action) => {
  if (action.type === fetchSignIn.toString()) {
    fetch(`https://loft-taxi.glitch.me/addressList`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        store.dispatch(fetchAddressesSuccess(data));
      })
      .catch((error) => {
        store.dispatch(fetchAddressesFailure(error));
      });
  }

  return next(action);
};
