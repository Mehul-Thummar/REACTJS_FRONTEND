import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const Axios_Post = () => {

  const data = { fname: '', lname: '' }

  const [userInput, setUserInput] = useState(data)

  console.log(userInput);

  const handleChange = (e) => {
    setUserInput({...userInput , [e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('https://jsonplaceholder.typicode.com/users'  , userInput)
    .then(response => console.log(response))
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    axios.put('https://jsonplaceholder.typicode.com/users/1'  , userInput)
    .then(response  => console.log(response))
  }


  const handleDelete = (e) => {
    e.preventDefault()
    axios.delete('https://jsonplaceholder.typicode.com/users/1'  , userInput)
    .then(response => console.log(response))
  }


  return (
    <div>
      <h1 className='text-center bg-pink-400 font-semibold text-white p-6 text-4xl mt-10'>This is Axios Post  / Put / Delete Method</h1>
      <div className='bg-gray-400 flex flex-col justify-center items-center h-96'>
        <div className='border-4 border-solid border-black p-6 flex flex-col text-2xl'>
          <div className='mb-4'>
            <label className='me-4' htmlFor='fname'>FirstName</label>
            <input type="text" name="fname" id="fname" value={userInput.fname} onChange={handleChange} />
          </div>
          <div className='mb-4'>
            <label className='me-4' htmlFor='lname'>LastName</label>
            <input type="text" name="lname" id="lname" value={userInput.lname} onChange={handleChange} />
          </div>
            <button className='border-2 hover:border-black hover:bg-yellow-500  border-white' onClick={handleSubmit}>Submit</button>
            <button className='border-2 hover:border-black hover:bg-yellow-500  border-white my-6' onClick={handleUpdate}>Update</button>
            <button className='border-2 hover:border-black hover:bg-yellow-500  border-white' onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Axios_Post
