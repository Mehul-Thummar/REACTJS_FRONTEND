import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Navbar = () => {

  const data = useSelector((state) => state.cart)

  const result = data.length

  return (
    <div>
      <div className='bg-white flex justify-between font-bold text-lg items-center px-16 p-4'>
        <div className=' hover:scale-150'>
          <Link to="/">
            <img className='w-24' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGnmrgCWfgo_sMSRqHXnOKALHltLHZeny-4w&s" alt="" />
          </Link>
        </div>
        <div>
          <ul className='flex space-x-20'>
            <li className='text-2xl font-semibold hover:text-red-500
            '><NavLink to="/">Home</NavLink></li>
            <li className='text-2xl font-semibold hover:text-red-500
            '><NavLink to="/shop">Shop</NavLink></li>
            <li className='text-2xl font-semibold hover:text-red-500
            '><NavLink to="/wishlist">Wishlist</NavLink></li>
            <li className='text-2xl font-semibold hover:text-red-500 hover:scale-125
            '><NavLink className="relative" to="/cart"><FaShoppingCart className='size-10 text-rose-600' />
                <span className='absolute top-[-20px] right-[-20px] size-8 flex justify-center items-center bg-gray-100 rounded-full'>
                  <span>{result}</span>
                </span></NavLink></li>
          </ul>
        </div>
      </div>
      <div className='bg-gray-300 w-screen h-1'></div>
      <Outlet />
    </div>
  )
}

export default Navbar
