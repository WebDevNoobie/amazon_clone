import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectItems, selectTotal } from '../slices/basketSlice'
import CheckoutProduct from '../components/CheckoutProduct'
import { useSession } from 'next-auth/react'
import CurrencyFormatter from 'currency-formatter-react'

function checkout() {
    const items = useSelector(selectItems)
    const { data: session } = useSession()
    const total = useSelector(selectTotal)
  return (
    <div className='bg-gray-100'>
        <Header/>
        <main className='lg:flex max-w-screen-2xl mx-auto'>
            <div className='flex-grow m-5 shadow-sm bg-white'>
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
            {items.length>0 && (
                <div className='flex flex-col bg-white p-5 shadow-md m-5 ml-0'>
                    <h2 className='whitespace-nowrap'>
                        Subtotal ({items.length} items):
                        <span className='font-bold'>
                            <CurrencyFormatter value={total} thousandSeparator={true} currency='GBP' />
                        </span>
                    </h2>
                    <button className={`button mt-2 ${
                            !session && "from-gray-300 to-gray-500 border-gray-200 cursor-not-allowed active:from-gray-500"
                        }`}>
                        {session ? "Proceed to checkout" : "Sign in to checkout"}
                    </button>
                </div>
            )}
        </main>
    </div>
  )
}

export default checkout
