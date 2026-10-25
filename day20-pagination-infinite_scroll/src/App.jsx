import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./components/ProductCard";

const App = () => {
  const [products, setProducts] = useState(null);
  let limit = 10;
  const [page, setPage] = useState(0)
  
  const getAllProductAPi = async () => {
    try {
      let res = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${page*limit}`);
      console.log(res.data.products);
      setProducts(res.data);
    } catch (error) {
      console.log("error in product api", error);
    }
  };
  useEffect(() => {
    getAllProductAPi();
  }, [page]);

  let totalPages = Math.ceil(products?.total / limit);

  return (
    <div className="flex flex-col gap-6 items-center" >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 ">
        {" "}
        {products?.products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            
          />
        ))}{" "}
      </div>

      <div className="flex gap-5 items-center" >
        <button disabled = {page == 0}
        onClick={() => setPage(page - 1)}
          className="p-3 bg-red-700 text-white rounded-xl" >prev</button>
        <p>page {page + 1} of {totalPages} </p>
        <button disabled = {page >= totalPages - 1}
        onClick={() => setPage(page + 1)}
          className="p-3 bg-red-700 text-white rounded-xl" >next</button>
      </div>
    </div>
  );
};

export default App;
