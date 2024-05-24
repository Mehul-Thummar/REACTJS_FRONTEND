import React from 'react'
import { useState, useEffect } from 'react'

const Use_state_form = () => {

    /* Page Sign in And Signout with useState */

    const [signin, setSignIn] = useState(false)

    const [product, setProduct] = useState("SkillQode")


    async function ProductDataList() {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const Data = await response.json()
        setProduct(Data)
        console.log(Data);
    }

    useEffect(() => {
        ProductDataList()
    }, [signin])

    return (
        <div>
            <h1 className='bg-purple-500 text-center text-4xl font-bold text-white p-4'>React useState Form</h1>
            {
                signin ? (
                    <div>
                        <button onClick={() => setSignIn(false)}>SignOut</button>
                        <h1>
                            Welcome , User How Are You@!
                        </h1>
                        <button onClick={() => ProductDataList()}>Click Me For ProductData</button>
                        <ul>
                            {
                                product.map((item) => <li>{item.title}</li>)
                            }
                        </ul>
                    </div>
                ) :
                    (
                        <div>
                            <button onClick={() => setSignIn(true)}>SignIn</button>
                            <h1>
                                Please Sign In
                            </h1>
                        </div>
                    )
            }
        </div>
    )
}

export default Use_state_form