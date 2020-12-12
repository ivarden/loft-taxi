import {
  fetchRegisterUser,
  fetchRegisterUserSuccess,
  fetchRegisterUserFailure,
} from "../actions/user";

export const registerUser = (store) => (next) => (action) => {
  if (action.type === fetchRegisterUser.toString()) {
    fetch("https://loft-taxi.glitch.me/register", {
      method: "POST",
      body: JSON.stringify(action.payload),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // if (!data.success) alert(data.error);
        store.dispatch(fetchRegisterUserSuccess(data));
      })
      .catch((error) => {
        store.dispatch(fetchRegisterUserFailure(error));
      });
  }

  return next(action);
};
