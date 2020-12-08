import { fetchCard, fetchCardSuccess, fetchCardFailure } from "../actions/card";

export const getCard = (store) => (next) => (action) => {
  if (action.type === fetchCard.toString()) {
    fetch(`https://loft-taxi.glitch.me/card?token=${action.payload}`)
      .then((response) => response.json())
      .then((data) => {
        store.dispatch(fetchCardSuccess(data));
      })
      .catch((error) => {
        store.dispatch(fetchCardFailure(error));
      });
  }

  return next(action);
};
