import newUserReducer from "../newUser";
import {
  fetchRegisterUserSuccess,
  fetchRegisterUserFailure,
} from "../../actions/user";

const initialState = {
  success: false,
  error: null,
  token: null,
  isLoggedIn: false,
};

describe("newUser reducer", () => {
  it("FETCH_REGISTER_USER_SUCCESS", () => {
    const action = {
      type: fetchRegisterUserSuccess.toString(),
      payload: {
        success: true,
        error: null,
        token: "1234567890",
        isLoggedIn: true,
      },
    };
    expect(newUserReducer(initialState, action)).toEqual({
      ...initialState,
      success: true,
      token: "1234567890",
      isLoggedIn: true,
    });
  });
  it("FETCH_REGISTER_USER_FAILURE", () => {
    const action = {
      type: fetchRegisterUserFailure.toString(),
      payload: {
        success: false,
        error: "Error",
        token: null,
        isLoggedIn: false,
      },
    };
    expect(newUserReducer(initialState, action)).toEqual({
      ...initialState,
      error: "Error",
    });
  });
});
