import { render } from "@testing-library/react";
import Map from "./";
import { Provider } from "react-redux";

// const map = { addControl: jest.fn() };

describe("Map page", () => {
  it("renders order car form", () => {
    const { container } = render(
      <Provider
        store={{
          getState: () => ({
            user: { isLoggedIn: true },
            addresses: { addresses: [" ", " "] },
            coordinates:{coordinates:[]},
          }),
          subscribe: () => {},
          dispatch: () => {},
        }}
      >
        <Map />
      </Provider>
    );
    expect(container.innerHTML).toMatch("From");
    expect(container.innerHTML).toMatch("Choose destination");
    expect(container.innerHTML).toMatch("Order");
  });
});
