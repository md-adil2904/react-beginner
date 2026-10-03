import React, { useContext, useEffect } from "react";
import axios from "axios";
import { MyStore } from "../context/MyContext";
import ProductCard from "../components/ProductCard";

const Home = () => {
  let { productsData, setProductsData } = useContext(MyStore);
  let getProductData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setProductsData(response.data.products);
    } catch (error) {
      console.log("error aa rha hai", error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div>
      <div className=" p-5 grid grid-cols-4 gap-4">
        {productsData.map((val) => (
          <ProductCard key={val.id} product={val} />
        ))}
      </div>
    </div>
  );
};

export default Home;
