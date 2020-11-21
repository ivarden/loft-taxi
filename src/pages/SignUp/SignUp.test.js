import { render, screen } from "@testing-library/react";
import SignUp from ".";

describe("Sign in page", () => {
  it("renders sign up form", () => {
    const { container } = render(<SignUp />);
    expect(container.innerHTML).toMatch("Email");
    expect(container.innerHTML).toMatch("Your Name");
    expect(container.innerHTML).toMatch("Password");
    expect(container.innerHTML).toMatch("Sign in");
    expect(container.innerHTML).toMatch("Sign up");
    expect(container.innerHTML).toMatch("Already Registered?");
  });
});
