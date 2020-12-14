import addressesReducer from "./addresses";
import {
  fetchAddressesSuccess,
  fetchAddressesFailure,
} from "../actions/addresses";

const initialState = {};

describe("addresses reducer", () => {
  it("FETCH_ADDRESSES_SUCCESS", () => {
    const action = {
      type: fetchAddressesSuccess.toString(),
      payload: { addresses: ["street 1", "street 2"] },
    };
    expect(addressesReducer(initialState, action)).toEqual({
      ...initialState,
      addresses: ["street 1", "street 2"],
    });
  });

  it("FETCH_ADDRESSES_FAILURE", () => {
    const action = {
      type: fetchAddressesFailure.toString(),
      payload: { error: "Error" },
    };
    expect(addressesReducer(initialState, action)).toEqual({
      ...initialState,
      error: "Error",
    });
  });
});
