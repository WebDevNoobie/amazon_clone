import React, { useEffect, useState } from 'react'
import Product from './Product'

function ProductFeed({products}) {
  return (
    <div className='grid grid-flow-row-dense sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-44 mx-auto'>
        {products && products.slice(0,4).map(({id,title,price,description,category,image})=>(
            <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
            />
        ))}
        <img className='md:col-span-full' src="https://links.papareact.com/dyz" alt="" />
        {products && products.slice(4,products.length).map(({id,title,price,description,category,image})=>(
            <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
            />
        ))}
    </div>
  )
}

export default ProductFeed