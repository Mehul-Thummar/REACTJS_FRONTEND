import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { productAdd } from '../reduxCore/productRedux/productActions'
import { addToCart } from '../reduxCore/cartRedux/cartActions'
import { CiHeart } from "react-icons/ci";
import { addToWishlist } from '../reduxCore/wishlistRedux/wishlistActions'


const Shop = () => {

  const dispatch = useDispatch()

  const data = useSelector((state) => state.product)

  console.log('shopData', data);

  useEffect(() => {
    dispatch(productAdd())
  }, [])

  return (
    <div>
      <div className='flex flex-wrap justify-around m-16'>
        {
          data.flat().map((item) => {
            return (
              <div key={item.id} className='my-8 ml-10 shadow-lg'>
                <div className='border-2 border-gray-300'>
                  <div className='bg-yellow-200 text-center'>
                    <div className='w-64 grid justify-end p-4 '>
                      <button onClick={() => dispatch(addToWishlist(item))} className='size-8 rounded bg-white hover:bg-[#ba933e] hover:text-white flex justify-center items-center mb-3'>
                        <CiHeart className='size-6 ' />
                      </button>
                    </div>
                    <div className='overflow-hidden'>
                      <img className='size-72 hover:scale-110' src={item.image} alt="" />
                    </div>
                    <div className='p-4'>
                      <div className='text-black font-bold'>
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                      </div>
                      <div className='mt-2'>
                        <button onClick={() => dispatch(addToCart(item))} className='border border-black px-5 py-1 bg-green-300 font-bold'>AddToCart</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
          )
        }
      </div>
    </div >
  )
}

export default Shop
