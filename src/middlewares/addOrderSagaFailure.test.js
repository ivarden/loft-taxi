import { fetchOrder, fetchOrderFailure } from "../actions/order";
import { workerAddOrder } from "./addOrderSaga";

import { recordSaga } from "./recordSaga";

jest.mock("./api", () => ({
  fetcAddOrderApi: () => {
    throw Error();
  },
}));

describe("FETCH_ORDER", () => {
  it("FETCH_ORDER_FAILURE", async () => {
    const dispatched = await recordSaga(workerAddOrder, fetchOrder());
    expect(dispatched).toEqual([
      {
        type: fetchOrderFailure.toString(),
        error: true,
        payload: Error(),
      },
    ]);
  });
});
