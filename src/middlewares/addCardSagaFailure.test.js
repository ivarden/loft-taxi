import {
  fetchAddCard,
  fetchAddCardFailure,
} from "../actions/card";
import {workerAddCard} from './addCardSaga'
import {recordSaga} from './recordSaga'


jest.mock("./api", () => ({
  fetchAddCardApi: () => {
    throw Error();
  },
}));

describe("FETCH_ADDRESSES", () => {
  it("FETCH_ADDRESSES_FAILURE", async () => {
    const dispatched = await recordSaga(
      workerAddCard, 
      fetchAddCard() 
    );
    expect(dispatched).toEqual([
      {
        error: true,
        type: fetchAddCardFailure.toString(),
        payload: Error(),
      },
    ]);
  });
});

