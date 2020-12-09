import { render } from "@testing-library/react";
import PaymentForm from "./";
import { Provider } from "react-redux";

describe("Payment form", () => {
  it("renders Payment form", () => {
    const { container } = render(
      <Provider
        store={{
          getState: () => ({
            user: { isLoggedIn: true },
            token: "aaa",
            card: {},
          }),
          dispatch: () => {},
          subscribe: () => {},
        }}
      >
        <PaymentForm />
      </Provider>
    );
    expect(container.innerHTML).toMatch("Enter your card");
    expect(container.innerHTML).toMatch("Card Number");
    expect(container.innerHTML).toMatch("Name on card");
    expect(container.innerHTML).toMatch("Expiry date");
    expect(container.innerHTML).toMatch("Save");
  });
});
