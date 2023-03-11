import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/basketSlice'
import CheckoutProduct from '../components/CheckoutProduct'

function checkout() {
    const items = useSelector(selectItems)
  return (
    <div className='bg-gray-100'>
        <Header/>
        <main className='lg:flex max-w-screen-2xl mx-auto'>
            <div className='flex-grow m-5 shadow-sm'>
                <Image
                    src='https://links.papareact.com/ikj'
                    width={1020}
                    height={250}
                    objectFit='contain'
                />
                <div className='flex flex-col p-5 space-y-10 bg-white'>
                    <h1 className='text-2xl border-b-2 pb-4'>{items.length>0 ? 'Shopping Basket' : 'Your shopping basket is empty!'}</h1>
                    {items.length>0 && items.map((item)=>(
                        <CheckoutProduct
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                            description={item.description}
                            category={item.category}
                            image={item.image}
                            hasPrime={item.hasPrime}
                        />
                    ))}
                </div>
            </div>
        </main>
    </div>
  )
}

export default checkout
