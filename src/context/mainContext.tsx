import {createContext, useState, ReactNode} from "react";
import {IMainContext, Product} from "../../types";

export const MainContext = createContext<any>(null);

export function MainContextProvider({children}: {children: ReactNode}) {
  const [defaultContext, setDefaultContext] = useState({
    appLoading: false,
    cart: {},
    amountByCategory: {},
    setAppLoading,
    updateCart,
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
        objByCategory = amount;
      } else {
        objByCategory += amount;
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

  return (
    <MainContext.Provider value={defaultContext}>
      {children}
    </MainContext.Provider>
  );
}
