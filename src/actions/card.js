import { createAction } from "redux-actions";

export const fetchCard = createAction("FETCH_CARD");
export const fetchCardSuccess = createAction("FETCH_CARD_SUCCESS");
export const fetchCardFailure = createAction("FETCH_CARD_FAILURE");

export const fetchAddCard = createAction("FETCH_ADD_CARD");
export const fetchAddCardSuccess = createAction("FETCH_ADD_CARD_SUCCESS");
export const fetchAddCardFailure = createAction("FETCH_ADD_CARD_FAILURE");