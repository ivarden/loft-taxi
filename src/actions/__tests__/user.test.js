import {
  fetchSignIn,
  fetchSignInSuccess,
  fetchSignInFailure,
  fetchRegisterUser,
  fetchRegisterUserSuccess,
  fetchRegisterUserFailure,
  signOut,
  signOutSuccess,
} from "../user";

describe("SignIn action", () => {
  it("should create action fetchSignIn", () => {
    const text = "fetchSignIn";
    const expectedAction = {
      type: fetchSignIn.toString(),
      payload: "fetchSignIn",
    };
    expect(fetchSignIn(text)).toEqual(expectedAction);
  });
  it("should create action fetchSignInSuccess", () => {
    const text = "fetchSignInSuccess";
    const expectedAction = {
      type: fetchSignInSuccess.toString(),
      payload: "fetchSignInSuccess",
    };
    expect(fetchSignInSuccess(text)).toEqual(expectedAction);
  });
  it("should create action fetchSignInFailure", () => {
    const text = "fetchSignInFailure";
    const expectedAction = {
      type: fetchSignInFailure.toString(),
      payload: "fetchSignInFailure",
    };
    expect(fetchSignInFailure(text)).toEqual(expectedAction);
  });
});
describe("RegisterUser action", () => {
  it("should create action fetchRegisterUser", () => {
    const text = "fetchRegisterUser";
    const expectedAction = {
      type: fetchRegisterUser.toString(),
      payload: "fetchRegisterUser",
    };
    expect(fetchRegisterUser(text)).toEqual(expectedAction);
  });
  it("should create action fetchRegisterUserSuccess", () => {
    const text = "fetchRegisterUserSuccess";
    const expectedAction = {
      type: fetchRegisterUserSuccess.toString(),
      payload: "fetchRegisterUserSuccess",
    };
    expect(fetchRegisterUserSuccess(text)).toEqual(expectedAction);
  });
  it("should create action fetchRegisterUserFailure", () => {
    const text = "fetchRegisterUserFailure";
    const expectedAction = {
      type: fetchRegisterUserFailure.toString(),
      payload: "fetchRegisterUserFailure",
    };
    expect(fetchRegisterUserFailure(text)).toEqual(expectedAction);
  });
});
describe("signOut action", () => {
  it("should create action signOut", () => {
    const text = "signOut";
    const expectedAction = {
      type: signOut.toString(),
      payload: "signOut",
    };
    expect(signOut(text)).toEqual(expectedAction);
  });
  it("should create action signOutSuccess", () => {
    const text = "signOutSuccess";
    const expectedAction = {
      type: signOutSuccess.toString(),
      payload: "signOutSuccess",
    };
    expect(signOutSuccess(text)).toEqual(expectedAction);
  });
});
