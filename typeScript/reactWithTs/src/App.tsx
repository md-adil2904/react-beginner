import  { useEffect, useState } from "react";
import axios from "axios";
import type { Product } from "./types";
import ProductCard from "./components/ProductCard";


const App = () => {
  const [productsData, setProductsData] = useState<Product[]>([]);
  let getData = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    console.log(res);
    setProductsData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
