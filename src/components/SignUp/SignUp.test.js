import { render } from "@testing-library/react";
import SignUp from "./index";

describe("Sign up form", () => {
  it("renders Sign up form", () => {
    const { container } = render(<SignUp />);
    expect(container.innerHTML).toMatch("Email");
    expect(container.innerHTML).toMatch("Your Name");
    expect(container.innerHTML).toMatch("Password");
    expect(container.innerHTML).toMatch("Sign up");
  });
});
