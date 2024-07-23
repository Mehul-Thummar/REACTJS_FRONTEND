import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeToCart, emptyCart, incrementToCart, decrementToCart } from '../reduxCore/cartRedux/cartActions'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const navigate = useNavigate()

  const cartdata = useSelector((state => state.cart))
  console.log('cartData', cartdata);
  const dispatch = useDispatch()

  const amount = cartdata.length && cartdata.map((item) => item.price * item.quantity).reduce((prev, next) => prev += next)

  console.log(amount);

  return (
    <div>
      <h1 className='title'>This is Cart Page</h1>
      <button className='btn2 mt-2' onClick={() => dispatch(emptyCart())}>EmptyCart</button>
      {
        cartdata.length == 0 ?
          (
            <div>
              <div className='text-center text-4xl'>CartIsEmpty</div>
              <button className='btn' onClick={() => navigate('/shop')}>BackToShop</button>
            </div>
          )
          :
          (
            <div className='flex m-4 justify-between'>
              <div>
                <table className='w-[1000px] mt-12 text-center mx-auto'>
                  <thead className='border-2 border-gray-300 '>
                    <tr>
                      <th>Product-Image</th>
                      <th>Product-Title</th>
                      <th>Product-Quantity</th>
                      <th>Product-Price</th>
                      <th>Product-Remove</th>
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
                              <button onClick={() => dispatch(incrementToCart(item.id))} className='text-2xl me-4'>+</button>
                              <span className='text-2xl'>{item.quantity}</span>
                              <button onClick={() => dispatch(decrementToCart(item.id))} className='text-4xl ms-4'>-</button>
                            </td>
                            <td>
                              <span>${item.price * item.quantity}</span>
                            </td>
                            <td>
                              <button onClick={() => dispatch(removeToCart(item.id))} className='hover:scale-110 border border-black px-5 py-1 bg-green-300 font-bold'>RemoveToCart</button>
                            </td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
              <div className='w-[300px] '>
                <table className='mt-12'>
                  <thead className='border-2 border-gray-300'>
                    <tr>
                      <th>Total Price</th>
                    </tr>
                    <tr>
                      <th>${amount}</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          )
      }
    </div>
  )
}

export default Cart
