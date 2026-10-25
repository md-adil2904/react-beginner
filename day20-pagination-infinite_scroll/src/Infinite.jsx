import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { getAllProductAPi } from "./api/productApi";
import ProductCard from "./components/ProductCard";

const Infinite = () => {
  let limit = 10;
  const { data, isPending, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["products"],
      queryFn: ({ pageParam }) => getAllProductAPi(limit, pageParam),
      initialPageParam: 0,
      getNextPageParam: (lastPage, allPage) => {
        console.log("lastPAge -->", lastPage);
        console.log("all page -->", allPage);
        let loadedData = allPage.length * limit;
        if (loadedData < lastPage.total) return loadedData;
        return undefined;
      },
    });

  if (isPending) return "loading...";
  console.log("adat", data);

  let allProducts = data?.pages?.flatMap((val) => val.products) ?? [];
  return (
    <div className="flex p-5 flex-col gap-6 items-center">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 ">
        {" "}
        {allProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}{" "}
      </div>
      {hasNextPage && (
        <button onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "Loading..." : "Load more"}
        </button>
      )}
    </div>
  );
};

export default Infinite;
