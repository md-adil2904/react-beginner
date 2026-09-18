import { createContext, useState } from "react";

export const MyShop = createContext();

export const MyShopContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(true);
  const [cartItems, setCartItmes] = useState([]);

  return (
    <MyShop.Provider value={{ toggle, setToggle, cartItems, setCartItmes }}>
      {children}
    </MyShop.Provider>
  );
};
