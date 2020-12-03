import {
  fetchSignIn,
  fetchSignInSuccess,
  fetchSignInFailure,
  // fetchAddresses,
  fetchAddressesSuccess,
  fetchAddressesFailure,
} from "./";

export const authUser = (store) => (next) => (action) => {
  if (action.type === fetchSignIn.toString()) {
    fetch(
      `https://loft-taxi.glitch.me/auth?username=${action.payload.email}&password=${action.payload.password}`
      // {
      //   method: "GET",
      //   mode: 'no-cors',
      //   credentials: 'same-origin',
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // }
    )
      .then((response) => response.json())
      .then((data) => {
        if (!!data.error && data.error !== null) alert(data.error);
        store.dispatch(fetchSignInSuccess(data));
      })
      .catch((error) => {
        store.dispatch(fetchSignInFailure(error));
      });
  }

  return next(action);
};

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
