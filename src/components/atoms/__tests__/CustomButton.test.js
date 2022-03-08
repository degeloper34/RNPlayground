import renderer from "react-test-renderer";
import React from "react";
import {CustomButton} from "../CustomButton";

describe("CustomButton", () => {
  it("renders correctly with text", () => {
    const component = renderer
      .create(<CustomButton text={"btnText"} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  it("renders correctly with onPress", () => {
    const onPress = jest.fn();
    const component = renderer
      .create(<CustomButton onPress={onPress} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  it("renders correctly without text, onPress", () => {
    const component = renderer.create(<CustomButton />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
