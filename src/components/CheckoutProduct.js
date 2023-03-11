import React from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/24/solid'
import CurrencyFormatter from 'currency-formatter-react'

function CheckoutProduct({id,title,price,description,category,image,hasPrime,rating}) {
  return (
    <div className='grid grid-cols-5'>
        <Image src={image} height={200} width={200} objectFit='contain'/>
        <div className='col-span-3 mx-5'>
            <p>{title}</p>
            <div className='flex'>
                {Array(rating).fill().map(()=>(
                    <StarIcon className='h-4 text-yellow-500'/>
                ))}
            </div>
            <p className='text-xs my-2 line-clamp-3'>{description}</p>
            <CurrencyFormatter value={price} thousandSeparator={true} currency='GBP' />
            {hasPrime && (<div className='flex items-center space-x-2'>
                <img className='w-12' src="https://links.papareact.com/fdw" alt="" />
                <p className='text-xs text-gray-400'>FREE Next-day Delivery</p>
            </div>)}
        </div>
        <div className='flex flex-col space-y-2 my-auto justify-self-end'>
            <button className='button'>Remove from Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct