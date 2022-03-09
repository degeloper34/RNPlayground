import renderer from "react-test-renderer";
import React from "react";
import ProductDetailScreen from "../ProductDetailScreen";

jest.mock("@expo/vector-icons");

describe("ProductDetailScreen", () => {
  it("should render without issues", () => {
    const setOptions = jest.fn();
    const navigate = jest.fn();
    const screen = renderer
      .create(
        <ProductDetailScreen
          navigation={{
            navigate,
            setOptions,
          }}
          route={{
            params: {
              product: {
                id: 1,
                title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                category: "men's clothing",
                description:
                  "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                image:
                  "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                price: 109.95,
                rating: {
                  count: 120,
                  rate: 3.9,
                },
              },
            },
          }}
        />
      )
      .toJSON();

    expect(screen).toMatchSnapshot();
  });
});
