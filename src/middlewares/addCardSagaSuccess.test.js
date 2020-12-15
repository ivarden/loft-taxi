import { fetchAddCard, fetchAddCardSuccess } from "../actions/card";
import { workerAddCard } from "./addCardSaga";
import { recordSaga } from "./recordSaga";

jest.mock("./api", () => ({
  fetchAddCardApi: () => ({
    id: null,
    cardNumber: null,
    expiryDate: null,
    cardName: null,
    cvc: null,
    error: null,
  }),
}));

describe("FETCH_ADDRESSES", () => {
  it("FETCH_ADDRESSES_FAILURE", async () => {
    const dispatched = await recordSaga(workerAddCard, fetchAddCard());
    expect(dispatched).toEqual([
      {
        type: fetchAddCardSuccess.toString(),
        payload: {
          id: null,
          cardNumber: null,
          expiryDate: null,
          cardName: null,
          cvc: null,
          error: null,
        },
      },
    ]);
  });
});
