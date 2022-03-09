import renderer from "react-test-renderer";
import React from "react";
import {CustomTextInput} from "../CustomTextInput";

describe("CustomTextInput", () => {
  it("username TextInput renders correctly", () => {
    const onChangeUsername = jest.fn();
    const component = renderer
      .create(
        <CustomTextInput
          placeholder="username"
          value={''}
          onChangeText={onChangeUsername}
          maxLength={30}
        />
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  it("password TextInput renders correctly", () => {
    const onChangePassword = jest.fn();
    const component = renderer
      .create(
        <CustomTextInput
          placeholder="password"
          value={''}
          secureTextEntry
          onChangeText={onChangePassword}
          maxLength={30}
        />
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
