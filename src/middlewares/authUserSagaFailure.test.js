import { fetchSignIn } from "../actions/user";
import { recordSaga } from "./recordSaga";
import { requestSignInSaga } from "./authUserSaga";

jest.mock("./api", () => ({
  signInApi: () => {
    throw Error();
  },
}));

describe("FETCH_SIGN_IN_FAILURE", () => {
  it("failure authenticates through api", async () => {
    const dispatched = await recordSaga(
      requestSignInSaga,
      fetchSignIn("test@mail.com", "password")
    );
    expect(dispatched).toEqual([
      {
        error: true,
        type: "FETCH_SIGN_IN_FAILURE",
        payload: Error(),
      },
    ]);
  });
});
