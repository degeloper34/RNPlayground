import renderer from "react-test-renderer";
import React from "react";
import {EmptyState} from "../EmptyState";

jest.mock("@expo/vector-icons");

describe("EmptyState", () => {
  it("renders correctly", async () => {
    const component = renderer
      .create(<EmptyState emptyStateText="There is no product in your cart." />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
