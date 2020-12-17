import { fetchRegisterUser, fetchRegisterUserSuccess } from "../actions/user";
import { workerhRegisterUser } from "./registerUserSaga";

import { recordSaga } from "./recordSaga";

jest.mock("./api", () => ({
  fetchRegisterUserApi: () => ({
    success: true,
    token: "1234567890",
  }),
}));

describe("FETCH_REGISTER_USER", () => {
  it("FETCH_REGISTER_USER_SUCCESS", async () => {
    const dispatched = await recordSaga(
      workerhRegisterUser,
      fetchRegisterUser({
        email: "email@example.com",
        password: "password",
        name: "Name",
        surname: "Surname",
      })
    );
    expect(dispatched).toEqual([
      {
        type: fetchRegisterUserSuccess.toString(),
        payload: {
          success: true,
          token: "1234567890",
        },
      },
    ]);
  });
});
