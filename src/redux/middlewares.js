import {
  fetchSignIn,
  fetchSignInSuccess,
  fetchSignInFailure,
  // fetchAddresses,
  fetchAddressesSuccess,
  fetchAddressesFailure,
  fetchRegisterUser,
  fetchRegisterUserSuccess,
  fetchRegisterUserFailure,
  fetchCard,
  fetchCardSuccess,
  fetchCardFailure,
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

export const registerUser = (store) => (next) => (action) => {
  if (action.type === fetchRegisterUser.toString()) {
    console.log("action", JSON.stringify(action));
    fetch("https://loft-taxi.glitch.me/register", {
      method: "POST",
      body: JSON.stringify({
        email: action.payload.email,
        name: action.payload.name,
        surname: action.payload.surname,
        password: action.payload.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        if (!data.success) alert(data.error);
        store.dispatch(fetchRegisterUserSuccess(data));
      })
      .catch((error) => {
        console.log("error", error);
        store.dispatch(fetchRegisterUserFailure(error));
      });
  }

  return next(action);
};

export const creditCard = (store) => (next) => (action) => {
  if (action.type === fetchCard.toString()) {
    fetch(`https://loft-taxi.glitch.me/card`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        store.dispatch(fetchCardSuccess(data));
      })
      .catch((error) => {
        store.dispatch(fetchCardFailure(error));
      });
  }

  return next(action);
};
