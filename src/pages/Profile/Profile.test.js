import { render } from "@testing-library/react";
import Profile from ".";
import { Provider } from "react-redux";

describe("Sign in page", () => {
  it("renders add card form", () => {
    const { container } = render(
      <Provider
        store={{
          getState: () => ({
            user: { isLoggedIn: true },
            card: { cardNumbe: "" },
          }),
          subscribe: () => {},
          dispatch: () => {},
        }}
      >
        <Profile />
      </Provider>
    );
    expect(container.innerHTML).toMatch("Enter your card");
    expect(container.innerHTML).toMatch("Save");
    expect(container.innerHTML).toMatch("Card Number");
    expect(container.innerHTML).toMatch("Name on card");
    expect(container.innerHTML).toMatch("Expiry date");
  });
});
