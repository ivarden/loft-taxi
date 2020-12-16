import { render } from "@testing-library/react";
import SignIn from "./pages/SignIn";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("Sign in page", () => {
  it("renders login form", () => {
    const mockStore = {
      getState: () => ({ user: { isLoggedIn: true } }),
      subscribe: () => {},
      dispatch: () => {},
    };
    const history = createMemoryHistory();
    const { container } = render(
      <Router history={history}>
        <Provider store={mockStore}>
          <SignIn />
        </Provider>
      </Router>
    );
    expect(container.innerHTML).toMatch("Email");
    expect(container.innerHTML).toMatch("Password");
  });
});
