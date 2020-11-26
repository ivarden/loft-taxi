import { render } from "@testing-library/react";
import Map from "./";
// import mapboxgl from "mapbox-gl";
// mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

describe("Sign in page", () => {
  it("renders order car form", () => {
    const { container } = render(<Map />);
    expect(container.innerHTML).toMatch("From");
    expect(container.innerHTML).toMatch("Choose destination");
    expect(container.innerHTML).toMatch("Order");
  });

});