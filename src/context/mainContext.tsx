import {createContext, useState, ReactNode} from "react";

export const MainContext = createContext<any>(null);

export function MainContextProvider({children}: {children: ReactNode}) {
  const [defaultContext, setDefaultContext] = useState({
    appLoading: false,
    cart: {},
    setAppLoading,
    updateCart,
  });

  function updateCart(product, quantity, operation) {
    console.log("product", product);
    console.log("quantity", quantity);
    console.log("operation", operation);
    let cartObject: any = defaultContext.cart;
    const productId = product.id;

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

    console.log("cartObject", cartObject);

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
