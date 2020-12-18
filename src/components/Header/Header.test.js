import { render, screen } from "@testing-library/react";
import Logo from "../Logo";
import Navigation from "../Navigation";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

describe("Header", () => {
  it("renders Header", () => {
    const mockStore = {
      getState: () => ({
        user: { isLoggedIn: true },
      }),
      subscribe: () => {},
      dispatch: () => ({ signOut: () => {} }),
    };

    render(
      <BrowserRouter>
        <Provider store={mockStore}>
          <Logo />
          <Navigation />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getAllByRole("img")[0]).toHaveAttribute("alt", "logo img");
    expect(screen.getAllByRole("img")[1]).toHaveAttribute("alt", "logo title");
    expect(screen.getAllByRole("link")[0]).toHaveTextContent("Map");
    expect(screen.getAllByRole("link")[1]).toHaveTextContent("Profile");
    expect(screen.getAllByRole("link")[2]).toHaveTextContent("Sign out");
  });
});
