import renderer from "react-test-renderer";
import React from "react";
import LoginScreen from "../LoginScreen";

describe("LoginScreen", () => {
  it("should render without issues", () => {
    const navigate = jest.fn();
    const screen = renderer
      .create(
        <LoginScreen
          navigation={{
            navigate,
          }}
        />
      )
      .toJSON();

    expect(screen).toMatchSnapshot();
  });
});
