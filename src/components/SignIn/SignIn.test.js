import { render } from "@testing-library/react";
import SignIn from "./";

describe("Sign in form", () => {
  it("Sign in form", () => {
    const { container } = render(<SignIn />);
    expect(container.innerHTML).toMatch("Email");
    expect(container.innerHTML).toMatch("Password");
    expect(container.innerHTML).toMatch("Forgot password?");
    expect(container.innerHTML).toMatch("Sign In");
  });
});