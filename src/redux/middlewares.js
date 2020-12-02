import { fetchSignIn } from "./";

export const authUser = (store) => (next) => (action) => {
  if (action.type === fetchSignIn.toString()) {
    console.log(action.payload);
    fetch(
      `https://loft-taxi.glitch.me/auth?username=${action.payload.email}&password=${action.payload.password}`,
      {
        method: "POST",
        // mode: 'cors',
        // credentials: 'same-origin',
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        store.dispatch(fetchSignIn(data));
      })
      .catch((error) => {
        store.dispatch(fetchSignIn(error));
      });
  }

  //   console.log(action, store.getState());
  return next(action);
};
