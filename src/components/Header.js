import React from 'react'
import Image from 'next/image'
import { Bars3Icon, ShoppingCartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { signIn,signOut,useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/basketSlice'

function Header() {
  const items = useSelector(selectItems)
  const { data: session } = useSession()
  const router = useRouter()
  return (
    <header>
        <div className='flex bg-amazon_blue p-1 py-2 items-center flex-grow'>
            <div className='mt-2 flex flex-grow sm:flex-grow-0 items-center'>
              <Image
                onClick={()=>router.push('/')}
                src='https://links.papareact.com/f90'
                width={150}
                height={40}
                objectFit='contain'
                className='cursor-pointer'
              />
            </div>
            <div className='hidden sm:flex bg-yellow-400 hover:bg-yellow-500 cursor-pointer h-10 items-center rounded-md flex-grow'>
              <input type="text" className='h-full p-2 w-6 focus:outline-none rounded-l-md flex flex-grow flex-shrink px-4'/>
              <MagnifyingGlassIcon className='h-12 p-4'/>
            </div>
            <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
              <div onClick={session ? signOut : signIn} className='link'>
                <p>{session ? `Hello ${session.user.name}` : 'Sign In'}</p>
                <p className='font-extrabold md:text-sm'>Account & Lists</p>
              </div>
              <div className='link'>
                <p>Returns</p>
                <p className='font-extrabold md:text-sm'>& Orders</p>
              </div>
              <div onClick={()=>router.push('/checkout')} className='link relative flex items-center'>
                <span className='absolute top-0 right-0 md:right-12 h-4 w-4 bg-yellow-400 text-center text-black rounded-full font-bold'>{items.length}</span>
                <ShoppingCartIcon className='h-10'/>
                <p className='hidden md:inline font-extrabold md:text-sm mt-2'>Basket</p>
              </div>
            </div>
        </div>
        <div className='flex space-x-3 bg-amazon_blue-light items-center text-white p-2 pl-6 text-sm'>
          <p className='flex link items-center'><Bars3Icon className='h-6 mr-1'/>All</p>
          <p className='link'>Prime Video</p>
          <p className='link'>Amazon Business</p>
          <p className='link'>Today's Deals</p>
          <p className='link hidden lg:inline-flex'>Electronics</p>
          <p className='link hidden lg:inline-flex'>Buy Again</p>
          <p className='link hidden lg:inline-flex'>Prime</p>
          <p className='link hidden lg:inline-flex'>Food & Grocery</p>
          <p className='link hidden lg:inline-flex'>Shopper's Toolkit</p>
          <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
        </div>
    </header>
  )
}

export default Header