import renderer from "react-test-renderer";
import React from "react";
import {EmptyState} from "../EmptyState";

describe("EmptyState", () => {
  it("renders correctly cart EmptyState", () => {
    const component = renderer
      .create(<EmptyState emptyStateText="There is no product in your cart." />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
