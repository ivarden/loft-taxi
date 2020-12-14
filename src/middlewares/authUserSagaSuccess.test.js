import { fetchSignIn } from "../actions/user";
import { recordSaga } from "./recordSaga";
import { requestSignInSaga } from "./authUserSaga";

jest.mock("./api", () => ({
  signInApi: jest.fn(() => ({ success: true, token: "token" })),
}));
describe("FETCH_SIGN_IN_SUCCESS", () => {
  it("authenticates through api", async () => {
    const dispatched = await recordSaga(
      requestSignInSaga,
      fetchSignIn("test@mail.com", "password")
    );
    expect(dispatched).toEqual([{ type: "FETCH_SIGN_IN_SUCCESS" }]);
  });
});
