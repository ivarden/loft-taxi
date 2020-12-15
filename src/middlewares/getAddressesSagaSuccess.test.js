import { fetchAddressesSuccess } from "../actions/addresses";
import { fetchAddressesApi } from "./api";
import { workerFetchAddresses } from "./getAddressesSaga";
import { recordSaga } from "./recordSaga";

jest.mock("./api", () => ({
  fetchAddressesApi: () => ({ addresses: [] }),
}));

describe("FETCH_ADDRESSES", () => {
  it("FETCH_ADDRESSES_SUCCESS", async () => {
    const dispatched = await recordSaga(
      workerFetchAddresses,
      fetchAddressesApi()
    );
    expect(dispatched).toEqual([
      {
        type: fetchAddressesSuccess.toString(),
        payload: { addresses: [] },
      },
    ]);
  });
});
