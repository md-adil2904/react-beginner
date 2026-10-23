import { useQuery } from "@tanstack/react-query";
import {
  getAllProductAPi,
  getProductByCategory,
  getProductCategories,
} from "../api/productApis";
import { useEffect, useState } from "react";

export const useAllProduct = () => {
  const [search, setSearch] = useState(null);
  const [debounceSearch, setDebounceSearch] = useState(null);

  useEffect(() => {
    let timeOut = setTimeout(() => {
      setDebounceSearch(search);
    }, 1000);

    return () => clearTimeout(timeOut);
  }, [search]);

  const { data, isPending, error } = useQuery({
    queryKey: ["products", debounceSearch],
    queryFn: () => getAllProductAPi(debounceSearch),
  });
  console.log("products data ->", data);
  return {
    data,
    isPending,
    error,
    search,
    setSearch,
  };
};

export const useAllCategories = () => {
  return useQuery({
    queryKey: ["AllCategories"],
    queryFn: getProductCategories,
  });
};

export const useProductByCategory = () => {
  const [category, setCategory] = useState(null);
  console.log("ye category hai -->", category);
  const { data } = useQuery({
    queryKey: ["productByCategory", category],
    queryFn: () => getProductByCategory(category),
  });

  return {
    data,
    category,
    setCategory,
  };
};
