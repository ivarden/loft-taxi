import {
  fetchRegisterUser,
  fetchRegisterUserFailure,
} from "../actions/user";
import { workerhRegisterUser } from "./registerUserSaga";

import { recordSaga } from "./recordSaga";

jest.mock("./api", () => ({
  fetchRegisterUserApi: () => {
    throw Error();
  },
}));

describe("FETCH_REGISTER_USER", () => {
  it("FETCH_REGISTER_USER_FAILURE", async () => {
    const dispatched = await recordSaga(workerhRegisterUser, fetchRegisterUser());
    expect(dispatched).toEqual([
      {
        type: fetchRegisterUserFailure.toString(),
        error: true,
        payload: Error(),
      },
    ]);
  });
});
