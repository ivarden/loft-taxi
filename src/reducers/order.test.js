import { fetchOrderSuccess, fetchOrderFailure } from "../actions/order";
import { handleActions } from "redux-actions";

const order = handleActions(
  { [fetchOrderSuccess]: (state, { payload }) => ( payload ) },
  { [fetchOrderFailure]: (state, { payload }) => ( payload ) },
  []
);

export default order;
