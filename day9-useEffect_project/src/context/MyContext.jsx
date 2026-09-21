import { createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  console.log("cartitem", cartItems);

  const incrementQuantity = (id) => {
    return setCartItems((prev) => {
      return prev.map((val) => {
        return val.id === id ? { ...val, quantity: val.quantity + 1 } : val;
      });
    });
  };

  const decrementQuantity = (id) => {
    return setCartItems((prev) => {
      return prev
        .map((val) => {
          return val.id === id ? { ...val, quantity: val.quantity - 1 } : val;
        })
        .filter((val) => val.quantity > 0);
    });
  };

  const removeCartItem = (id) => {
    const cartArr = cartItems.filter((elem) => elem.id != id);
    setCartItems(cartArr);
  };

  return (
    <MyStore.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cartItems,
        setCartItems,
        incrementQuantity,
        decrementQuantity,
        removeCartItem,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
