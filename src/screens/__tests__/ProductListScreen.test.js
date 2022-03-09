import renderer from "react-test-renderer";
import React from "react";
import ProductListScreen from "../ProductListScreen";

describe("ProductListScreen", () => {
  it("should render without issues", () => {
    const setOptions = jest.fn();
    const navigate = jest.fn();
    const screen = renderer
      .create(
        <ProductListScreen
          navigation={{
            navigate,
            setOptions,
          }}
        />
      )
      .toJSON();

    expect(screen).toMatchSnapshot();
  });
});
