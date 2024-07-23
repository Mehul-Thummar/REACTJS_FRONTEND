import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { productAdd } from '../reduxCore/productRedux/productActions'
import { addToCart } from '../reduxCore/cartRedux/cartActions'


const Wishlist = () => {

  const data = useSelector((state) => state.wishlist)
  console.log('cartData', data);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(productAdd())
  }, [])

  return (
    <div>
      <div className='flex m-4 justify-between'>
        <div>
          <table className='w-[1000px] mt-12 text-center mx-auto'>
            <thead className='border-2 border-gray-300 '>
              <tr>
                <th>Product-Image</th>
                <th>Product-Title</th>
                <th>Product-To card</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((item) => {
                  return (
                    <tr className='border-2 border-gray-300 '>
                      <td className='overflow-hidden'>
                        <img className='hover:scale-110 size-36 mx-auto' src={item.image} alt="" />
                      </td>
                      <td>
                        <span>{item.title}</span>
                      </td>
                      <td>
                        <span>{item.price}</span>
                      </td>
                      <td className='mt-2'>
                        <button onClick={() => dispatch(addToCart(item))} className='border border-black px-5 py-1 bg-green-300 font-bold'>AddToCart</button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Wishlist
