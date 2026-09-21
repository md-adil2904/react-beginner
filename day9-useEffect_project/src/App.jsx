import React, { useContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import axios from "axios";
import CartScreen from "./pages/CartScreen";
import { MyStore } from "./context/MyContext";

const App = () => {
  const [products, setProducts] = useState([]);

  const { isCartOpen, cartItems } = useContext(MyStore);

  const getProductsData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");

    setProducts(response.data);
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div className="w-full flex flex-col h-screen p-5 rounded gap-4">
      <Navbar />

      {isCartOpen ? (
        <div className="grid grid-cols-5 gap-4">
          {products.map((elem) => {
            const isInCart = cartItems.find((val) => val.id == elem.id);

            return (
              <ProductCard key={elem.id} product={elem} isInCart={isInCart} />
            );
          })}
        </div>
      ) : (
        <div>
          <CartScreen />
        </div>
      )}
    </div>
  );
};

export default App;
