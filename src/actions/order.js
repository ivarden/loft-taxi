import { createAction } from "redux-actions";

export const fetchOrder = createAction("FETCH_ORDER");
export const fetchOrderSuccess = createAction("FETCH_ORDER_SUCCESS");
export const fetchOrderFailure = createAction("FETCH_ORDER_FAILURE");