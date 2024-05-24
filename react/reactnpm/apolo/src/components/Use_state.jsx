import React from 'react'
import { useState } from 'react'

const initialValue = 0

const Use_state = () => {
    const [state, setState] = useState(initialValue)
    const [name, setName] = useState('ReactJs')


    const handleIncrement = () => {
        setState(state => state + 5)
        setState(state => state + 5)
        setState(state => state + 5)
    }

    const handleDecrement = () => {
        setState(state - 1)
    }
    const handleReset = () => {
        setState(initialValue)
    }

    const handleChange = (e) => {
        setName(e.target.value)
    }

    return (
        <div>
            <h1 className='text-center text-4xl text-white bg-green-500 p-4 font-bold'>React useState Hook</h1>

            <span>
                useStateHook Value : - {state}
            </span>


            <button className='bg-purple-500 p-2 mx-4 text-white ' onClick={handleIncrement}>Increment</button>
            <button className='bg-purple-500 p-2 mx-4 text-white ' onClick={handleDecrement}>Decrement</button>
            <button className='bg-purple-500 p-2 mx-4 text-white ' onClick={handleReset}>Reset</button>


            <input className='border' type="text" onChange={handleChange} value={name} />

            <button className='bg-yellow-500 border p-2 mx-4 text-white ' onClick={() => setName('Fullstack')}>Click</button>
            <button className='bg-yellow-500 border p-2 mx-4 text-white ' onClick={() => setName('')}>Reset</button>
        </div>
    )
}

export default Use_state
