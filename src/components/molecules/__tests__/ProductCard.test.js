import renderer from "react-test-renderer";
import React from "react";
import {ProductCard} from "../ProductCard";

describe("ProductCard", () => {
  it("renders correctly with mandatory props", () => {
    const onPress = jest.fn();

    const component = renderer
      .create(
        <ProductCard
          title={"Jacket"}
          imageUrl={"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"}
          price={"120"}
          onPress={onPress}
        />
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  it("renders correctly with mandatory props and ProductListScreen style", () => {
    const onPress = jest.fn();

    const component = renderer
      .create(
        <ProductCard
          title={"Jacket"}
          imageUrl={"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"}
          price={"120"}
          onPress={onPress}
          style={{marginRight: 12}}
        />
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  it("renders correctly with mandatory props and CategoryScreen style", () => {
    const onPress = jest.fn();

    const component = renderer
      .create(
        <ProductCard
          title={"Jacket"}
          imageUrl={"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"}
          price={"120"}
          onPress={onPress}
          style={{flex: 1, margin: 12}}
        />
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
