import React, { useContext, useState } from "react";
import CartCard from "../components/CartCard";
import { MyStore } from "../context/MyContext";

const CartScreen = () => {
  const { cartItems } = useContext(MyStore);

  return (
    <div className="grid grid-cols-2 gap-4">
      {cartItems.map((elem) => {
        return <CartCard key={elem.id} product={elem} cartItems={cartItems} />;
      })}
    </div>
  );
};

export default CartScreen;
