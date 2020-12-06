import {
  fetchRegisterUser,
  fetchRegisterUserSuccess,
  fetchRegisterUserFailure,
} from "../actions/user";

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
        // if (!data.success) alert(data.error);
        store.dispatch(fetchRegisterUserSuccess(data));
      })
      .catch((error) => {
        console.log("error", error);
        store.dispatch(fetchRegisterUserFailure(error));
      });
  }

  return next(action);
};
