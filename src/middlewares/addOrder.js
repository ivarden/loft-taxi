import {
  fetchOrder,
  fetchOrderSuccess,
  fetchOrderFailure,
} from "../actions/order";

export const addOrder = (store) => (next) => (action) => {
  if (action.type === fetchOrder.toString()) {
    fetch(
      `https://loft-taxi.glitch.me/route?address1=${action.payload.address1}&address2=${action.payload.address2}`
    )
      .then((response) => response.json())
      .then((data) => {
        store.dispatch(fetchOrderSuccess(data));
      })
      .catch((error) => {
        store.dispatch(fetchOrderFailure(error));
      });
  }

  return next(action);
};
