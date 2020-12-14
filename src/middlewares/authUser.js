import {
  fetchSignIn,
  fetchSignInSuccess,
  fetchSignInFailure,
} from "../actions/user";

export const authUser = (store) => (next) => (action) => {
  if (action.type === fetchSignIn.toString()) {
    fetch(`https://loft-taxi.glitch.me/auth`, {
      method: "POST",
      body: JSON.stringify(action.payload),
      headers: {
        "Content-Type": "application/json",
      },
    })
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