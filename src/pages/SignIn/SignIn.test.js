import { render, screen } from "@testing-library/react";
import SignIn from "./";

describe("Sign in page", () => {
  it("renders sign in form", () => {
    const { container } = render(<SignIn />);
    expect(container.innerHTML).toMatch("Email");
    expect(container.innerHTML).toMatch("Password");
    expect(container.innerHTML).toMatch("Sign In");
    expect(container.innerHTML).toMatch("New user?");
    expect(container.innerHTML).toMatch("Check in");
  });
});
