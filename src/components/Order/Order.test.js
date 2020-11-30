import { render } from "@testing-library/react";
import Order from "./";

describe("Order form", () => {
  it("renders Order form", () => {
    const { container } = render(<Order />);
    expect(container.innerHTML).toMatch("From");
    expect(container.innerHTML).toMatch("To");
    expect(container.innerHTML).toMatch("Standart");
    expect(container.innerHTML).toMatch("Busines");
    expect(container.innerHTML).toMatch("Premium");
    expect(container.innerHTML).toMatch("Order");
  });
});
