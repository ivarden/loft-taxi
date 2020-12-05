import { fetchOrderSuccess, fetchOrderFailure } from "../actions/order";
import { handleActions } from "redux-actions";

const order = handleActions(
  { [fetchOrderSuccess]: (state, { payload }) => ({ ...payload }) },
  { [fetchOrderFailure]: (state, { payload }) => ({ ...payload }) },
  { street1: null, street2: null, car: null }
);

export default order;
