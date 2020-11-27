import { render } from "@testing-library/react";
import Map from "./";


describe("Sign in page", () => {
  it("renders order car form", () => {
    const { container } = render(<Map />);
    expect(container.innerHTML).toMatch("From");
    expect(container.innerHTML).toMatch("Choose destination");
    expect(container.innerHTML).toMatch("Order");
  });
});