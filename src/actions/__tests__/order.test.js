import { fetchOrder, fetchOrderSuccess, fetchOrderFailure } from "../order";

describe("Order action", () => {
  it("should create action fetchOrder", () => {
    const text = "fetchOrder";
    const expectedAction = {
      type: fetchOrder.toString(),
      payload: "fetchOrder",
    };
    expect(fetchOrder(text)).toEqual(expectedAction);
  });
  it("should create action fetchOrderSuccess", () => {
    const text = "fetchOrderSuccess";
    const expectedAction = {
      type: fetchOrderSuccess.toString(),
      payload: "fetchOrderSuccess",
    };
    expect(fetchOrderSuccess(text)).toEqual(expectedAction);
  });
  it("should create action fetchOrderFailure", () => {
    const text = "fetchOrderFailure";
    const expectedAction = {
      type: fetchOrderFailure.toString(),
      payload: "fetchOrderFailure",
    };
    expect(fetchOrderFailure(text)).toEqual(expectedAction);
  });
});
