import { render } from "@testing-library/react";
import Order from "./";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

describe("Order form", () => {
  it("renders Order form", () => {
    const mockStore = {
      getState: () => ({
        addresses: ["", ""],
        card: { error: null },
        handleOrder: () => {},
      }),
      subscribe: () => {},
      dispatch: () => ({ fetchOrder: () => {} }),
    };
    const { container } = render(
      <BrowserRouter>
        <Provider store={mockStore}>
          <Order handleOrder={() => {}} addresses={[]}/>
        </Provider>
      </BrowserRouter>
    );
    expect(container.innerHTML).toMatch("From");
    expect(container.innerHTML).toMatch("To");
    expect(container.innerHTML).toMatch("Standart");
    expect(container.innerHTML).toMatch("Busines");
    expect(container.innerHTML).toMatch("Premium");
    expect(container.innerHTML).toMatch("Order");
  });
});
