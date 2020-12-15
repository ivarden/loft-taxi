import { fetchAddresses, fetchAddressesFailure } from "../actions/addresses";
import { workerFetchAddresses } from "./getAddressesSaga";
import { recordSaga } from "./recordSaga";

jest.mock("./api", () => ({
  fetchAddressesApi: () => {
    throw Error();
  },
}));

describe("FETCH_ADDRESSES", () => {
  it("FETCH_ADDRESSES_FAILURE", async () => {
    const dispatched = await recordSaga(
      workerFetchAddresses, 
      fetchAddresses() 
    );
    expect(dispatched).toEqual([
      {
        error: true,
        type: fetchAddressesFailure.toString(),
        payload: Error(),
      },
    ]);
  });
});
