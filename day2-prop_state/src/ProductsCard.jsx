import React from 'react'

const ProductsCard = ({product, del}) => {

  

  return (
    <div className='border-2 p-2 flex flex-col gap-2 rounded-lg' >

      <div className='w-40 ' >
        <img src={product.image} alt="" />
      </div>

      <div>
        <h2 className='text-xl font-semibold' >{product.title.substring(0, 15)}</h2>
        <p>{product.category}</p>
        <p className='text-green-600' >{product.price}</p>
      </div>

      <button onClick={() => del(product.id)} className='p-2 bg-red-700' >delete</button>
      
    </div>
  )
}

export default ProductsCard
