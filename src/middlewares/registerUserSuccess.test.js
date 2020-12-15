import { fetchRegisterUser, fetchSignInSuccess } from "../actions/user";
import { workerhRegisterUser } from "./registerUserSaga";

import { recordSaga } from "./recordSaga";

jest.mock("./api", () => ({
  fetchRegisterUserApi: () => ({ token: "token" }),
}));

describe("FETCH_REGISTER_USER", () => {
  it("FETCH_REGISTER_USER_SUCCESS", async () => {
    const dispatched = await recordSaga(
      workerhRegisterUser,
      fetchRegisterUser()
    );
    expect(dispatched).toEqual([
      {
        type: fetchSignInSuccess.toString(),
        payload: { token: "token" },
      },
    ]);
  });
});
