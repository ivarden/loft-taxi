import { render } from "@testing-library/react";
import Map from "./";
import { Provider } from "react-redux";
// import mapboxgl from "mapbox-gl";

// const map = new mapboxgl.Map({});
const map = { addControl: jest.fn() };

describe("Map page", () => {
  it("renders order car form", () => {
    const { container } = render(
      <Provider
        store={{
          getState: () => ({
            user: { isLoggedIn: true },
            addresses: { addresses: [" ", " "] },
          }),
          dispatch: () => ({map: map}),
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
