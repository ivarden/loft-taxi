import { fetchOrder, fetchOrderSuccess } from "../actions/order";
import { workerAddOrder } from "./addOrderSaga";

import { recordSaga } from "./recordSaga";

jest.mock("./api", () => ({
  fetcAddOrderApi: () => ({
    address1: "address1",
    address2: "address2",
  }),
}));

describe("FETCH_ORDER", () => {
  it("FETCH_ORDER_SUCCESS", async () => {
    const dispatched = await recordSaga(workerAddOrder, fetchOrder());
    expect(dispatched).toEqual([
      {
        type: fetchOrderSuccess.toString(),
        payload: {
          address1: "address1",
          address2: "address2",
        },
      },
    ]);
  });
});
