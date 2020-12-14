import cardReducer from "./card";
import {
  fetchCardSuccess,
  fetchCardFailure,
  fetchAddCardSuccess,
  fetchAddCardFailure,
} from "../actions/card";

const initialState = { success: false, error: null };

describe("card reducer", () => {
  it("FETCH_CARD_SUCCESS", () => {
    const action = {
      type: fetchCardSuccess.toString(),
      payload: { success: true, error: null },
    };
    expect(cardReducer(initialState, action)).toEqual({
      ...initialState,
      success: true,
    });
  });
  it("FETCH_CARD_FAILURE", () => {
    const action = {
      type: fetchCardFailure.toString(),
      payload: { success: false, error: "Error" },
    };
    expect(cardReducer(initialState, action)).toEqual({
      ...initialState,
      error: "Error",
    });
  });
  it("FETCH_ADD_CARD_SUCCESS", () => {
    const action = {
      type: fetchAddCardSuccess.toString(),
      payload: { success: true, error: null },
    };
    expect(cardReducer(initialState, action)).toEqual({
      ...initialState,
      success: true,
    });
  });
  it("FETCH_ADD_CARD_FAILURE", () => {
    const action = {
      type: fetchAddCardFailure.toString(),
      payload: { success: false, error: "Error" },
    };
    expect(cardReducer(initialState, action)).toEqual({
      ...initialState,
      error: "Error",
    });
  });
});
