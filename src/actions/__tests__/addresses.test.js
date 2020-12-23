import { fetchAddresses, fetchAddressesSuccess, fetchAddressesFailure } from "../addresses";

describe("Order action", () => {
  it("should create action fetchAddresses", () => {
    const text = "fetchAddresses";
    const expectedAction = {
      type: fetchAddresses.toString(),
      payload: "fetchAddresses",
    };
    expect(fetchAddresses(text)).toEqual(expectedAction);
  });
  it("should create action fetchAddressesSuccess", () => {
    const text = "fetchAddressesSuccess";
    const expectedAction = {
      type: fetchAddressesSuccess.toString(),
      payload: "fetchAddressesSuccess",
    };
    expect(fetchAddressesSuccess(text)).toEqual(expectedAction);
  });
  it("should create action fetchAddressesFailure", () => {
    const text = "fetchAddressesFailure";
    const expectedAction = {
      type: fetchAddressesFailure.toString(),
      payload: "fetchAddressesFailure",
    };
    expect(fetchAddressesFailure(text)).toEqual(expectedAction);
  });
});
