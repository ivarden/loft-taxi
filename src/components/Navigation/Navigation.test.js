import { render } from "@testing-library/react";
import Navigation from "./";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

describe("Navigation", () => {
  it("renders Navigation", () => {
    const mockStore = {
      getState: () => ({
        user: { isLoggedIn: true },
      }),
      subscribe: () => {},
      dispatch: () => ({ signOut: () => {} }),
    };
    const { container } = render(
      <BrowserRouter>
        <Provider store={mockStore}>
          <Navigation />
        </Provider>
      </BrowserRouter>
    );
    expect(container.innerHTML).toMatch("Map");
    expect(container.innerHTML).toMatch("Profile");
    expect(container.innerHTML).toMatch("Sign out");
  });
});
