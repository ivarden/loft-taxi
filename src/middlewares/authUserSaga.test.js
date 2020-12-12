import {
  takeLatest,
  takeEvery,
  call,
  put,
  take,
  runSaga,
} from "redux-saga/effects";
import {
  fetchSignIn,
  fetchSignInSuccess,
  fetchSignInFailure,
  signOut,
  signOutSuccess,
} from "../actions/user";
import watchAuthUser, {
  requestSignIn,
  requestSignOut,
  api,
} from "./authUserSaga";

describe("user", () => {
  it("should call api and dispatch success action", async () => {
    const gen = watchAuthUser();
    const user = { email: "email@email.com", password: "password" };
    console.log(gen.next().value);
    expect(gen.next().value).toEqual([[requestSignIn], [requestSignOut]]);
    // const requestSignIn_ = jest
    //   .spyOn(requestSignIn, 'requestSignIn_')
    //   .mockImplementation(() => Promise.resolve(user));
    // expect(result.next().value).toEqual(takeLatest(requestSignIn.toString()));
    // expect(fetchSignIn).toEqual(fetchSignInSuccess(user));
    // requestSignIn.mockClear();
  });
});
