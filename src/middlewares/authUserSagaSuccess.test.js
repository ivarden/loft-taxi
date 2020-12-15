import { fetchSignIn, fetchSignInSuccess } from "../actions/user";
import { recordSaga } from "./recordSaga";
import { workerSignInSaga } from "./authUserSaga";

jest.mock("./api", () => ({
  fetchSignInApi: () => ({ success: true, token: "token" }),
}));
describe("FETCH_SIGN_IN_SUCCESS", () => {
  it("authenticates through api", async () => {
    const dispatched = await recordSaga(
      workerSignInSaga,
      fetchSignIn("test@mail.com", "password")
    );
    expect(dispatched).toEqual([
      {
        type: fetchSignInSuccess.toString(),
        payload: { success: true, token: "token" },
      },
    ]);
  });
});
