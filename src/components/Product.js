import Image from 'next/dist/client/image'
import React from 'react'
import { StarIcon } from '@heroicons/react/24/solid'
import CurrencyFormatter from 'currency-formatter-react'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../slices/basketSlice'

function Product({id,title,price,description,category,image}) {
    const dispatch = useDispatch()
    const hasPrime = (Math.random()<0.5)
    const rating = (Math.floor(Math.random()*5)+1)
    const addItemToBasket = () => {
        const Item = {
            id,title,price,description,category,image,hasPrime,rating
        }
        dispatch(addToBasket(Item))
    }
  return (
    <div className='relative flex flex-col m-5 p-10 bg-white z-30'>
        <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
        <Image src={image} height={200} width={200} objectFit='contain'/>
        <h4 className='my-3'>{title}</h4>
        <div className='flex'>
            {Array(rating).fill().map(()=>(
                <StarIcon className='h-4 text-yellow-500'/>
            ))}
        </div>
        <p className='text-xs my-2 line-clamp-2'>{description}</p>
        <div className='mb-5'>
            <CurrencyFormatter value={price} thousandSeparator={true} currency='GBP' />
        </div>
        {hasPrime && (<div className='flex items-center space-x-2 -mt-5'>
            <img className='w-12' src="https://links.papareact.com/fdw" alt="" />
            <p className='text-xs text-gray-400'>FREE Next-day Delivery</p>
        </div>)}
        <button onClick={addItemToBasket} className='mt-auto button'>Add to Basket</button>
    </div>
  )
}

export default Product