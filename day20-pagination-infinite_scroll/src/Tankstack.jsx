import React, { useEffect, useState } from 'react'
import ProductCard from './components/ProductCard';
import axios from 'axios'
import {useQuery,keepPreviousData} from '@tanstack/react-query'
import { getAllProductAPi } from './api/productApi';

const Tankstack = () => {
  let limit = 10;
  const [page, setPage] = useState(0)
  let {data, isPending, isError,isPlaceholderData} = useQuery({
    queryKey : ['products',page],
    queryFn : () => getAllProductAPi(limit,page),
    placeholderData: keepPreviousData,
  })
  
  if(isPending) return <h1>loading data...</h1>
  if(isError) return <h1>some thing went wrong</h1>

  let totalPages = Math.ceil(data.total / limit);

  
  return (
    <div className="flex flex-col gap-6 items-center" >
      <div  style={{ opacity: isPlaceholderData ? 0.3 : 1 }}
       className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 ">
        {" "}
        {data?.products.map((product) => (
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
}

export default Tankstack
