import {createContext, useState} from "react";

export const MainContext = createContext<any>(null);

export function MainContextProvider({children}) {
  const [amount, setAmount] = useState(0);
  const [defaultContext, setDefaultContext] = useState({
    appLoading: false,
    amount,
    deposit,
    withdraw,
    setAppLoading,
  });

  function deposit(value) {
    setAmount(amount + 1);
  }

  function withdraw(value) {
    setAmount(amount - 2);
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
