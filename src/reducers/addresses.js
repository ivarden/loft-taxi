import {
  fetchAddressesSuccess,
  fetchAddressesFailure,
} from "../actions/addresses";
import { handleActions } from "redux-actions";

const addresses = handleActions(
  {
    [fetchAddressesSuccess]: (state, { payload }) => ({ ...payload }),
    [fetchAddressesFailure]: (state, { payload }) => ({ ...payload }),
  },
  []
);

export default addresses;
