import {
  fetchAddCard,
  fetchAddCardSuccess,
  fetchAddCardFailure,
} from "../actions/card";

export const addCard = (store) => (next) => (action) => {
  if (action.type === fetchAddCard.toString()) {
    fetch(`https://loft-taxi.glitch.me/card`, {
      method: "POST",
      body: JSON.stringify(action.payload),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        store.dispatch(fetchAddCardSuccess(data));
      })
      .catch((error) => {
        store.dispatch(fetchAddCardFailure(error));
      });
  }

  return next(action);
};
