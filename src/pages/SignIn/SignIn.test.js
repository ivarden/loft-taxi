import { render } from "@testing-library/react";
import SignIn from "./";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// import { createMemoryHistory } from "history";

describe("Sign in page", () => {
  it("renders sign in form", () => {
    const mockStore = {
      getState: () => ({ user: { isLogedIn: false } }),
      subscribe: () => {},
      dispatch: () => ({
        signUp: () => {},
      }),
    };
    const { container } = render(
      <BrowserRouter>
        <Provider store={mockStore}>
          <SignIn />
        </Provider>
      </BrowserRouter>
    );
    expect(container.innerHTML).toMatch("Email");
    expect(container.innerHTML).toMatch("Password");
    expect(container.innerHTML).toMatch("Sign In");
    expect(container.innerHTML).toMatch("New user?");
    expect(container.innerHTML).toMatch("Check in");
  });
});
