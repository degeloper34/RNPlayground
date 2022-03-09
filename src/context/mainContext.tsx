import {createContext, useState, ReactNode} from "react";
import {Product} from "../../types";

export const MainContext = createContext<any>(null);

export function MainContextProvider({children}: {children: ReactNode}) {
  const [defaultContext, setDefaultContext] = useState({
    appLoading: false,
    cart: {},
    setAppLoading,
    updateCart,
  });

  function updateCart(
    product: Product,
    quantity: number,
    operation: "add" | "remove"
  ) {
    console.log("product", product);
    console.log("quantity", quantity);
    console.log("operation", operation);
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

    setDefaultContext({...defaultContext, cart: cartObject});
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
