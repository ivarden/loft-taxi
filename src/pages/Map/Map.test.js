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

// describe("your test suite", () => {
//   window.URL.createObjectURL = jest.fn();

//   afterEach(() => {
//     window.URL.createObjectURL.mockReset();
//   });

//   it("your test case", () => {
//     expect(true).toBeTruthy();
//   });
// });

// window.URL.createObjectURL = function() {};

// global.URL.createObjectURL = jest.fn();
