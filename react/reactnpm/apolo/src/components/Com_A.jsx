import React from 'react'
import Com_B from './Com_B'

const Com_A = () => {
    return (
        <div>
            <h1>This is Com A</h1>
            <span className="bg-red-500"></span>
            <Com_B/>
        </div>
    )
}

export default Com_A
