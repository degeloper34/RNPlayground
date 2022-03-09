import renderer from "react-test-renderer";
import React from "react";
import {Loading} from "../Loading";

describe("Loading", () => {
  it("renders correctly with loading enable", () => {
    const component = renderer.create(<Loading isLoadingActive />).toJSON();

    expect(component).toMatchSnapshot();
  });

  it("renders correctly with loading disable", () => {
    const component = renderer.create(<Loading />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
