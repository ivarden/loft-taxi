import { render } from "@testing-library/react";
import Map from "./";

describe("Map page", () => {
  it("renders order car form", () => {
    const { container } = render(<Map />);
    expect(container.innerHTML).toMatch("From");
    expect(container.innerHTML).toMatch("Choose destination");
    expect(container.innerHTML).toMatch("Order");
  });
});