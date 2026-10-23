import React from "react";
import { getAllProductAPi } from "../../api/productApis";
import {
  useAllProduct,
  useProductByCategory,
} from "../../hooks/useProductHooks";
import ProductCard from "../components/ProductCard";
import ProductFilter from "../components/ProductFilter";

const ProductPage = () => {
  const { data, isPending, error, search, setSearch } = useAllProduct();
  const {
    data: productByCategory,
    category,
    setCategory,
  } = useProductByCategory();

  console.log("this is product by category", productByCategory);

  if (isPending) return <h1>Loading products...</h1>;
  return (
    <div>
      <ProductFilter
        category={category}
        setCategory={setCategory}
        search={search}
        setSearch={setSearch}
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {" "}
        {productByCategory?.products.length
          ? productByCategory?.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          : data?.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}{" "}
      </div>
    </div>
  );
};

export default ProductPage;
