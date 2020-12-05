import { createAction } from "redux-actions";

export const fetchOrder = createAction("FETCH_ORDER");
export const fetchOrderSuccess = createAction("FETCH_ORDER");
export const fetchOrderFailure = createAction("FETCH_ORDER");