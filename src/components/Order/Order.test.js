import { render } from "@testing-library/react";
import Order from "./";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { car_list } from "./data";

describe("Order form", () => {
  it("renders Order form", () => {
    const mockStore = {
      getState: () => ({
        addresses: { addresses: ["Пулково (LED)", "Эрмитаж"] },
        handleOrder: () => {},
        car_list: car_list,
      }),
      subscribe: () => {},
      dispatch: () => ({ fetchOrder: () => {} }),
    };
    const { container } = render(
      <BrowserRouter>
        <Provider store={mockStore}>
          <Order />
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
