import renderer from "react-test-renderer";
import React from "react";
import CartScreen from "../CartScreen";

jest.mock("@expo/vector-icons");

describe("CartScreen", () => {
  it("should render without issues", () => {
    const screen = renderer.create(<CartScreen />).toJSON();

    expect(screen).toMatchSnapshot();
  });
});
