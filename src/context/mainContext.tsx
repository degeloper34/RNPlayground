import {createContext, useState, ReactNode} from "react";
import {Product} from "../../types";

export const MainContext = createContext<any>(null);

export function MainContextProvider({children}: {children: ReactNode}) {
  const [defaultContext, setDefaultContext] = useState({
    appLoading: false,
    cart: {},
    amountByCategory: {},
    productList: [],
    productByCategory: {},
    setAppLoading,
    updateCart,
    setProductListAndProductsByCategory,
  });

  function updateCart(
    product: Product,
    quantity: number,
    operation: "add" | "remove"
  ) {
    let cartObject: any = defaultContext.cart;

    const productId = product.id;

    if (operation === "add") {
      if (!cartObject.hasOwnProperty(productId)) {
        cartObject[productId] = {};
      }

      if (!cartObject[productId].hasOwnProperty("quantity")) {
        cartObject[productId] = {...product, quantity};
      } else {
        cartObject[productId] = {
          ...product,
          quantity: cartObject[productId].quantity + quantity,
        };
      }
    } else {
      delete cartObject[productId];
    }

    let amountByCategoryObject: any = {};

    for (let eachProductId in cartObject) {
      let objByCategory =
        amountByCategoryObject[cartObject[eachProductId].category];

      let amount =
        cartObject[eachProductId].price * cartObject[eachProductId].quantity;

      if (objByCategory === undefined) {
        amountByCategoryObject[cartObject[eachProductId].category] = amount;
      } else {
        amountByCategoryObject[cartObject[eachProductId].category] += amount;
      }
    }

    setDefaultContext({
      ...defaultContext,
      cart: cartObject,
      amountByCategory: amountByCategoryObject,
    });
  }

  function setAppLoading(bool: boolean) {
    setDefaultContext({...defaultContext, appLoading: bool});
  }

  function setProductListAndProductsByCategory(
    products: any,
    productByCategory: any
  ) {
    setDefaultContext({
      ...defaultContext,
      ...(defaultContext.productList = products),
      ...(defaultContext.productByCategory = productByCategory),
    });
  }

  return (
    <MainContext.Provider value={defaultContext}>
      {children}
    </MainContext.Provider>
  );
}
