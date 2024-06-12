import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Axios_Get = () => {

  const [user, setUser] = useState([])

  console.log(user);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUser(response.data))

  })


  return (
    <div>
      <h1 className='bg-purple-700 text-white text-center p-4 text-3xl'>This is Axios Get Request</h1>
      {
        user.map((item) => {
          return (
            <div key={item.id} className='flex space-x-10'>
              <div>{item.name}</div>
              <div>{item.email}</div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Axios_Get
