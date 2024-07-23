import React from 'react'
import Home from './Home'
import Shop from './Shop'
import Cart from './Cart'
import Wishlist from './Wishlist'
import Navbar from '../Components/Navbar'
import {createBrowserRouter , RouterProvider , Route} from 'react-router-dom'

const roots  = createBrowserRouter([
  {
    path:'',
    element:<Navbar/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/shop',
        element:<Shop/>
      },
      {
        path:'/cart',
        element:<Cart/>
      },
      {
        path:'/wishlist',
        element:<Wishlist/>
      }
    ]
  }
 
])
const Layout = () => {
  return (
    <RouterProvider router={roots}>
    </RouterProvider>
  )
}

export default Layout
