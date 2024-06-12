import React from 'react'
import Navbar from '../components/Navbar'
import Axios_Get from '../components/Axios_Get'
import Axios_Post from '../components/Axios_Post'

const Axios = () => {
    return (
        <div>
            <Navbar />



            {/* <Axios_Get/> */}
            <Axios_Post />

        </div>
    )
}

export default Axios
