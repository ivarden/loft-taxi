import { fetchSignIn, fetchSignInFailure } from "../actions/user";
import { recordSaga } from "./recordSaga";
import { workerSignInSaga } from "./authUserSaga";

jest.mock("./api", () => ({
  fetchSignInApi: () => {
    throw Error();
  },
}));

describe("FETCH_SIGN_IN_FAILURE", () => {
  it("failure authenticates through api", async () => {
    const dispatched = await recordSaga(
      workerSignInSaga,
      fetchSignIn("test@mail.com", "password")
    );
    expect(dispatched).toEqual([
      {
        error: true,
        type: fetchSignInFailure.toString(),
        payload: Error(),
      },
    ]);
  });
});
