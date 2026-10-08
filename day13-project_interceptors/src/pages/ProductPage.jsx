import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { axiosInstance } from "../config/axiosInterceptors";

const ProductPage = () => {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async () => {
    try {
      const res = await axiosInstance.get("/products");
      console.log(res);
      setProductsData(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log("error in product", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (isLoading) return <h1 className="text-4xl">Loading products</h1>;

  return (
    <div className="grid grid-cols-3 gap-4 p-4 ">
      {productsData.map((elem) => (
        <ProductCard key={elem.id} product={elem} />
      ))}
    </div>
  );
};

export default ProductPage;
