import { fetchCard, fetchCardSuccess } from "../actions/card";
import { workerGetCard } from "./getCardSaga";
import { recordSaga } from "./recordSaga";

jest.mock("./api", () => ({
  fetchGetCardApi: () => ({
    cardNumber: "number",
  }),
}));

describe("FETCH_CARD", () => {
  it("FETCH_CARDR_FAILURE", async () => {
    const dispatched = await recordSaga(workerGetCard, fetchCard());
    expect(dispatched).toEqual([
      {
        type: fetchCardSuccess.toString(),
        payload: { cardNumber: "number" },
      },
    ]);
  });
});
