import { fetchSignIn, fetchSignInSuccess, fetchSignInFailure } from "./";

export const authUser = (store) => (next) => (action) => {
  if (action.type === fetchSignIn.toString()) {
    console.log(action.payload);
    fetch(
      `https://loft-taxi.glitch.me/auth?username=${action.payload.email}&password=${action.payload.password}`,
      {
        method: "GET",
        mode: 'no-cors',
        // credentials: 'same-origin',
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        store.dispatch(fetchSignInSuccess(data));
      })
      .catch((error) => {
        store.dispatch(fetchSignInFailure(error));
      });
  }

  //   console.log(action, store.getState());
  return next(action);
};
