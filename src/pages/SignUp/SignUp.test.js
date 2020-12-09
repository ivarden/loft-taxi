import { render } from "@testing-library/react";
import SignUp from ".";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

describe("Sign in page", () => {
  it("renders sign up form", () => {
    const { container } = render(
      <BrowserRouter>
        <Provider
          store={{
            getState: () => ({
              user: { isLoggedIn: false, success: false, token: null },
              newUser: { success: false, token: null },
            }),
            subscribe: () => {},
            dispatch: () => ({
              signUp: () => {},
            }),
          }}
        >
          <SignUp />
        </Provider>
      </BrowserRouter>
    );
    expect(container.innerHTML).toMatch("Email");
    expect(container.innerHTML).toMatch("Name");
    expect(container.innerHTML).toMatch("Surname");
    expect(container.innerHTML).toMatch("Password");
    expect(container.innerHTML).toMatch("Sign in");
    expect(container.innerHTML).toMatch("Sign up");
    expect(container.innerHTML).toMatch("Already Registered?");
  });
});
