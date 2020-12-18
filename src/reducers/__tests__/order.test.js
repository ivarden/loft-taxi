import orderReducer from "../order";
import { fetchOrderSuccess, fetchOrderFailure } from "../../actions/order";

const initialState = { route: [], error: null };

describe("order reducer", () => {
  it("FETCH_ORDER_SUCCESS", () => {
    const action = {
      type: fetchOrderSuccess.toString(),
      payload: [
        [1, 2],
        [3, 4],
      ],
    };
    expect(orderReducer(initialState, action)).toEqual({
      ...initialState,
      route: [
        [1, 2],
        [3, 4],
      ],
    });
  });
  
  it("FETCH_ORDER_FAILURE", () => {
    const action = {
      type: fetchOrderFailure.toString(),
      payload: "something going wrong" ,
    };
    expect(orderReducer(initialState, action)).toEqual({
      ...initialState,
      error: "something going wrong",
    }); 
  });
});
