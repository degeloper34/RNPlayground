import renderer from "react-test-renderer";
import React from "react";
import {FlexView} from "../FlexView";

describe("FlexView", () => {
  it("renders correctly without flex", () => {
    const component = renderer.create(<FlexView />).toJSON();

    expect(component).toMatchSnapshot();
  });

  it("renders correctly with flex 1", () => {
    const component = renderer.create(<FlexView flex={1} />).toJSON();

    expect(component).toMatchSnapshot();
  });

  it("renders correctly with flex 2", () => {
    const component = renderer.create(<FlexView flex={2} />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
