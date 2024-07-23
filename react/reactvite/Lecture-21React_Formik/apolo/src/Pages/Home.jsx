import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Outlet/>
      <h1 className='title'>This is Home Page</h1>
    </div>
  )
}

export default Home
