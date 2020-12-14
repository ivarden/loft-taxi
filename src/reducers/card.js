import {
  fetchCardSuccess,
  fetchCardFailure,
  fetchAddCardSuccess,
  fetchAddCardFailure,
} from "../actions/card";
import { handleActions } from "redux-actions";

const card = handleActions(
  {
    [fetchCardSuccess]: (state, { payload }) => ({ ...payload }),
    [fetchCardFailure]: (state, { payload }) => ({ ...payload }),
    [fetchAddCardSuccess]: (state, { payload }) => ({ ...payload }),
    [fetchAddCardFailure]: (state, { payload }) => ({ ...payload }),
  },
  { success: false, error: null }
);

export default card;
