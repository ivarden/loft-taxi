import { fetchAddressesSuccess } from "../../actions/addresses";
import { workerFetchAddresses } from "../getAddressesSaga";
import { recordSaga } from "../recordSaga";

jest.mock("../../api/addressesApi", () => ({
  fetchAddressesApi: () => ({ addresses: [] }),
}));

describe("FETCH_ADDRESSES", () => {
  it("FETCH_ADDRESSES_SUCCESS", async () => {
    const dispatched = await recordSaga(
      workerFetchAddresses,
      fetchAddressesSuccess()
    );
    expect(dispatched).toEqual([
      {
        type: fetchAddressesSuccess.toString(),
        payload: { addresses: [] },
      },
    ]);
  });
});
