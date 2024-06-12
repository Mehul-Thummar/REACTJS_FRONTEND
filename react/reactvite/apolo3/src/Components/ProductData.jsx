import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const ProductData = () => {

    const [product, setproduct] = useState([])
    console.log('ProductData', product);

    const handleProductData = async () => {
        try {
            const response = axios.get('https://dummyjson.com/products')
            const data = (response.products);
        } catch (error) {
            console.log(error);

        }

        useEffect(() => {
            handleProductData()
        }, [])
    }



    return (
        <div>
            <button onClick={handleProductData} className="border-2 px-6 py-2 mt-5 font-bold border-purple-500 ">GetProductData</button>
            {
                product.map((item) => {
                    return (
                        <>
                            <div>{item.id}</div>
                            <div>{item.title}</div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default ProductData
