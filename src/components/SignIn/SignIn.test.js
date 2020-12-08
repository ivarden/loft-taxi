import React from "react";
import { render } from "@testing-library/react";
import SignIn from "./";
import {
  // connect,
  Provider,
} from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("Sign in form", () => {
  it("Sign in form", () => {
    const mockStore = {
      getState: () => ({
        user: {
          isLoggedIn: true,
          email: "",
          password: "",
        },
      }),
      subscribe: () => {},
      dispatch: () => {},
    };
    const history = createMemoryHistory();

    const { container } = render(
      <Provider state={mockStore}>
        <BrowserRouter history={history}>
          (<SignIn isLoggedIn />
        </BrowserRouter>
      </Provider>
    );
    expect(container.innerHTML).toMatch("Email");
    expect(container.innerHTML).toMatch("Password");
    expect(container.innerHTML).toMatch("Forgot password?");
    expect(container.innerHTML).toMatch("Sign In");
  });
});
