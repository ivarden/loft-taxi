import { render, screen } from "@testing-library/react";
import Logo from "./";
import { Provider } from "react-redux";

describe("Logo", () => {
  it("renders Logo", () => {
    const mockStore = {
      getState: () => ({
        user: { isLoggedIn: true },
      }),
      subscribe: () => {},
      dispatch: () => ({ signOut: () => {} }),
    };

    render(
      <Provider store={mockStore}>
        <Logo />
      </Provider>
    );
    expect(screen.getAllByRole("img")[0]).toHaveAttribute("alt", "logo img");
    expect(screen.getAllByRole("img")[1]).toHaveAttribute("alt", "logo title");
  });
});
