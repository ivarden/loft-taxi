import { render } from "@testing-library/react";
import SignIn from "./pages/SignIn";

describe("Sign in page", () => {
  it("renders login form", () => {
    const { container } = render(<SignIn />);
    expect(container.innerHTML).toMatch("Email");
    expect(container.innerHTML).toMatch("Password");
  });
});
