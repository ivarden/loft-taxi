import React from "react";
import { render } from "@testing-library/react";
import SignIn from "./";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

describe("Sign in form", () => {
  it("Sign in form", () => {
    const mockStore = {
      getState: () => ({
        user: { isLoggedIn: true },
      }),
      subscribe: () => {},
      dispatch: () => ({ signIn: () => {} }),
    };

    const { container } = render(
      <BrowserRouter>
        <Provider store={mockStore}>
          (<SignIn />
        </Provider>
      </BrowserRouter>
    );
    expect(container.innerHTML).toMatch("Email");
    expect(container.innerHTML).toMatch("Password");
    expect(container.innerHTML).toMatch("Forgot password?");
    expect(container.innerHTML).toMatch("Sign In");
  });
});
