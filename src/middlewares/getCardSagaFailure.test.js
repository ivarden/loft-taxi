import { fetchCard, fetchCardFailure } from "../actions/card";
import { workerGetCard } from "./getCardSaga";

import { recordSaga } from "./recordSaga";

jest.mock("./api", () => ({
  fetchGetCardApi: () => {
    throw Error();
  },
}));

describe("FETCH_CARD", () => {
  it("FETCH_CARDR_FAILURE", async () => {
    const dispatched = await recordSaga(workerGetCard, fetchCard());
    expect(dispatched).toEqual([
      {
        type: fetchCardFailure.toString(),
        error: true,
        payload: Error(),
      },
    ]);
  });
});
