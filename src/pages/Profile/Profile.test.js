import { render, screen } from "@testing-library/react";
import Profile from ".";

describe("Sign in page", () => {
  it("renders add card form", () => {
    const { container } = render(<Profile />);
    expect(container.innerHTML).toMatch("Enter your card");
    expect(container.innerHTML).toMatch("Save");
    expect(container.innerHTML).toMatch("Card Number");
    expect(container.innerHTML).toMatch("Name on card");
    expect(container.innerHTML).toMatch("Expiry date");
  });
});
