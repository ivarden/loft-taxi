import {
  fetchCard,
  fetchCardSuccess,
  fetchCardFailure,
  fetchAddCard,
  fetchAddCardSuccess,
  fetchAddCardFailure,
} from "../card";

describe("Card action", () => {
  it("should create action fetchCard", () => {
    const text = "fetchCard";
    const expectedAction = {
      type: fetchCard.toString(),
      payload: "fetchCard",
    };
    expect(fetchCard(text)).toEqual(expectedAction);
  });
  it("should create action fetchCardSuccess", () => {
    const text = "fetchCardSuccess";
    const expectedAction = {
      type: fetchCardSuccess.toString(),
      payload: "fetchCardSuccess",
    };
    expect(fetchCardSuccess(text)).toEqual(expectedAction);
  });
  it("should create action fetchCardFailure", () => {
    const text = "fetchCardFailure";
    const expectedAction = {
      type: fetchCardFailure.toString(),
      payload: "fetchCardFailure",
    };
    expect(fetchCardFailure(text)).toEqual(expectedAction);
  });
  it("should create action fetchAddCard", () => {
    const text = "fetchAddCard";
    const expectedAction = {
      type: fetchAddCard.toString(),
      payload: "fetchAddCard",
    };
    expect(fetchAddCard(text)).toEqual(expectedAction);
  });
  it("should create action fetchAddCardSuccess", () => {
    const text = "fetchAddCardSuccess";
    const expectedAction = {
      type: fetchAddCardSuccess.toString(),
      payload: "fetchAddCardSuccess",
    };
    expect(fetchAddCardSuccess(text)).toEqual(expectedAction);
  });
  it("should create action fetchAddCardFailure", () => {
    const text = "fetchAddCardFailure";
    const expectedAction = {
      type: fetchAddCardFailure.toString(),
      payload: "fetchAddCardFailure",
    };
    expect(fetchAddCardFailure(text)).toEqual(expectedAction);
  });
});
